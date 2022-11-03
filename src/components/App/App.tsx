import { useEffect, useState } from "react";

import { Main, Container } from './App.styles';
import Header from './../Header';
import AppContainer from "../AppContainer";
import LineChart from "../../Shared/LineChart";

import productsMock from '../../mocks/products.mock.json';
import ProdductsList from "../ProdductsList";
import { Product } from './../ProdductsList/interface/product';
import extractPercentage from "../../utils/extractPercentage";



function App() {
    const [products, setProducts] = useState<Product[] | []>(productsMock.products);
    const [selectedProducts, setSelectedProducts] = useState<Product[] | []>([]);
    const [totalPriceProducts, setTotalPriceProucts] = useState(0);

    function handleToggle(id: string) {
        const newSelectProducts = products.map((product: Product) =>
            product.id === id ? { ...product, checked: !product.checked } : product) as Product[];

        setProducts(newSelectProducts);
    }

    useEffect(() => {
        const newSelectProducts = products.filter((product: Product) => product.checked);

        setSelectedProducts(newSelectProducts);
    }, [products]);


    useEffect(() => {
        const newTotalSelectedProductByValue = selectedProducts.map((product: Product) => product.price)
            .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);

        setTotalPriceProucts(newTotalSelectedProductByValue)

    }, [selectedProducts]);

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
                            <LineChart
                                total={selectedProducts.length}
                                selectedProducts={selectedProducts}
                            />

                        </div>
                    }

                />
            </Container>
        </Main>
    );
}


export default App;