import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HotelIcon from '@mui/icons-material/Hotel';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

import useFetch from "../../hooks/useFetch.js";
import { Link } from "react-router-dom";
const Widget = ({ type }) => {
  let info;
  let path = "/"+type;


  const { data} = useFetch(`/${type}`);


  const amount = data.length;


  switch (type) {
    case "users":
      info = {
        title: "USERS",
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        number: data.lentgh
      };
      break;
    case "hotels":
      info = {
        title: "HOTELS",
        link: "See all hotels",
        icon: (
          <HomeWorkOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        number: data.lentgh
      };
      break;
    case "rooms":
      info = {
        title: "ROOMS",
        link: "See all rooms",
        icon: (
          <HotelIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        number: data.lentgh
      };
      break;
    
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{info.title}</span>
        <span className="counter">
          {data.lentgh} {amount}
        </span>
        <Link to={path} style={{ textDecoration: "none" }}>
          <span className="link">{info.link}</span>
        </Link>
        
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {info.icon}
      </div>
    </div>
  );
};

export default Widget;
