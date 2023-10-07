import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import SingleProduct from './Components/SingleProduct';
import Products from './Components/Products';
import Home from './Components/Home';
import Cart from './Components/Cart';
import About from './Components/About';
import Footer from './Components/Footer';
import LogIn from './Components/LogIn';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <>
<BrowserRouter>
<Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/products' element={<Products />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/login' element={<LogIn />}/>
    <Route path='/singleproduct/:id' element={<SingleProduct />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='*' element={<ErrorPage />}/>
  </Routes>
  <Footer />
</BrowserRouter>
    </>
  );
}

export default App;
