import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { FiArrowLeft } from "react-icons/fi";
import { StarRating } from "../../components/StarRating";
import { MovieDetailItem } from "../../components/MovieDetailItem";


export function MoviePreview() {
    return(
      <Container>
        <Header />
        <ButtonText icon={FiArrowLeft} title="Voltar" to="/" />
        <main>
          <MovieDetailItem  data={{
            title:"Interestellar", 
            score:4, 
            tags: ["tag1", "tag2"], 
            sumary:"blablablablablabla"
            }}
          />
        </main>
      </Container>
    )
}
