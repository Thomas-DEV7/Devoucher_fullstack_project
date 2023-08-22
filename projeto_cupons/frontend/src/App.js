import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoutes';
import { Header } from './Components/screen/header';
import Footer from './Components/screen/footer';
import AddCoupon from './Components/AddCoupon';
import CouponList from './Components/CouponList';

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <PrivateRoute path="/cupons" element={<CouponList />} />
          <PrivateRoute path="/new" element={<AddCoupon />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
