import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;

export const Header = styled.View`
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.bold};
    font-size: 38px;
    margin-top: 30px;
    line-height: 58px;
`;

export const Subtitle = styled.Text`
    color: ${props => props.theme.colors.text};
    opacity: 0.7;
    margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    min-width: 200px;
    border-radius: 5px;
    padding: 15px;
    margin-top: 80px;
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    font-family: ${props => props.theme.font.regular};
    margin-right: 5px;
`;