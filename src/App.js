import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';
import Service from './component/Service';
import Newproduct from './component/Newproduct';
import Offerproduct from './component/Offerproduct';
import { useEffect } from 'react';
import Nomatch from './component/Nomatch';
import Authentication from './component/Authentication';
import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
import AuthenticationProvider from './component/AuthenticationProvider';



function App() {
  return (
    <div className="App">
      <Authentication>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Nested Routing-----to show the element we have to use <outlet/> */}
          <Route path='/product' element={<Product />}>
            <Route path='new' element={<Newproduct />}/>
            <Route path='offer' element={<Offerproduct />} />
          </Route>

          <Route path='/service' element={<Service />} />

          {/* for wrong path */}
          <Route path='*' element={<Nomatch />} />

          {/* login page */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />


        </Routes>
      </Authentication>
    </div>
  );
}

export default App;
