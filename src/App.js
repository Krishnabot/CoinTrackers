import { Route, Routes } from 'react-router-dom';
import CoinDetails from './pages/CoinDetails';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
