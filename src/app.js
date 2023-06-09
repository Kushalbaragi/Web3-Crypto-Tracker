import React from "react";
import { Routes, Route } from "react-router-dom";
import Crypto from "./components/crypto";
import CryptoList from "./components/cryptoList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptoList />}></Route>
        <Route path="/crypto/:id" element={<Crypto />}></Route>
      </Routes>
    </>
  );
}

export default App;
