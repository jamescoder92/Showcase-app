import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import FormPage from './pages/FormPage';

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