import { useDispatch, useSelector } from "react-redux";
import { progressActions } from "../../store/progress-slice";
import classes from "./CartButton.module.css";

const CartButton = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalQty = cartItems.reduce((accum, currentItem) => {
        return currentItem.quantity + accum;
    }, 0);

    const handleToggleCart = () => {
        dispatch(progressActions.toggleCart());
    };

    return (
        <button className={classes.button} onClick={handleToggleCart}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQty}</span>
        </button>
    );
};

export default CartButton;
