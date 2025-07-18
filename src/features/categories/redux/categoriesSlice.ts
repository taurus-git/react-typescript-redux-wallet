import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { normalizeCategories, NormalizedCategories } from "../utils/normalizeCategories";

interface CategoriesState extends NormalizedCategories {
    loading: boolean,
    error: string | null,
}

const initialState: CategoriesState = {
    expenses: [],
    incomes: [],
    loading: false,
    error: null,
};

export const fetchCategories = createAsyncThunk(
    'categories/fetch',
    async ( _, thunkAPI ) => {
        try {
            const response = await fetch( "/data/categories.json" );
            if ( !response.ok ) {
                throw new Error( "The categories file wasn't found" );
            }
            const data = await response.json();
            return normalizeCategories( data.accounts );
        } catch ( error ) {
            return thunkAPI.rejectWithValue( (error as Error).message );
        }
    }
);

const categoriesSlice = createSlice( {
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder
            .addCase( fetchCategories.pending, ( state ) => {
                state.loading = true;
                state.error = null;
            } )
            .addCase( fetchCategories.fulfilled, ( state, action ) => {
                state.loading = false;
                state.expenses = action.payload.expenses;
                state.incomes = action.payload.incomes;
            } )
            .addCase( fetchCategories.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.error.message ?? "Loading the categories file failed"
            } );
    },
} );

export default categoriesSlice.reducer;
