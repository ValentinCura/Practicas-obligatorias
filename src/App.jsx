import Tables from './components/tables/Tables';
import './App.css'
import React from 'react'

function App() {
  const netIncomes = [{brand: 'McDonalds', income: 1291283}, {brand: 'Burger King', income: 1927361}, {brand: 'KFC', income: 1098463}];

  return (
    <div>
      <Tables receivedNetIncomes={netIncomes} />
    </div >
  );
}
export default App