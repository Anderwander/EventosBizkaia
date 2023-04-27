import { useEffect, useState } from "react";

const EventTypeList = ({ handleClick, selectedType }) => {
  const [eventType, setEventType] = useState([]);

  useEffect(() => {
    fetch("https://api.euskadi.eus/culture/events/v1.0/eventType")
      .then((response) => response.json())
      .then((data) => {
        setEventType(data);
      });
  }, []);

  return (
    <div className="divCat">
      <h2>CATEGORÍAS</h2>
      <li
        className={selectedType === 0 ? "selectedType typeEvent" : "typeEvent"}
        onClick={() => handleClick(0)}
      >
        TODOS
      </li>
      <ul className="categorias">
        {eventType.map((eventType) => (
          <li
            key={eventType.id}
            className={
              selectedType === eventType.id
                ? "selectedType typeEvent"
                : "typeEvent"
            }
            onClick={() => handleClick(eventType.id)}
          >
            <img
              src={`/img/${eventType.nameEs.toLowerCase()}.png`}
              alt={eventType.nameEs}
              className="icono"
            />
            {eventType.nameEs}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTypeList;
