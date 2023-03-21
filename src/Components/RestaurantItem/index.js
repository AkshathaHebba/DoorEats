import Styles from './Restaurant.module.css';
import Rows from '../Rows'
import Card from '../Card'
import { useNavigate } from "react-router-dom";
const RestaurantItem = ({restaurant}) => {
    const navigate = useNavigate();
    const nav_selectedRestaurant = () => {
        navigate(`/restaurants/${restaurant.id}`);
    }
    return(
        <Card onClick={nav_selectedRestaurant}>
            <div>
                <img className={Styles.item} src={restaurant.image} alt="restaurant_Image"/>
                <div className={Styles.item_desc}>
                    <div>
                        <Rows>
                         <span className={Styles.item_title}>
                                    {restaurant.name}
                         </span>
                        </Rows>
                        <Rows>
                         <span className={Styles.item_subtitle}>
                                    $$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes
                         </span>
                        </Rows>
                    </div>
                    <div className={Styles.rating}>
                        {restaurant.rating}
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default RestaurantItem