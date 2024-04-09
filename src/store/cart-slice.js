import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        changed: false
    },
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload.items
        },
        increase: (state, action) => {
            const passedItem = action.payload;
            const existingItem = state.items.find(item => item.id === passedItem.id);
            state.changed = true;

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
            state.changed = true;

            if (passedItem.quantity === 1) {
                state.items.pop(currentItemIndex)
            } else {
                state.items[currentItemIndex].quantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer