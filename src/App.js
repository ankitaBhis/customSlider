
import './App.css';
import Slider from './components/Slider/Slider'
import YearOfService from './components/Slider/YearService';
import { useState } from 'react';

function App() {
  const [MonthlyIncome,setMonthlyIncome] =useState(0)

  const getIncome=(salary)=>{
    setMonthlyIncome(salary)
  }

  return (
    <div className="App">
      <Slider data={{getIncome:getIncome}}/>
      <YearOfService data={MonthlyIncome}/>
    </div>
  );
}

export default App;
