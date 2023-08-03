import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Nutrients from './pages/Nutrients';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:symbol" element={<Exercises />} />
        <Route path="/nutrients" element={<Nutrients />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
