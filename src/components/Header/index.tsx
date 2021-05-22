import React, { useContext } from "react";

import { Container, HeaderButton } from "./styles";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useNavigation, useRoute } from "@react-navigation/core";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const route = useRoute();

  function handleBackButton() {
    navigation.goBack();
  }

  function handleThemeSwitch() {
    toggleTheme();
  }

  return (
    <Container>
      <HeaderButton onPress={handleBackButton}>
        <AntDesign name="arrowleft" size={24} color={theme.colors.text} />
      </HeaderButton>

      <HeaderButton onPress={handleThemeSwitch}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={theme.colors.text}
        />
      </HeaderButton>
    </Container>
  );
}
