import styled from 'styled-components';
import { Theme } from "./Theme";

export const Button = styled.button`
    border:none;
    outline:none;
    background: ${Theme.colors.primary};
    color: white;
    font-size:16px;
    font-weight:600;
    padding:0.75rem 1.5rem;
    border-radius : 6px;
    &:hover {
        background: ${Theme.colors.primaryHover};
        cursor:pointer;
    }
`
export const ButtonInverse = styled.button`
    border:none;
    outline:none;
    background: white;
    color: cornflowerblue;
    font-size:16px;
    font-weight:600;
    padding:0.75rem 1.5rem;
    border-radius : 6px;
    &:hover {
        background: ${Theme.colors.secondaryHover};
        cursor:pointer;
    }

`