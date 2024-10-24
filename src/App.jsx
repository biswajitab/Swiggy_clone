
import { Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Category from "./component/Category";
import Header from "./component/header";
import RestaurantMenu from "./component/RestaurantMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
         <Route path="/" element={<Body/>}></Route>
         <Route path="/RestaurantMenu/:id" element={<RestaurantMenu/>}></Route>
      </Route>
      
    </Routes>

  );
}

export default App;
  
   