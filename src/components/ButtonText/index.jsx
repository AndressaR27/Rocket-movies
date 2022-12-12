import { Container } from "./style.js";


export function ButtonText({ icon: Icon, title, ...rest }){
    return(
        <Container type="button" {...rest}>
            {Icon && <Icon  size={20}/>}
            {title}
        </Container>
    )
}