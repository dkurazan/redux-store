import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartOpened = useSelector(state => state.progress.isCartOpened)

    return (
        <Layout>
            {isCartOpened && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
