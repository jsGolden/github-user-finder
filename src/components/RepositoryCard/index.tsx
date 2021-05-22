import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Content,
  Description,
  Container,
  Title,
  TitleContainer,
  Footer,
  FooterInfo,
  FooterInfoText,
  LanguageDot,
  Pattern,
} from "./styles";

import { LanguageColor, RepositoryInterface } from "../../types";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Linking } from "react-native";

interface RepositoryCardProps {
  repository: RepositoryInterface;
  languageColors: LanguageColor;
}

export function RepositoryCard({ repository, languageColors }: RepositoryCardProps) {
  const { theme } = useContext(ThemeContext);

  function handleRepositoryPress() {
    Linking.openURL(repository.html_url);
  }

  return (
    <Container onPress={handleRepositoryPress}>
      <Pattern fill={theme.colors.primary} />

      <TitleContainer>
        <AntDesign name="book" size={24} color={theme.colors.primary} />
        <Title>{repository.name}</Title>
      </TitleContainer>

      <Content>
        <Description>
            {repository.description || "Sem descrição..."}
        </Description>
      </Content>

      <Footer>
        {repository.language && languageColors[repository.language]?.color &&  (
          <FooterInfo>
            <LanguageDot bgColor={languageColors[repository.language].color} />
            <FooterInfoText>{repository.language}</FooterInfoText>
          </FooterInfo>
        )}

        <FooterInfo>
          <AntDesign name="staro" size={14} color={theme.colors.text} />
          <FooterInfoText>{repository.stargazers_count}</FooterInfoText>
        </FooterInfo>
      </Footer>
    </Container>
  );
}
