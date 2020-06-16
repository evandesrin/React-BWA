import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReviewItems from "./Reviews";
import PropTypes from 'prop-types';

function App() {
  
  return ( 
  <div className="Parentbox">
    <FotoProduk/>
    <ProdukInfo isDiscount="yes" name="Sepatu" category="LEBARAN"/>
    <ReviewItems/>
  </div>
  );
}



function FotoProduk() {
  return ( 
    <div className="Foto">
      <img src="Spatu.jpg" alt="Ini Sepatu Boss"/>
    </div> 
  );
}

function CheckDiscount(props){
  const {isDiscount, discount}   = props;
  if (isDiscount === "yes"){
    return (
      <p>Diskon {discount}% off</p>
    );
  } 
  else if (isDiscount === "coming"){
    return (
      <p>Akan Ada diskon</p>
    )
  } 
  else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props){
  const {category, name, isDiscount} = props;
  const benefits = ["Tidak Kusut Terkena Air, ", "Bahan Kuat dan awet, ", "Anti selip"];
  const listBenefits = benefits.map((itembenefits) =>
  <li key={itembenefits}>{itembenefits}</li>
);

  return ( 
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 1.274.000.000 (Satu Buah)</p>
        <p className="Price">IDR 2.548.000.000 (Satu Pasang)</p>
        <CheckDiscount isDiscount={isDiscount}  discount={50}/>
        <p className="Info">
          Ini adalah sepatu bertali yang sangat langka!!, karena hanya ada 1 di dunia ini tanpa ada pasangannya!!, Sehingga anda perlu membelinya satu lagi agar dapat dipakai kedua kaki anda. Bila anda bingung mengapa harus membeli 2 padahal hanya ada 1 buah sepatu, hal ini dikarenakan waktu pembuatannya yang membutuhkan 1000 tahun !! Jadi mohon bersabar,
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add To Cart</a>
      </div>  
    </div>
    );
}

function TambahCart(e) {
  return console.log("Membeli " + e);
}

CheckDiscount.PropTypes = {
  discount: PropTypes.number.isRequired
};

export default App;