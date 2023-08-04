import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Nutrients from './pages/Nutrients';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router> {/* Wrap your entire app in the BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercises />} /> {/* Make sure the element prop is set to Exercises */}
          <Route path="/nutrients" element={<Nutrients />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;