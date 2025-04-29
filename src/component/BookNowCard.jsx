import "../assets/BookNowCard.css";
import Places from "../data/bookNow.json";
import { Link } from "react-router-dom";

export default function BookNowCard() {
  return (
    <>
      {Places.map((city, index) => (
        <div key={index} className="bookMainContainer">
          <span className="cityTitle">{city.city}</span>

          <div className="mainPlace">
            {city.places && city.places.length > 0 ? (
              city.places.map((record) => (
                <Link
                  key={record.id}
                  to={`/places${record.path}`}
                  className="placeLink"
                >
                  <div className="placeCard">
                    <div className="placesImage">
                      <img
                        src={record.image}
                        alt={record.placeName}
                        className="bookImage"
                      />
                    </div>
                    <div className="bookDetail">
                      <div className="detailInfo">{record.description}</div>
                      <div className="bookNowLocation">
                        Location: {record.placeName}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>No places available</div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}