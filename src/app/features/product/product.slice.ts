

import { createSlice } from '@reduxjs/toolkit';
import { Product } from './../../../components/ProductsList/interface/product';
import productsMock from '../../../mocks/products.mock.json';
import { IProducts } from './interface/product';
import { IAction } from './interface/action';


const initialState: IProducts = {
    values: productsMock.products
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        handleProductToggle: (state = initialState, action: IAction) => {
            state.values = state.values.map((product: Product) =>
                product.id === action.payload ? { ...product, checked: !product.checked } : product);
        }
    }
});


export const { handleProductToggle } = productSlice.actions;



export default productSlice.reducer;