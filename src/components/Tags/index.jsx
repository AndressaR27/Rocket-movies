import { Container, Wrapper } from "./style.js"


export function Tags({tags, ...rest}) {
    return (
        <Wrapper>
           {tags.map((tag, index) => <Container key={index}>{tag}</Container>)}
        </Wrapper>
    )
}