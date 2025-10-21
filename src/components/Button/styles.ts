
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`  
    flex: 1;
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
    justify-content: center;
    align-items: center;
    padding: 18px;
    min-height: 55px;
    max-height: 55px;
    border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
`;