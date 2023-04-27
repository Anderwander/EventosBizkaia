import "./App.css";
import "./style.css";
import { useState } from "react";
import EventTypeList from "./components/EventTypeList";
import EventList from "./components/EventList";

function App() {
  const [eventType, setEventType] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>QUÉ HACER EN BIZKAIA</h1>
      </header>
      <main>
        <EventTypeList handleClick={setEventType} selectedType={eventType} />
        <EventList eventType={eventType} />
      </main>
    </div>
  );
}

export default App;
