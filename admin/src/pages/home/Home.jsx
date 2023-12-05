import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data} = useFetch(`/hotels`);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="hotels" />
          <Widget type="rooms" />
        </div>
        
        <div className="listContainer">
          <div className="listTitle">Booked Rooms</div>
          <Table hotels= {data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
