import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitial = true;

function App() {
    const isCartOpened = useSelector((state) => state.progress.isCartOpened);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <Layout>
            {isCartOpened && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
