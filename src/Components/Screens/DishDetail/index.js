import restaurant from '../../data/restaurants.json'
import Rows from "../../Rows";
import Styles from './DishDetail.module.css'
import Column from "../../Column";
import cs from "classnames";
import {useParams, useNavigate} from "react-router-dom";
import {useState} from "react";

function DishDetail(){
    let nav = useNavigate()
    let { dishId } = useParams();
    let { restaurantId } = useParams();
    let selected_restaurant = restaurant.find((obj) => obj.id === restaurantId);
    let selected_dish = selected_restaurant.dishes.find((obj) => obj.id === dishId);

    //change quantity
    let [quantity,setQuantity] = useState(0);
    function increaseQuantity(){
        if(quantity < 5){
            setQuantity(quantity +1);
        }
    }
    function decreaseQuantity(){
        if(quantity !== 0 ){
            setQuantity(quantity -1);
        }
    }
    return(
        <div>
                <Column className={Styles.DishDetail_container}>
                    <Rows>
                        <div>
                            <div>
                                <button className={cs(Styles.DisDetail_back)} onClick={() => nav(-1)}>⬅</button>
                            </div>
                            <div className={Styles.DishDetail_name}>
                                {selected_dish.name}
                            </div>
                            <div className={Styles.DishDetail_desc}>
                                {selected_dish.description}
                            </div>
                        </div>
                    </Rows>
                    <Rows className={Styles.DishDetail_QuantityContainer}>
                        <button className={Styles.DishDetail_quantity} onClick={increaseQuantity}>
                            ➕
                        </button>
                        <div className={Styles.DishDetail_quantityNum}>{quantity}</div>
                        <button className={Styles.DishDetail_quantity} onClick={decreaseQuantity}>
                            ➖
                        </button>
                    </Rows>
                    <Rows className={Styles.DishDetail_Basket}>
                        Add to Basket
                    </Rows>
                </Column>
        </div>
    )
}
export default DishDetail
