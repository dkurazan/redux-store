import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async () => {
        try {
            const response = await fetch(
                "https://redux-store-6f779-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application.json",
                    },
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data went wrong");
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://redux-store-6f779-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");

            if (!response.ok) {
                throw new Error("Fetching cart data went wrong");
            }

            const resData = await response.json();

            dispatch(cartActions.setCart(resData));
        } catch (error) {
            window.alert(error.message);
        }
    }
}