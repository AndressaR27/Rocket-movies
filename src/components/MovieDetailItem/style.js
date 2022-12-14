import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 2.4rem 8rem;

    .header {
        display: flex;
        gap: 30px;
        align-items: center;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 40px;
    }

    .profile {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        
        >img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
    }

    > p {
        margin-top: 3rem;
        color: ${({ theme })=> theme.COLORS.GRAY_300};
    }
`

export const ContainerDate = styled.div`
    display: flex;
    gap: 15px;
`