import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homescreen from './pages/homepage/Homescreen';
import Roomscreen from './pages/roompage/Roomscreen';
import Adminscreen from './pages/adminpage/Adminscreen';
import Sellerscreen from './pages/sellerpage/Sellerscreen'
import Userscreen from './pages/userpage/Userscreen';
import SellerRegister from './components/SELLER/sellerRegsiter/SellerRegister';



function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Homescreen />} exact />
          <Route path="/room" element={<Roomscreen />} exact />
          <Route path="/admin" element={<Adminscreen />} exact />
          <Route path="/seller" element={<Sellerscreen />} exact />
          <Route path="/profile" element={<Userscreen />} exact />
          <Route path="/registerseller" element={<SellerRegister />} exact />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
