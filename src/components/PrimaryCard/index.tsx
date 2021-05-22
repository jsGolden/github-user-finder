import React from 'react';
import { Container, Content, IconContainer, Title, Text } from './styles';

interface PrimaryCardProps {
    icon: JSX.Element;
    title: string;
    text: string;
}

export function PrimaryCard({ icon, title, text, ...rest }: PrimaryCardProps) {
    return (
        <Container>
            <IconContainer>
                {icon}
            </IconContainer>
            <Content>
                <Title>{title}</Title>
                <Text>
                    {text || "Não há nada para mostrar..."}
                </Text>
            </Content>
        </Container>
    );
}