import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              
              <img
                  src={item.photos[0]}
                  alt=""
                  className="fpImg"
                />
                
              <Link to={`/hotels/${item._id}`}>
                <span className="fpName">{item.name}</span>
              </Link>

              
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {item.cheapestPrice} DH</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
