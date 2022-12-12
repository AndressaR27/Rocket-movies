import { Container, Profile } from "./style.js";
import { Input } from "../Input/index.jsx";
import {FiPlus} from 'react-icons/fi'


export function Header(name="Andreia"){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input icon={FiPlus} type="text" placeholder="Pesquisar pelo título"></Input>
            <Profile to="/">
                <div>
                    <strong>Andressa Rodrigues</strong>
                    <button>sair</button>
                </div>
                <img src="https://github.com/AndressaR27.png" alt="Foto do usuário"></img>
            </Profile>
        </Container>
    )
}