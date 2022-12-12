import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    align-items: center;
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.PINK}` : "none" };
    border-radius: 10px;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_2300};
    height: 56px;
    
    > input {
        width: 100%;
        padding: 12px;
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    > button {
        color: ${({ theme }) => theme.COLORS.PINK};
        border: none;
        background: none;
        padding: 12px;

    }

`