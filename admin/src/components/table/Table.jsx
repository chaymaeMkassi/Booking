import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../hooks/useFetch";

const List = (props) => {
  

    const { data} = useFetch(`/rooms`);

    let rooms = [];
    let hotelsname = [];

    const searchbookedrooms = ()=>{
      let datas=[]
      data.map((item) => (item.roomNumbers.map((roomNumber) => {
        
        (roomNumber.unavailableDates && roomNumber.unavailableDates.length > 0) ? datas.push(item) : console.log();
        (roomNumber.unavailableDates && roomNumber.unavailableDates.length > 0) ? rooms.push(item._id) : console.log()
      })))
      return datas;
    }
    let Fdata= searchbookedrooms();

    let numerdata = [];
    let pricedata = [];
    let dates = [];
    const searchinfonumber = (alldata)=>{
      alldata.map((item) => (item.roomNumbers.map((roomNumber) => {
        (roomNumber.unavailableDates && roomNumber.unavailableDates.length > 0) ? numerdata.push(roomNumber.number) : console.log();
        (roomNumber.unavailableDates && roomNumber.unavailableDates.length > 0) ? pricedata.push(item.price) : console.log();
        (roomNumber.unavailableDates && roomNumber.unavailableDates.length > 0) ?  dates.push(roomNumber.unavailableDates) : console.log();

      })))
      
    }
    searchinfonumber(Fdata);
  
    let users = [];
    let datestart = [];
    let dateend = []
    const searchdate = ()=>{
      dates.map((item) => (item.map((object)=>{
        users.push(object.user);
        datestart.push(object.date[0]);
        dateend.push(object.date[object.date.length - 1]);
      })))
    }
    searchdate();


    const searchhotelinfo = ()=>{
      let hotelsn = [];
      props.hotels.map((item) => (item.rooms.map((room) => {
        rooms.includes(room) ? hotelsn.push(item.name) : console.log()
      })))

      return hotelsn;

    }

    hotelsname = searchhotelinfo();
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Room name</TableCell>
            <TableCell className="tableCell">Hotel name</TableCell>
            <TableCell className="tableCell">Room number</TableCell>
            <TableCell className="tableCell">Room price</TableCell>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Dates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Fdata.map((row,i) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.title}</TableCell>
                <TableCell className="tableCell">{hotelsname[i]}</TableCell>
                <TableCell className="tableCell">{numerdata[i]}</TableCell>
                <TableCell className="tableCell">{pricedata[i]}</TableCell>
                <TableCell className="tableCell">{users[i]}</TableCell>
                <TableCell className="tableCell">{datestart[i]}  -  {dateend[i]}</TableCell>
                
                
              </TableRow>
              
            
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
