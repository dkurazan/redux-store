import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
    {
        id: "p1",
        title: "Test",
        description: "This is a first product - amazing!",
        price: 6,
    },
    {
        id: "p2",
        title: "Test 2",
        description: "This is a second product - amazing!",
        price: 12,
    },
    {
        id: "p3",
        title: "Test 3",
        description: "This is a third product - amazing!",
        price: 8,
    },
    {
        id: "p4",
        title: "Test 4",
        description: "This is a fourth product - amazing!",
        price: 10,
    },
];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_ITEMS.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
};

export default Products;
