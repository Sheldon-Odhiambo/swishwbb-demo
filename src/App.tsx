import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Players from './pages/Players';
import PlayerDetail from './pages/PlayerDetail';
import Schedule from './pages/Schedule';
import Merch from './pages/Merch';
import MerchDetail from './pages/MerchDetail';
import Cart from './pages/Cart';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Tickets from './pages/Tickets';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans bg-noir text-white selection:bg-cherry selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/players" element={<Players />} />
              <Route path="/players/:id" element={<PlayerDetail />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tickets/:gameId" element={<Tickets />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/merch/:id" element={<MerchDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/story" element={<Story />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
