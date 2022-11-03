import { Product } from "../../../components/ProductsList/interface/product";

export interface ILine {
    total: number,
    selectedProducts: Product[];
}