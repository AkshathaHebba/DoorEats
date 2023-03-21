import logo from './logo.svg';
import React from "react";
import './App.css';
import RestaurantsList from "./Components/Screens/RestaurantsList";
import RestaurantDetail from "./Components/Screens/RestaurantDetail";
import Header from "./Components/Header";
import DishDetail from "./Components/Screens/DishDetail";
import NotFound from "./Components/Screens/NotFound/NotFound";
import DishList from "./Components/Screens/DishList";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/restaurants' element={<RestaurantsList/>}/>
                <Route path='/restaurants/:restaurantId' element={<RestaurantDetail/>}/>
                <Route path='/restaurants/:restaurantId/dishList' element={<DishList/>}/>
                <Route path='/restaurants/:restaurantId/dishList/:dishId' element={<DishDetail/>}/>
                <Route path='*' element={<NotFound/>}/>-[
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
