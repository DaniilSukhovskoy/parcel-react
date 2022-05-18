import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import './scss/style.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Works from './pages/Works/Works';
import About from "./pages/About/About";
import Project from "./components/Project/Project";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


export default function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5500', { mode: 'cors' })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, []);


return (
  <>
    <ScrollToTop />
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