import rockImg from '../../assets/imgs/rock.png'
import paperImg from '../../assets/imgs/paper.png'
import scissorsImg from '../../assets/imgs/scissors.png'

import { Container } from './style'

const CardResults = ({title, data}) => {
    return (
        <Container>
            <h3>{title}</h3>
            <p>{data}</p>
        </Container>
    )

}

export default CardResults