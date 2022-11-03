import { Container } from './AppContainer.styles'


function AppContainer( { left, middle, right }: any) {
    return (
        <Container>
            <div>{left}</div>
            <div>{middle}</div>
            <div>{right}</div>
        </Container>
    )
}


export default AppContainer;