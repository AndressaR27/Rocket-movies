import { StarRating } from "../StarRating";
import { FiClock } from "react-icons/fi";
import { Container } from "./style";
import { Tags } from "../Tags";


export function MovieDetailItem({ data, ...rest }) {
    return (
        <Container {...rest}>
            <span className="header">
                <h2>{data.title}</h2>
                <StarRating score={data.score}/>
            </span>
            <div className="profile">
                <img src="https://github.com/AndressaR27.png" alt="Foto do usuário"></img>
                <strong>Andressa Rodrigues</strong>
                <FiClock />
                {
                    () => {
                        let date = new Date()
                        return <span>date.toLocaleDateString('pt-BR')</span>
                    }
                }
            </div>
            <div>
                <Tags tags={data.tags} />
            </div>
            <p>{data.sumary}</p>
        </Container>
    )
}