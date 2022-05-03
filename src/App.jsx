import React, { useState, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Works from './pages/Works/Works';
import About from "./pages/About/About";
import Project from "./components/Project/Project";


import './scss/style.scss';

export default function App() {

  const [data, setData] = useState([])


  // notion database fetch
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('http://localhost:5500/works');
  //     const data = await res.json();
  //     setData(data);
  //     console.log(data);
  //   }

  //   getData();

  // }, []);


  useEffect(() => {
    const getData=()=>{
        fetch('https://localhost:1234/works.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(data) {
            setData(data);
          });
      }
      console.log(data);
      getData();

}, []);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/:filter" element={<Works data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/:filter/:id" element={<Project data={data} />} />
        <Route path="/*" element={<Navigate to="/work" />} />
      </Routes>

      <Footer />
    </>
  )
}