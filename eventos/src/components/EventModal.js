import { useEffect, useState } from "react";

const EventModal = ({ event, className, close }) => {
  const [currentClassname, setCurrentClassName] = useState(null);

  useEffect(() => {
    setCurrentClassName(className);
  }, [className]);

  const closeModal = () => {
    setCurrentClassName(null);
    close();
  };
  return (
    <div>
      <section
        className={"modal-background " + currentClassname}
        onClick={closeModal}
      ></section>
      <article className={"modal " + currentClassname}>
        <h1>{event.nameEs}</h1>
        {event.images.length > 0 ? (
          <img
            src={event.images[0].imageUrl}
            alt={event.images[0].imageFileName}
            className="modal-img"
          />
        ) : (
          <img
            src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            alt="imagen"
          />
        )}
        <p className="infoModal">{event.municipalityEs}</p>
        <p className="infoModal">{event.priceEs}</p>
        <p className="infoModal">{event.startDate.split("T")[0]}</p>
        <p className="infoModal">{event.openingHoursEs}</p>
        <div
          className="infoModal"
          dangerouslySetInnerHTML={{ __html: event.descriptionEs }}
        ></div>
        <button className="closeButton" onClick={closeModal}>
          Cerrar
        </button>
      </article>
    </div>
  );
};

export default EventModal;
