import Card from 'react-bootstrap/Card';
import camisetas from "../../imagens/Categorias/Categoria camiseta.png"
import bolsas from "../../imagens/Categorias/Categoria Bolsa.png"
import calçados from "../../imagens/Categorias/Categoria Calçados.png"
import calças from "../../imagens/Categorias/Categoria calça.png"
import casacos from "../../imagens/Categorias/Categoria casacos.png"
import oculos from "../../imagens/Categorias/Categoria óculos.png"
import '../Categorias/index.css'

const imagens = [camisetas,bolsas,calçados,calças,casacos,oculos]
const nomes = ['Camisetas','Bolsas','Calçados','Calças','Casacos','Oculos']

const Categorias = () =>{
    return(
        <section>
            <h3 className='tituloCategoria'>Busque por categoria:</h3>
            <div className='Cards'>
                {imagens.map((imagem, index) => (
                    <Card className='moldura' key={index}>
                        <Card.Img src={imagem} />
                        <Card.Body className='corpoCard'>
                                <Card.Title className='tituloCard'>{nomes[index]}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Categorias