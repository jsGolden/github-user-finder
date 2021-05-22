import styled from 'styled-components/native';

interface ContainerProps {
   readonly statusBarHeight: number;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    flex: 1;
    background: ${props => props.theme.colors.background};
    padding-top: ${props => props.statusBarHeight || 0}px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
`;

export const Emoji = styled.Text`
    font-size: 54px;
`;

export const Title = styled.Text`
    font-size: 42px;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.bold};
    margin-top: 50px;
`;

export const InputContainer = styled.View`
    margin-top: 50px;
    width: 100%;
    height: 48px;
    flex-direction: row;
    border-radius: 5px;
    background: ${props => props.theme.colors.secundary};
`;

interface InputProps {
    isFocused: boolean;
}

export const Input = styled.TextInput<InputProps>`
    width: 80%;
    height: 100%;
    background: ${props => props.theme.colors.secundary};
    text-align: center;
    color: ${props => props.theme.colors.text};

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    border-color: ${props => props.isFocused 
        ? props.theme.colors.activeColor
        : props.theme.colors.terciary
    };

    border-left-width: 1px;
    border-bottom-width: 1px;
    border-top-width: 1px;
`;

interface IconContainerProps {
    readonly isActive: boolean;
}

export const IconContainer = styled.TouchableOpacity<IconContainerProps>`
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.activeColor};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    opacity: ${props => props.isActive ? 1 : 0.5};
`;