import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homescreen from './pages/homepage/Homescreen';
import Roomscreen from './pages/roompage/Roomscreen';
import Adminscreen from './pages/adminpage/Adminscreen';
import Sellerscreen from './pages/sellerpage/Sellerscreen'
import Userscreen from './pages/userpage/Userscreen';
import SellerRegister from './components/SELLER/sellerRegsiter/SellerRegister';
import BlogPage from './pages/blogpage/blogscreenPage/BlogPage';
import Blogscreen from './pages/blogpage/blogScreen';
import CreateBlog from './pages/sellerpage/blog/CreateBlog';
import Sellerprofile from './pages/sellerpage/sellerprofile/Sellerprofile';






function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Homescreen />} exact />
          <Route path="/room" element={<Roomscreen />} exact />
          <Route path="/admin" element={<Adminscreen />} exact />
          <Route path="/seller" element={<Sellerscreen />} exact />
          <Route path="/seller/:tab" element={<Sellerscreen />} />
          <Route path="/profile" element={<Userscreen />} exact />
          <Route path="/sellerprofile" element={<Sellerprofile />} exact />
          <Route path="/registerseller" element={<SellerRegister />} exact />
          <Route path="/blog" element={<Blogscreen />} exact />
          <Route path="/blog/:blogid" element={<BlogPage />} exact />
          <Route path="/create-blog" element={<CreateBlog />} exact />
          

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
