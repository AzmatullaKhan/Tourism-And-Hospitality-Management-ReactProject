import { Home } from './components/Home';
import LoginPage from './components/Login'
import SignUpPage from './components/SignUp'
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { PaymentPage } from './components/Payment';
import { AboutPage } from './components/About';
import { BookPage1 } from './components/BookPage';
import { Help } from './components/Help';
import { Hotels } from './components/Hotels';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/bookPage' element={<BookPage1 />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/hotels' element={<Hotels />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
