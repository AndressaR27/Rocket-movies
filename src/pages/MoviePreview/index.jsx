import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { FiArrowLeft } from "react-icons/fi";


export function MoviePreview() {
    return(
      <Container>
        <Header />
        <ButtonText icon={FiArrowLeft} title="Voltar" to="/" />
        {/* <MovieDetailItem data={{ title:'Interestellar', score:4, tags:["tag1", "tag2"]}} ></MovieDetailItem> */}

      </Container>
    )
}
