import './App.css';
import Header from './components/Header/Header.js';
// import Product from './components/Product/Product.js';
import Newsletter from './components/Newsletter/Newsletter.js';
import Footer from './components/Footer/Footer.js';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Product /> */}
      <div>
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
