import { useState, useEffect } from "react";
import EventModal from "./EventModal";

const EventList = ({ eventType }) => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const type = eventType !== 0 ? `&type=${eventType}` : "";
    fetch(
      `https://api.euskadi.eus/culture/events/v1.0/events/upcoming?_elements=20&_page=${page}&provinceNoraCode=48${type}`
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.items);
        setTotalPages(data.totalPages);
      });
  }, [page, eventType]);

  useEffect(() => {
    setPage(1);
  }, [eventType]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="section">
      <h2>Eventos</h2>

      <ul className="cardList">
        {events.map((event) => (
          <li
            className="card"
            key={event.id}
            onClick={() => setSelectedEvent(event.id)}
          >
            <div className="cardInfo">
              <EventModal
                event={event}
                className={selectedEvent === event.id ? "show" : ""}
                close={() => setSelectedEvent(null)}
              />
              <h3 className="eventName">{event.nameEs}</h3>
              <p className="date">{event.startDate.split("T")[0]}</p>
              <p>{event.openingHoursEs}</p>
            </div>
            {event.images.length > 0 ? (
              <img
                src={event.images[0].imageUrl}
                alt={event.images[0].imageFileName}
                className="img"
              />
            ) : (
              <img
                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                alt="imagen"
              />
            )}
          </li>
        ))}
      </ul>
      <h3>
        Págeina{page}/{totalPages}
      </h3>
      {page > 1 && <button onClick={previousPage}>Anterior</button>}
      {page < totalPages && <button onClick={nextPage}>Siguiente</button>}
    </section>
  );
};

export default EventList;
