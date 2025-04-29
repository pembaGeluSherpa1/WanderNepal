import "../assets/BookNowCard.css";
import Places from "../data/bookNow.json";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Recommend() {
    const initialVisible = 4;
    const [visibleCounts, setVisibleCounts] = useState(
        Places.reduce((acc, city) => {
            acc[city.city] = initialVisible;
            return acc;
        }, {})
    );

    const handleLoadMore = (cityName) => {
        setVisibleCounts((prevCounts) => ({
            ...prevCounts,
            [cityName]: prevCounts[cityName] + initialVisible,
        }));
    };

    return (
        <>
            {Places.map((city, index) => (
                <div key={index} className="bookMainContainer">
                    <span className="cityTitle">{city.city}</span>

                    <div className="mainPlace">
                        {city.places && city.places.length > 0 ? (
                            <>
                                {city.places.slice(0, visibleCounts[city.city]).map((record) => (
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
                                ))}

                                {visibleCounts[city.city] < city.places.length && (
                                    <button
                                        className="loadMoreBtn"
                                        onClick={() => handleLoadMore(city.city)}
                                    >
                                        Load More
                                    </button>
                                )}
                            </>
                        ) : (
                            <div>No places available</div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}