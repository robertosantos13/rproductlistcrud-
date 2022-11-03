import React, { useEffect, useState } from "react";

import { Main, Container } from './App.styles';
import Header from './../Header';
import AppContainer from "../AppContainer";
import ProdductsList from "../ProdductsList";

import productsMock from '../../mocks/products.mock.json';
import { Product } from './../ProdductsList/interface/product';

function App() {
    const  [ products, setProducts ] = useState<Product[] | []>(productsMock.products);
    const [ selectedProducts, setSelectedProducts ] = useState<Product[] | []>([])


    function handleToggle(id: string) {
        const newSelectProducts = products.map((product: Product) => 
        product.id === id ? {...product, checked: !product.checked} : product) as Product[];

        setProducts(newSelectProducts)
    }

    useEffect(() => {
        const newSelectProducts = products.filter((product: Product) => product.checked);

        setSelectedProducts(newSelectProducts);
    }, [products])

    return (
        <Main>
            <Container>
                <Header />

                <AppContainer
                    left={
                        <ProdductsList
                         title="Lista de produtos"
                         products={products}
                         onToggle={handleToggle}
                        />
                    }
                    middle={
                        <ProdductsList
                         title="Produtos selecionados"
                         products={selectedProducts}
                         onToggle={handleToggle}
                        />
                    }
                    right={
                        <div>
                            Estatisticas:
                        </div>
                    }

                />
            </Container>
        </Main>
    );
}


export default App;