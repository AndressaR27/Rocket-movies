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
    }
`
