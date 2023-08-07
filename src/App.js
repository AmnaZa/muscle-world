import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Nutrients from './pages/Nutrients';
import Contact from './pages/Contact'; 
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles'; // Import the global styles
import { HeaderContainer } from './HeaderStyles'; 

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercises />} />
          <Route path="/nutrients" element={<Nutrients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;