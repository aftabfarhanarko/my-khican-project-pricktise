import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OrderCointner from './components/OrderCointner';

const orderPromise = fetch("/orders.json").then(res => res.json());
const App = () => {
  return (
    <div>
      <header >
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <Suspense fallback={<h1>Loding....</h1>}>
           <OrderCointner orderPromise={orderPromise}></OrderCointner>
        </Suspense>
          
      </main>
    </div>
  );
};

export default App;