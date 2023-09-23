import { BookPage } from './components/Book';
import { Home } from './components/Home';
import LoginPage from './components/Login'
import SignUpPage from './components/SignUp'
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { PaymentPage } from './components/Payment';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/book' element={<BookPage />}/>
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
