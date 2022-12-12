import { Container } from "./style.js";

export function Button({ icon: Icon, title, type, OnClick, isActive = true, ...rest}){
    return (
        <Container type="button" isActive={isActive} {...rest} OnClick={OnClick}>
            {Icon && <Icon  size={20}/>}
            {title}
        </Container>
    )
}