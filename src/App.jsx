import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Works from './components/Works/Works';
import Work from "./components/Work/Work";
import About from "./components/About/About";

import './scss/style.scss';

export default function App() {
    
    const [data, setData] = useState([])

    // notion database fetch
    const getData=()=>{
        fetch('data.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(data) {
            // console.log(data);
            setData(data);
          });
      }
      useEffect(()=>{
        getData()
      },[])



    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Works data={data} />} />
                <Route path="/about" element={<About />} />
                <Route path="/work/:title" element={<Work />} />
            </Routes>

            <Footer />
        </>
    )
}