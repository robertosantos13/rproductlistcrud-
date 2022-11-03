import { Product } from '../../../components/ProductsList/interface/product';
import { RootState } from '../../store/store';


export const listAllProducts = (state: RootState) => state.products.values;
export const listSelectedProducts = (state: RootState) => state.products.values.filter((product: Product) => product.checked);

export const listCurrentSelectedProducts = (state: RootState) => state.products.values
    .filter((product: Product) => product.checked)
    .map((product: Product) => product.price)
    .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);