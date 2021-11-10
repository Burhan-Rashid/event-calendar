import './App.css';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function App() {
  const [list, setList] = useState([]);
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState("");

  const saveEvent = () => {
    const obj = {
      date,
      event
    }
    const newList = [...list, obj];
    setList(newList);
    setDate(new Date());
    setEvent("");
  }

  return (
    <div className="App">
      <div className="event">
        <DateTimePicker
          onChange={setDate}
          value={date}
        />
        <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} placeholder="Enter your event details" />
        <button onClick={saveEvent}>Save Event</button>
      </div>
      <div className="list">
        {list.map((obj) => {
          return <div key={obj.date}> {obj.date.toString()} -------- {obj.event.toString()} </div>
        })}

      </div>
    </div>
  );
}

export default App;
