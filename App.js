import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials'

import './css/style.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
