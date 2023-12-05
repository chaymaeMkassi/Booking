import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import NotFoundPage from "./components/404/NotFoundPage";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={ <NotFoundPage/>} />
        {/* <Redirect to="/404" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
