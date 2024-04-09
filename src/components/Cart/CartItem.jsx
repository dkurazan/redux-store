import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { currencyFormatter } from "../../util/formatting";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const { title, quantity, price } = item;

    const handleIncrease = () => {
        dispatch(cartActions.increase(item));
    };

    const handleDecrease = () => {
        dispatch(cartActions.decrease(item));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                {currencyFormatter.format(price*quantity)}{" "}
                    <span className={classes.itemprice}>
                        ({currencyFormatter.format(price)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleDecrease}>-</button>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
