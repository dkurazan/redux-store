import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { currencyFormatter } from "../../util/formatting";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(cartActions.increase(item));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{item.title}</h3>
                    <div className={classes.price}>
                        {currencyFormatter.format(item.price)}
                    </div>
                </header>
                <p>{item.description}</p>
                <div className={classes.actions}>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
