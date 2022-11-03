import React from "react";
import Checkbox from "../../Shared/Checkbox";

import { Container, Title, Array } from './ProductsList.styles';
import { Product } from './interface/product';

interface IProduct {
    title: string,
    products: Product[];
    onToggle: (id: string) => any
}

function ProductsList({ title, products, onToggle }: IProduct) {
    return (
        <Container>
            <Title>
                {title}:
            </Title>

            <Array>
                {
                    products && products.map((product: Product) => (
                        <Checkbox
                            key={product.id}
                            name={product.name}
                            checked={product.checked}
                            onClick={() => onToggle(product.id)}
                        />

                    ))
                }
            </Array>
        </Container>
    );
}


export default ProductsList;
