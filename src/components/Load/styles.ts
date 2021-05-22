import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.background};
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 16px;
`;