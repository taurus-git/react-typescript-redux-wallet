import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: true, //Todo: remove temporary 'true'
}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }

})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
