import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 1.0rem;
    
    > input {
        width: 100%;
        font-size: 1.4rem;
        background-color:transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 1.9rem;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 1.6rem;
    }
`