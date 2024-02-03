import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Table from './components/Table';

function App() {
  return (
   <body className='h-screen bg-mint-green'><Navbar/> <Table/> <Footer/> </body>
  );
}

export default App;
