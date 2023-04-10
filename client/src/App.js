import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homescreen from './pages/homepage/Homescreen';
import Roomscreen from './pages/roompage/Roomscreen';


function App() {


  return (
    <div className="App">

      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Homescreen />} exact />
          <Route path="/room" element={<Roomscreen />} exact />

        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
