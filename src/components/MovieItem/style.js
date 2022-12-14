import styled from "styled-components";

export const Container = styled.div`
    background-color: ${( { theme }) => theme.COLORS.PINK_LIGHT};
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
    
    border-radius: 16px;

    > p {
        color: ${( { theme }) => theme.COLORS.GRAY_300};
        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 2; // Quantidade de linhas
        -webkit-box-orient: vertical; 
    }
`
