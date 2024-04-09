import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        increase: (state, action) => {
            const passedItem = action.payload;
            const existingItem = state.items.find(item => item.id === passedItem.id);

            if (!existingItem) {
                state.items.push({
                    id: passedItem.id,
                    title: passedItem.title,
                    price: passedItem.price,
                    description: passedItem.description,
                    quantity: 1
                })
            } else {
                existingItem.quantity++
            }
        },
        decrease: (state, action) => {
            const passedItem = action.payload;
            const currentItemIndex = state.items.findIndex(item => item.id === passedItem.id);

            if (passedItem.quantity === 1) {
                state.items.pop(currentItemIndex)
            } else {
                state.items[currentItemIndex].quantity--;
            }
        }
    }
})

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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer