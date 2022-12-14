
import { Container, ProgressBar } from './LineChart.styles';
import extractPercentage from './../../utils/extractPercentage';
import { ILine } from './interfaces/line';
import { Product } from "../../components/ProductsList/interface/product";



const lines = [
    {
        title: 'saudavel',
        color: '#025259',
        category: 'healthy'
    },
    {
        title: 'não saudavel',
        color: '#007172',
        category: 'junk'
    },
    {
        title: 'limpeza',
        color: '#F29325',
        category: 'cleaning'
    },
    {
        title: 'outros',
        color: '#D94F04',
        category: 'others'
    }
];

function LineChart({ total,  selectedProducts }: ILine) {
    return (
        <>
           {
                lines.map((line: any) => (
                    <Container key={line.title}>
                        <span>
                            {line.title}
                        </span>

                        <ProgressBar percentage={
                            extractPercentage(total,
                                selectedProducts.filter((product: Product) => product.tags?.includes(line.category)).length
                            )
                        } color={line.color} />
                    </Container>
                ))
            }
        </>
    );
}


export default LineChart;