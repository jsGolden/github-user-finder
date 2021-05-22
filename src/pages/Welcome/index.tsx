import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { 
    Container, 
    Text, Button, 
    ButtonText, 
    Header, 
    Subtitle 
} from './styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);

    function handleNextButton() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <Header>
                <AntDesign 
                    name="github" 
                    color={theme.colors.text} 
                    size={128}
                    style={{ opacity: 0.6 }}
                />
                <Text>Seja bem-vindo ao GithubFinder!</Text>
                <Subtitle>O melhor buscador de usuários do Github</Subtitle>
            </Header>

            <Button onPress={handleNextButton} activeOpacity={0.6}>
                <ButtonText>Vamos nessa!</ButtonText>
                <AntDesign 
                    name="arrowright" size={24} 
                    color={colors.white}
                />
            </Button>
        </Container>
    );
}