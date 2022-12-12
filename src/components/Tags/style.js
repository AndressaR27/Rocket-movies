import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
`
export const Container = styled.div`
    font-size: 1.2rem;
    padding: 0.5rem 1.4rem;
    border-radius: 5px;
    display: flex;

    color: ${( { theme }) => theme.COLORS.GRAY_100};
    background-color: ${( { theme }) => theme.COLORS.BACKGROUND_500};

    
`