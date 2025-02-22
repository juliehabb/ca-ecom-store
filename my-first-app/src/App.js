import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from ".components/footer/footer";


function App() {
  return (
    <BrowserRouter>
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={<homepage />} />
        <Route path="/product/:id" element={<productPage />} />
        <Route path="/cart" element={<cartPage />} />
        <Route path="/checkout-success" element={<checkoutSuccessPage />} />
        <Route path="/contact" element={<contactPage />} />
      </Routes>
      <Footer />
    </Router>
    </BrowserRouter>

  )
}

export default App;