
import Login from "./components/login/Login";
import Interface from "./components/interface/Interface";
import NotFound from "./components/notfound/NotFound";
import {

  BrowserRouter ,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
       <Route
        exact
        path="/"
        element={<Interface/>}
        ></Route>
        <Route
        exact
        path="/login"
        element={<Login/>}
        ></Route>
         <Route
        exact
        path="*"
        element={<NotFound/>}
        ></Route>
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
