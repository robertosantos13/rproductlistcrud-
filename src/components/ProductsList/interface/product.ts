export interface Product {
    id: string;
    name: string;
    price: number;
    checked: boolean;
    type?: string | null;
    tags?: string[] | null 
}