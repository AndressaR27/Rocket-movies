import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    gap: 0.8rem;

    background: ${({ theme, isActive }) => isActive?  theme.COLORS.PINK : theme.COLORS.BLACK};
    border-radius: 8px;

    font-size: 1.6rem;
    color: ${({ theme, isActive }) => isActive?  theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
`