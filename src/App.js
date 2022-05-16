import React, { useState } from 'react';
import './App.css';
import Picker from './Picker';
import Calender from './Calender';

function App() {
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState("");

  return (
      <div className="App">
      <Picker onClick={() => null} date={date} />
      <Calender />
</div>


  );
}

export default App;
