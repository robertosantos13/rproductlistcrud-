
import { Container, CheckIcon} from './Checkbox.styles';

interface CheckState {
    name: string,
    checked: boolean,
    onClick: () => any
}

function CheckBox({ name, checked, onClick }: CheckState) {
    return (
        <Container onClick={onClick}>
            <CheckIcon checked={checked} />
             {name}
        </Container>
    )
}

export default CheckBox;
