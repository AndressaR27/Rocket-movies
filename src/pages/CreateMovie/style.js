import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    width: 100%;
    /* overflow: hidden; */
    
    > button {
        margin-top: 15rem;
        margin-left: 8rem;
    }
    
    #add-movie {
        height: 100vh;
        margin: 4rem 8rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-right: 2rem;

        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px gray;
        border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        }

        >span {
            display: flex;
            flex-direction: row;
            gap: 3rem;
        }
    
        .newtag{
            width: 100%;
            height: 8.8rem;
            background-color: ${({ theme }) => theme.COLORS.BLACK};
            display: flex;
            align-items: center;
            border-radius: 8px;
            padding: 16px;
            gap: 24px;
        }

        .btn {
            display: flex;
            justify-content: space-between;
            gap: 2.4rem;
            margin-bottom: 24px;
        }

    }

`