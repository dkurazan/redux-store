import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
    name: 'userProgress',
    initialState: {
        isCartOpened: false
    },
    reducers: {
        toggleCart: (state) => {
            state.isCartOpened = !state.isCartOpened
        }
    }
})



export const progressActions = progressSlice.actions;

export default progressSlice.reducer;