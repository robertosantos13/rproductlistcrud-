import { Main, Container } from './App.styles';

import Header from './../Header';
import AppContainer from "../AppContainer";
import LineChart from "../../Shared/LineChart";

import ProductsList from "../ProductsList";

import { useAppSelector } from "../../app/hooks/hooks";
import { useAppDispatch } from './../../app/hooks/hooks';

import {handleProductToggle } from './../../app/features/product/product.slice';

import {
    listAllProducts,
    listSelectedProducts,
    listCurrentSelectedProducts
} from './../../app/features/product/products.selectors';


function App() {
    const dispatch = useAppDispatch();

    const products = useAppSelector(listAllProducts);
    const selectedProducts = useAppSelector(listSelectedProducts);
    const totalPriceProducts = useAppSelector(listCurrentSelectedProducts);
    

    function handleToggle(id: string) {
        dispatch(handleProductToggle(id));
    }


    return (
        <Main>
            <Container>
                <Header />

                <AppContainer
                    left={
                        <ProductsList
                            title="Lista de produtos"
                            products={products}
                            onToggle={handleToggle}
                        />
                    }
                    middle={
                        <ProductsList
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

                            <div style={{ marginTop: 12 }}>
                                <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                                    previsão de gastos:
                                </h2>
                                <div style={{ fontSize: 24, textTransform: "capitalize" }}>
                                    {totalPriceProducts.toLocaleString('pt-br', {
                                        minimumFractionDigits: 2,
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </div>
                            </div>
                        </div>


                    }

                />
            </Container>
        </Main>
    );
}


export default App;