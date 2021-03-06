import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotAvailable from './Pages/NotAvailable/NotAvailable';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='components_center'>
      <Header></Header>
       <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <CheckOut/>           
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/service/:serviceId' element={<ServiceDetails/>}></Route>
          <Route path='*' element={<NotAvailable/>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
