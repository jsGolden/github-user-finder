import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
`;

export const ProfileImage = styled.Image`
    width: 68px;
    height: 68px;
    border-radius: 100px;
    margin-right: 10px;
    border-width: 1px;
    border-color: ${props => props.theme.colors.text};
`;
