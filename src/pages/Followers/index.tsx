import { useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Constants from 'expo-constants';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FollowerInterface, UserInterface } from "../../types";
import {
  Container,
  FollowerCard,
  ListContainer,
  Nickname,
  ProfileImage,
  ProfileImageContainer,
  Title,
} from "./styles";
import { getUser } from "../../services/userApi";

interface Params {
  user: UserInterface;
}

export function Followers() {
  const { theme } = useContext(ThemeContext);
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const { user } = route.params as Params;
  const [followers, setFollowers] = useState<FollowerInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    setLoadingMore(true);
    try {
      const { data } = await axios.get<FollowerInterface[]>(
        user.followers_url,
        {
          params: {
            page: currentPage,
          },
        }
      );

      if (!data.length) {
        setLoadedAll(true);
      }

      const newFollowers = [...followers, ...data];

      setFollowers(newFollowers);
      setCurrentPage((oldPage) => oldPage + 1);
      setLoadingMore(false);
      setIsLoading(false);
    } catch {
      setLoadingMore(false);
      Alert.alert("Oops...", "Não foi possível requisitar os seguidores!");
    }
  }

  async function handleFetchMore(distance: number) {
    if (distance < 1 || loadedAll) return;
    await fetchFollowers();
  }

  async function handleCardPress(follower: FollowerInterface) {
    try {
      setIsLoading(true);
      const user = await getUser(follower.login);
      navigation.push("User", { user });
      setIsLoading(false);
    } catch {
      Alert.alert(
        "Oops...",
        "Não foi possível requisitar os dados deste usuário!"
      );
    }
  }

  function renderCard({ item }: ListRenderItemInfo<FollowerInterface>) {
    return (
      <FollowerCard onPress={() => handleCardPress(item)}>
        <ProfileImageContainer colors={theme.colors.gradientColors}>
          <ProfileImage source={{ uri: item.avatar_url }} />
        </ProfileImageContainer>
        <Nickname>{item.login}</Nickname>
      </FollowerCard>
    );
  }

  if (isLoading) return <Load />;

  return (
    <Container statusBarHeight={Constants.statusBarHeight} >
      <Header />

      <Title>Seguidores</Title>

      <ListContainer>
        <FlatList
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          data={followers}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore && !loadedAll ? (
              <ActivityIndicator color={theme.colors.primary} size="large" />
            ) : (
              <></>
            )
          }
        />
      </ListContainer>

    </Container>
  );
}
