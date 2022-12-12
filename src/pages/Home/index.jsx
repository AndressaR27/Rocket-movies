import { Container, Nav } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { FiPlus } from 'react-icons/fi'
import { MovieList } from '../../components/MovieList/index.jsx'



export function Home() {
    return(
      <Container>
        <Header/>
        <div className='margin-style'>
          <Nav>
            <h1>Meus filmes</h1>
            <Button icon={FiPlus} title="Adicionar Item"></Button>
          </Nav>
          <div className='movieList-wrapper'>
            <MovieList />  
          </div>
        </div>
      </Container>
    )
}

