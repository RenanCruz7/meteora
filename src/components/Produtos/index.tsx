import "../Produtos/index.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import camiseta from "../../imagens/Imagens Cards/Camiseta.png"
import calça from "../../imagens/Imagens Cards/Calça.png"
import tenis from "../../imagens/Imagens Cards/Tenis.png"
import jaqueta from "../../imagens/Imagens Cards/Jaqueta.png"
import oculos from "../../imagens/Imagens Cards/óculos.png"
import bolsa from "../../imagens/Imagens Cards/Bolsa.png"

const Produtos = () =>{
    return(
    <section>
        <h3 className="tituloProdutos">Produtos que estão bombando</h3>
            <div className="Cards">
                <Card className="molduraProduto">
                    <Card.Img variant="top" src={camiseta} />
                    <Card.Body>
                        <Card.Title>Camisa do Cortinas Lixoooooooooooooooooooo</Card.Title>
                        <Card.Text>
                            Camisa muito loka do Flamengo do Gabigol #Santos
                        </Card.Text>
                        <Button variant="primary">Vai Flamengo</Button>
                    </Card.Body>
                </Card>
                <Card className="molduraProduto">
                    <Card.Img variant="top" src={calça} />
                    <Card.Body>
                        <Card.Title>Camisa do Cortinas Lixoooooooooooooooooooo</Card.Title>
                        <Card.Text>
                            Camisa muito loka do Flamengo do Gabigol #Santos
                        </Card.Text>
                        <Button variant="primary">Vai Flamengo</Button>
                    </Card.Body>
                </Card>
                <Card className="molduraProduto">
                    <Card.Img variant="top" src={tenis} />
                    <Card.Body>
                        <Card.Title>Camisa do Cortinas Lixoooooooooooooooooooo</Card.Title>
                        <Card.Text>
                            Camisa muito loka do Flamengo do Gabigol #Santos
                        </Card.Text>
                        <Button variant="primary">Vai Flamengo</Button>
                    </Card.Body>
                </Card>
            </div>
    </section>
    )
}


export default Produtos