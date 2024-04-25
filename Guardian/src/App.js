// App.js
import React from 'react';
import Navbar from './components/navbar';
import Transaction from './components/Transaction';
import FraudReportForm from './components/FraudReportForm';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Transaction />
        <FraudReportForm />
      </div>
    </div>
  );
}


export default App;
