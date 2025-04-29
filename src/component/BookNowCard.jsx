import "../assets/BookNowCard.css";
import Places from "../data/bookNow.json";
import { Link } from "react-router-dom"; // Make sure you're using react-router

export default function BookNowCard() {
  console.log(Places);

  return (
    <div className="bookMainContainer">
      {Places.map((city, index) => (
        <div key={index}>
          <span className="cityTitle">{city.city}</span>

          {city.places && city.places.length > 0 ? (
            city.places.map((record) => (
              <div key={record.id} className="mainPlace">
                <Link to={`/places${record.path}`} className="placeLink">
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
              </div>
            ))
          ) : (
            <div>No places available</div>
          )}
        </div>
      ))}
    </div>
  );
}