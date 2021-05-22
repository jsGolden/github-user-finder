import React from 'react';

import LottieView from 'lottie-react-native';
import { Container, Text } from './styles';
import loadAnimation from './load.json';
import { StyleSheet } from 'react-native';

export function Load() {
    return(
        <Container>
            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
            <Text>Carregando...</Text>
        </Container>
    );
}

const styles = StyleSheet.create({
    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    }
})