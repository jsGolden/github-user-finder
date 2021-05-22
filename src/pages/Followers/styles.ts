import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface ContainerProps {
    readonly statusBarHeight?: number;
}
export const Container = styled.SafeAreaView<ContainerProps>`
    flex: 1;
    background: ${props => props.theme.colors.background};
    padding-top: ${props => props.statusBarHeight || 0}px;
`;

export const Title = styled.Text`
    font-size: 34px;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.bold};
    margin-top: 30px;
    padding-left: 30px;
`;

export const ListContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const List = styled.FlatList`
    margin-top: 30px;
`;

export const FollowerCard = styled.TouchableOpacity`
    padding: 10px;
    background: ${props => props.theme.colors.terciary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 150px;
    margin-top: 20px;
`;

export const ProfileImageContainer = styled(LinearGradient)`
    width: 90px;
    height: 90px;
    border-radius: 45px;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.Image`
    width: 95%;
    height: 95%;
    border-radius: 45px;
`;

export const Nickname = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.regular};
    margin-top: 10px;
    text-align: center;
`;