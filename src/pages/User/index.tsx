import React, { useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import * as Linking from "expo-linking";

import { Feather, Ionicons } from "@expo/vector-icons";

import {
  Container,
  Name,
  Nickname,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  Scroll,
  GradientButton,
  GradientButtonText,
  InfoContainer,
  Info,
  InfoText,
  TitleContainer,
  Title,
  LinkContainer,
  Link,
} from "./styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import {
  FollowerInterface,
  RepositoryInterface,
  UserInterface,
} from "../../types";
import { PrimaryCard } from "../../components/PrimaryCard";
import { Alert, View } from "react-native";
import { FollowersRow } from "../../components/FollowersRow";
import { Load } from "../../components/Load";
import api from "../../services/api";
import { RepositoriesList } from "../../components/RepositoriesList";
import { Header } from "../../components/Header";

interface Params {
  user: UserInterface;
}

export function User() {
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { theme } = useContext(ThemeContext);

  const { user } = route.params as Params;

  const [followers, setFollowers] = useState<UserInterface[]>([]);
  const [repositories, setRepositories] = useState<RepositoryInterface[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isRepositoriesLoading, setIsRepositoriesLoading] = useState(true);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const { data } = await axios.get<UserInterface[]>(user.followers_url);
        setFollowers(data);
        setIsLoading(false);
      } catch {
        Alert.alert("Oops...", "Não foi possível requisitar os dados!");
      }
    }
    fetchFollowers();
  }, []);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const { data } = await axios.get<RepositoryInterface[]>(user.repos_url);
        setRepositories(data);
        setIsRepositoriesLoading(false);
      } catch {
        Alert.alert("Oops...", "Não foi possível requisitar os dados!");
      }
    }
    fetchRepositories();
  }, []);

  async function handleProfilePress(profile: FollowerInterface) {
    setIsLoading(true);
    async function fetchUser() {
      const { data } = await api.get<UserInterface>(`/users/${profile.login}`);
      navigation.push("User", { user: data });
      setIsLoading(false);
    }
    fetchUser();
  }

  function handleSeeAllFollowers() {
    navigation.navigate("Followers", { user });
  }

  function handleAccessGithub() {
    Linking.openURL(user.html_url);
  }

  if (isLoading || isRepositoriesLoading) return <Load />;

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
        <Header />
      <Scroll>

        <ProfileContainer>
          <ProfileImageContainer colors={theme.colors.gradientColors}>
            <ProfileImage source={{ uri: user.avatar_url }} />
          </ProfileImageContainer>

          <Name>{user.name}</Name>
          <Nickname>{user.login}</Nickname>

          <InfoContainer>
            <Info>
              <Ionicons
                name="people-outline"
                size={24}
                color={theme.colors.text}
              />
              <InfoText>{user.followers} Seguidores</InfoText>
            </Info>

            <Info>
              <Ionicons
                name="person-add-outline"
                size={24}
                color={theme.colors.text}
              />
              <InfoText>{user.following} Seguindo</InfoText>
            </Info>

            <Info>
              <Ionicons
                name="file-tray-stacked-outline"
                size={24}
                color={theme.colors.text}
              />
              <InfoText>{user.public_repos} Repositórios</InfoText>
            </Info>
          </InfoContainer>

          <TouchableOpacity onPress={handleAccessGithub}>
            <GradientButton
              colors={theme.colors.gradientColors}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
              <Feather name="external-link" size={18} color="#fff" />
              <GradientButtonText>Acessar Github</GradientButtonText>
            </GradientButton>
          </TouchableOpacity>
        </ProfileContainer>

        <View style={{ marginTop: 30 }}>
          <PrimaryCard
            icon={
              <Ionicons
                name="person-outline"
                size={24}
                color={theme.colors.text}
              />
            }
            title="Biografia"
            text={user.bio}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <TitleContainer>
            <Title>Seguidores</Title>

            <LinkContainer onPress={handleSeeAllFollowers}>
              <Link>Ver todos</Link>
              <Ionicons
                name="arrow-forward"
                size={14}
                color={theme.colors.link}
              />
            </LinkContainer>
          </TitleContainer>
          <FollowersRow
            followers={followers}
            onProfilePress={handleProfilePress}
          />
        </View>

        <View style={{ marginVertical: 30 }}>
          <TitleContainer>
            <Title>Repositórios</Title>
          </TitleContainer>

          <RepositoriesList repositories={repositories} />
        </View>
      </Scroll>
    </Container>
  );
}
