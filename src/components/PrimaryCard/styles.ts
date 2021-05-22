import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    background: ${props => props.theme.colors.terciary};
    padding: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 5px 5px black;
`;

export const IconContainer = styled.View`
    padding: 8px;
    background: ${props => props.theme.colors.secundary};
    border-radius: 100px;
`;

export const Content = styled.View`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.bold};
    font-size: 16px;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.regular};
    font-size: 14px;
    margin-top: 10px;
    opacity: 0.7;
`;