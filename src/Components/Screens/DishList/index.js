import Styles from './DishList.module.css'
import Card from "../../Card";
import {useNavigate} from "react-router-dom";
function DishList({dish , sel_restaurant}){
    const navigate = useNavigate();
    const nav_selectedDish = () =>{
        navigate(`/restaurants/${sel_restaurant}/dishList/${dish.id}`)
    }
    return(
        <div onClick={nav_selectedDish}>
            <div className={Styles.DishList_name}>{dish.name}</div>
            <div className={Styles.DishList_description}>{dish.description}</div>
            <div className={Styles.DishList_price}>${dish.price}</div>
        </div>
    )
}
export default DishList