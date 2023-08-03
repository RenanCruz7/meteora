import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import Img1 from '../../imagens/Banner carousel 1 _ 1440 (1).png'
import Img2 from '../../imagens/Banner carousel 2 _ 1440 (1).png'
import Img3 from '../../imagens/Banner carousel 3 _ 1440 (1).png'
import './index.css'

const Carossel = () => {
    return(
        <div className='estilo'>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={Img1}
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Img2}
                        alt="Image Two"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Img3}
                        alt="Image Three"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carossel