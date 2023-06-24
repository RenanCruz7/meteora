import './index.css'
import Logo from '../../imagens/Logo desktop.png'
const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <div className='navbar'>
                <img className='imagem' src={Logo}></img>
                <ul className='list'>
                    <li><a href='messi'>Home</a></li>
                    <li><a href='messi'>Nossas Lojas</a></li>
                    <li><a href='messi'>Novidades</a></li>
                    <li><a href='messi'>Promoções</a></li>
                </ul>
            </div>
            <div className='pesquisa'>
                <input placeholder='Digite o Produto' className='input-header' type='text' />
                <button className='botao-header'>Buscar</button>
            </div>
        </header>
    )
}

export default Cabecalho