import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Tela } from './Tela';
import { Header } from './Components/screen/header';
import Footer from './Components/screen/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/cupons" element={<Tela />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
