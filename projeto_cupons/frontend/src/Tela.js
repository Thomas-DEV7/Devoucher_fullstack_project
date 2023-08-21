import React from "react";
import AddCoupon from "./Components/AddCoupon";
import CouponList from "./Components/CouponList";

export function Tela() {
    return (
        <div className="App">
            <header className="container mt-4">
                <h1>CRUD de Cupons</h1>
            </header>
            <AddCoupon />
            <CouponList />

        </div>

    )
}
