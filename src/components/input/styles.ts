import { css } from "styled-components";
import styled from "styled-components/native"

export const Container = styled.TextInput`
    display: flex;
    width: 100%;
    padding: 16px;
    align-items: center;
    gap: 8px;   
    border-radius: 8px;
    border: 1px;
    margin-bottom: 5px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        background-color: ${theme.COLORS.WHITE};
        border-color: ${theme.COLORS.GRAY_300};
    
  `};
`;