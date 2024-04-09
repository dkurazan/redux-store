import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

let isInitial = true;

function App() {
    const isCartOpened = useSelector((state) => state.progress.isCartOpened);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        const sendCartData = async () => {
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

            console.log("sent");

            if (!response.ok) {
                throw new Error("Sending cart data went wrong");
            }
        };

        if (isInitial) {
            isInitial = false;
            console.log("stop");
            return;
        }

        sendCartData().catch((error) => {
            window.alert(error.message);
        });
    }, [cart]);

    return (
        <Layout>
            {isCartOpened && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
