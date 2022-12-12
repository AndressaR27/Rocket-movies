import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    font-size: 1.6rem;
    cursor: pointer;

`