import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

function CryptoList() {
  let [coins,setCoins]=useState([]);
  let [search, setSearch]=useState('')
  
  useEffect(()=>{
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '249c2e6112msh0df18d9e32cae59p1efb3ajsnbf8faecd8641',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    fetch(url,options).then(response=>response.json()).then(data=>setCoins(data.data.coins))
  // setCoins([{
  //   symbol:'ab',
  //   name:'kushal',
  //   price:22,
  //   change:0.3,
  // },
  // {
  //   symbol:'ab',
  //   name:'kushal',
  //   price:22,
  //   change:0.3,
  // },
  // {
  //   symbol:'ab',
  //   name:'kushal',
  //   price:22,
  //   change:0.3,
  // },
  // {
  //   symbol:'ab',
  //   name:'kushal',
  //   price:22,
  //   change:0.3,
  // },
  // {
  //   symbol:'ab',
  //   name:'kushal',
  //   price:22,
  //   change:0.3,
  // }])
  },[])
  function handler(e){
    setSearch(e.target.value);
  }


  return (
    <>
    <div className='container overflow-hidden'>
      <div className='row'>
      <input placeholder='Search coins' value={search} onChange={handler} className='form-control my-5'/>
      </div>
     
    <table className='table table-striped text-center'>
   
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price (USD)</th>
          <th>Change (%)</th>
        </tr>
      </thead>
      <tbody>
        {
          coins.filter((ele)=>{
            return search===''? ele : ele.name.toLowerCase().includes(search.toLowerCase());
          }) .map((a,index)=>{
            return(
             <tr key={index}>
              <td><Link to={`/crypto/${a.name}`}>{a.symbol}</Link></td>
              <td>{a.name}</td>
              <td>{Number(a.price).toFixed(2)}</td>
              {a.change>0 ? <td className='text-success'>{a.change}</td> :<td className='text-danger'>{a.change}</td>}
             </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
    </>
    // <div style={{backgroundColor:'black', color:'white'}}  className='container'>
    //   <div className='row row-cols-1 row-cols-md-4 g-5'> 
    //     <div style={{backgroundColor:'blue', color:'white',height:'200px'}} className='col'>kushal</div>
    //     <div style={{backgroundColor:'red', color:'white',height:'200px'}} className='col'>sadashiv</div>
    //     <div style={{backgroundColor:'yellow', color:'black',height:'200px'}} className='col'>baragi</div>

    //   </div>
    // </div>
  )
}

export default CryptoList