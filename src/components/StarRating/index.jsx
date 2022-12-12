import { Container, Star } from "./style";

export function StarRating({ score }) {
    return <Container> {
        new Array(5)
            .fill(0)
            .map(
                (v, index) => index < score ? <Star key={index}>★</Star> : <Star key={index}>☆</Star>
            )
    } </Container>
}