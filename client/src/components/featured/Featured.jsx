import useFetch from "../../hooks/useFetch";
import "./featured.css";
import fesimg from "../../img/fes.jpg"
import marakech from "../../img/marakech.jpg"
import tanger from "../../img/tanger.jpeg"


const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=fes,marrakesh,tanger"
  );
  
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <> 
          <div className="featuredItem">
            <img
              src={fesimg}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Fez</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src={marakech}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Marrakesh</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={tanger}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tanger</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
