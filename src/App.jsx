import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import FormPage from './components/FormPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/admin" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;