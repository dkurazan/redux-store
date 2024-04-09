import { configureStore } from '@reduxjs/toolkit';
import progressReducer from './progress-slice';
import cartReducer from './cart-slice';

const store = configureStore({
    reducer: {
        progress: progressReducer,
        cart: cartReducer
    }
})

export default store;