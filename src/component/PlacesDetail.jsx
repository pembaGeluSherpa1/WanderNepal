import { useParams } from "react-router-dom";
import touristData from "../data/places.json";
import "../assets/PlaceDetail.css"

const PlaceDetail = () => {
  const { city, placePath } = useParams(); 
  const allPlaces = Object.values(touristData).flat();
  const place = allPlaces.find(p => p.path === `/${city}/${placePath}`);

  if (!place) return <div className="p-4">Place not found.</div>;

  return (
    <div className="placeDetailContainer">
      <h1 className="placeName">{place.placeName}</h1>
      <img src={place.image} alt={place.placeName} className="detailImage" />
      <p className="mb-2">{place.description}</p>
      <ul className="mb-4">
        <li>Foreigners: Rs. {place.foreignNation}</li>
        <li>SAARC Nationals: Rs. {place.saarcNational}</li>
        <li>Chinese: Rs. {place.chinese}</li>
        <li>Nepalese: Rs. {place.nepalese}</li>
      </ul>
      <p className="mb-2">Contact: {place.contactNumber}</p>
      <iframe
        src={place.map}
        className="map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default PlaceDetail;