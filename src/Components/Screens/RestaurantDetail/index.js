import Styles from './RestaurantDetail.module.css'
import Rows from "../../Rows";
import restaurant from '../../../Components/data/restaurants.json'
import DishList from "../DishList";
import cs from 'classnames'
import Card from "../../Card";
import React from "react";
import {useParams,useNavigate} from "react-router-dom";

function RestaurantDetail(){
    let nav = useNavigate();
    let {restaurantId} = useParams();
    let selected_restaurant = restaurant.find((obj) => obj.id === restaurantId);
    return(
                <div>
                    <div className={Styles.img}>
                        <img className={Styles.img_item} src={selected_restaurant.image} alt="restaurant_Image"/>
                        <button className={cs(Styles.btn_back)} onClick={() => nav(-1)}>⬅</button>
                    </div>
                    <div>
                            <Rows>
                                 <span className={Styles.item_title}>
                                            {selected_restaurant.name}
                                 </span>
                            </Rows>
                            <Rows>
                                <div className={Styles.item_desc}>
                                    <span className={Styles.item_subtitle}>
                                        $$  &#8226; <span className={Styles.rating}> {selected_restaurant.rating}</span> ⭐
                                    </span>
                                </div>
                            </Rows>
                        <div className={Styles.RestaurantDetail_Menu}>
                            Menu
                        </div>
                        <div className="Cards_Container">
                            {selected_restaurant.dishes.map((dish) => {
                                return (
                                    <Card className={Styles.item_dish}>
                                        <DishList dish={dish} sel_restaurant={restaurantId}/>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>

    )
}

export default RestaurantDetail