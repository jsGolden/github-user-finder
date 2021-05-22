import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Constants from 'expo-constants';

import {
  Container,
  Emoji,
  IconContainer,
  Input,
  InputContainer,
  KeyboardAvoidingView,
  Title,
} from "./styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import { ActivityIndicator, Alert, Keyboard, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CirclesPattern from "../../assets/patterns/Circles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/core";
import { UserInterface } from "../../types";
import { getUser } from "../../services/userApi";
import { Header } from "../../components/Header";

export function Home() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const [nickname, setNickname] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputText(value: string) {
    setIsFilled(!!value);
    setNickname(value);
  }

  function handleInputFocus() {
    setIsInputFocused(true);
  }

  function handleInputBlur() {
    setIsInputFocused(false);
  }

  async function handleSearchButton() {
    setIsLoading(true);
    try {
      const user = await getUser(nickname);
      setIsLoading(false);
      navigation.navigate('User', { user })
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Oops... 😥", "Usuário não encontrado!");
    }
  }

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      

      <CirclesPattern
        fill={theme.colors.terciary}
        style={{ position: "absolute", top: 50, opacity: 0.5 }}
      />
      <Header />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback
          style={{ alignItems: "center" }}
          onPress={Keyboard.dismiss}
        >
          
          <Emoji>{isFilled ? "😊" : "🧐"}</Emoji>
          <Title>Quem você está procurando?</Title>

          <InputContainer>
            <Input
              placeholder="Digite um nickname..."
              placeholderTextColor={theme.colors.placeholderColor}
              autoCapitalize="none"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={handleInputText}
              isFocused={isInputFocused}
            />

            <IconContainer 
              isActive={isFilled} 
              disabled={!isFilled || isLoading}
              onPress={handleSearchButton}
            >
              { isLoading 
                ? <ActivityIndicator size="small" color="#fff" />
                : <AntDesign name="search1" size={24} color="#fff" />
              }
            </IconContainer>
          </InputContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}
