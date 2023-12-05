import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate ,Navigate} from "react-router-dom";


const Reserve = ({ setOpen, hotelId ,userId}) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data} = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  // console.log(dates)


  const getDatesInRange = (startDate, endDate) => {

  
    const start = new Date(startDate);
    const end = new Date(endDate);
    // console.log("end:  ")
    // console.log(end)
    // console.log("start:   ")
    // console.log(start)
    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }


    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  // console.log(alldates)

  const isAvailable = (roomNumber) => {
    console.log(roomNumber)
    const isFound = roomNumber.unavailableDates.some((object) =>
      object.date.some((date)=>{
        console.log("new")
        console.log(new Date(date).getTime())
        alldates.includes(new Date(date).getTime())
      }
    ));

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();





  let dataR = {date:alldates,user:userId};

  const handleClick = async () => {
    
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: dataR,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };




  return (
    <div className="reserve">
      <div className="resContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="resClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {
        data.map((item) => (
          <div className="resItem" key={item._id}>
            <div className="resItemInfo">
              <div className="resTitle">{item.title}</div>
              <div className="resDesc">{item.desc}</div>
              <div className="resMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="resPrice">{item.price} DH</div>
            </div>
            <div className="resSelectRooms"> 
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))} 
        <button onClick={handleClick} className="resButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
