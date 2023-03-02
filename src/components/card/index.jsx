import rockImg from '../../assets/imgs/rock.png'
import paperImg from '../../assets/imgs/paper.png'
import scissorsImg from '../../assets/imgs/scissors.png'

import {Container} from './style'

const Card = ({ title, onClick}) => {

    const picked = (title) => {
        
        switch (title) {
            case 'Pedra':
                return rockImg
            case 'Papel':
                return paperImg
            case 'Tesoura':
                return scissorsImg
            default:
                return 'break';
        }
    }

    

    return (
        <Container>
            <div className={title} onClick={onClick}>
                <h3>{title}</h3>
                <img src={picked(title)} alt="" />
            </div>
        </Container>

        
        
    )

}

export default Card