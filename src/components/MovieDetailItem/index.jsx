import { StarRating } from "../StarRating";
import { FiClock } from "react-icons/fi";
import { Container, ContainerDate } from "./style";
import { Tags } from "../Tags";

export function UpDate(){
    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    return (
        <ContainerDate>
            <span>{date.toLocaleDateString('pt-BR')}</span>
            <span>{`${horas} : ${minutos}`}</span>
        </ContainerDate>
    
    )
}


export function MovieDetailItem({ data, ...rest }) {
    return (
        <Container {...rest}>
            <span className="header">
                <h2>{data.title}</h2>
                <StarRating score={data.score} className="star-rating"/>
            </span>
            <div className="profile">
                <img src="https://github.com/AndressaR27.png" alt="Foto do usuário"></img>
                <strong>Andressa Rodrigues</strong>
                <FiClock />
                <UpDate />
            </div>
            <div>
                <Tags tags={data.tags} />
            </div>
            <p>{data.sumary}</p>
        </Container>
    )
}