import styled from "styled-components";

export const Container = styled.textarea`
   width: 100%;
    height: 150px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color:${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none; //para não deixar mover o tamanho da caixa 

    border-radius: 10px;
    margin-bottom: 8px;
    padding:16px;

    &::placeholder {
        color:${({ theme }) => theme.COLORS.GRAY_300};
    }
`