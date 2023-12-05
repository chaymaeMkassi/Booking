import "./notFoundPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NotFoundPage = () => {
    const { user } = useContext(AuthContext);

    const handleClick = async (e) => {

        localStorage.removeItem("user");
        window.location.reload();
    }; 
    return (
        <div className="not-found">
            <div className="status">404</div>
            <div className="disc1">OPPS ! PAGE NOT FOUND</div>
            <div className="disc2">Sorry, the page you're looking for doesn't exist</div>
            
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <button className="not-found-btn">RETURN HOME</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
