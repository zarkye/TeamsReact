import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { css } from 'styled-components/native';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type ButtonIconSizeStyleProps = 'MD' | 'SM';
export type ButtonIconBorderRadiusStyleProps = 'RIGHT' | 'FULL';

type Props = {
  type: ButtonIconTypeStyleProps;
  size: ButtonIconSizeStyleProps;
  borderRadius: ButtonIconBorderRadiusStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 54px;
  height: 54px;

  ${({size}) => size === 'SM' && css`
    width: 44px;
    height: 44px;
  `}

  ${({borderRadius}) => borderRadius === 'RIGHT' && css`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  `}
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
  border-radius: 8px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100
}))``;