import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { FollowerInterface, UserInterface } from '../../types';
import { Container, ProfileImage } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../contexts/ThemeContext';

interface FollowersRowProps {
    followers: UserInterface[];
    onProfilePress: (profile: FollowerInterface) => void;
}

export function FollowersRow({ followers, onProfilePress }: FollowersRowProps) {
    if (followers.length > 10) 
        followers.length = 10;
    
    return (
        <Container>
            <FlatList
                data={followers}
                keyExtractor={item => String(item.login)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onProfilePress(item)}>
                        <ProfileImage source={{ uri: item.avatar_url }}/>
                    </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    );
}