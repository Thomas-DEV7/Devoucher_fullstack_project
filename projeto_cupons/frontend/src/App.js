import React from 'react';
import './App.css';
import CouponList from './Components/CouponList';
import AddCoupon from './Components/AddCoupon';


function App() {
  return (
    <div className="App">
      <header className="container mt-4">
        <h1>CRUD de Cupons</h1>
      </header>
      <AddCoupon />
      <CouponList />

    </div>
  );
}

export default App;
