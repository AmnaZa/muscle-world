// Import necessary dependencies
import './App.css'; // Import the CSS file for styling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from 'react-router-dom'
import Home from './pages/Home'; // Import the Home page component
import Exercises from './pages/Exercises'; // Import the Exercises page component
import Nutrients from './pages/Nutrients'; // Import the Nutrients page component
import Contact from './pages/Contact'; // Import the Contact page component
import About from './pages/About'; // Import the About page component
import Footer from './components/Footer'; // Import the Footer component
import Navbar from './components/Navbar'; // Import the Navbar component
import GlobalStyles from './GlobalStyles'; // Import the global styles
import { HeaderContainer } from './HeaderStyles'; // Import the HeaderContainer component (assuming it's styled using styled-components)

// Create the main App component
function App() {
  // Render the App component
  return (
    <div>
      {/* Apply global styles */}
      <GlobalStyles />

      {/* Use BrowserRouter to enable routing */}
      <Router>
        {/* Create a container for the header */}
        <HeaderContainer>
          {/* Include the Navbar component inside the header */}
          <Navbar />
        </HeaderContainer>

        {/* Define routes for different pages using the 'Routes' component */}
        <Routes>
          {/* Each Route element maps a path to a specific page component */}
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercises />} />
          <Route path="/nutrients" element={<Nutrients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Include the Footer component at the bottom of the page */}
        <Footer />
      </Router>
    </div>
  );
}

// Export the App component as the default export
export default App;
