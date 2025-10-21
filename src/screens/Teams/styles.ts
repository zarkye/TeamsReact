import { View } from "react-native";
import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: #fff;

    color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const HeaderCotainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
    padding-top: 54px;
    padding-bottom: 24px;
`;

export const Content = styled(View)`
    padding: 24px;
    flex: 1;
`;