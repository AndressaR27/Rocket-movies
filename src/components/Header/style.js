import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 11.6rem;
    padding: 2.4rem 8rem;
    gap: 6.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    position: absolute;
    margin-top: 0;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
        font-weight: 700;
    }
`

export const Profile = styled(Link)`
    width: 45rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.COLORS.WHITE};

    gap: 1rem;

       > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        > button {
            font-size: 1.4rem;
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
       }

       > img {
           width: 56px;
           height: 56px;
           border-radius: 50%;
           border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
       }
`


