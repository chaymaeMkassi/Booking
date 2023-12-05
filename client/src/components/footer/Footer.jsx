import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">ATT Booking</span>
        </Link>
      </div>
      <div className="fText">Copyright © 2022 Chaymae mkassi.</div>
    </div>
  );
};

export default Footer;
