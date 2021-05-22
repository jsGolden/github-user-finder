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

export const Scroll = styled.ScrollView`
    flex: 1;
    padding: 0px 30px;
`;

export const ProfileContainer = styled.View`
    width: 100%;
    margin-top: 40px;
    align-items: center;
`;

export const ProfileImageContainer = styled(LinearGradient)`
    width: 180px;
    height: 180px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.Image`
    width: 95%;
    height: 95%;
    border-radius: 171px;
`;

export const Name = styled.Text`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.bold};
    font-size: 32px;
    margin-top: 25px;
    letter-spacing: 1px;
`;

export const Nickname = styled.Text`
    color: ${props => props.theme.colors.placeholderColor};
    font-family: ${props => props.theme.font.regular};
    font-size: 18px;
`;

export const InfoContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
`;

export const Info = styled.View`
    justify-content: center;
    align-items: center;
`;

export const InfoText = styled.Text`
    color: ${props => props.theme.colors.placeholderColor};
    font-family: ${props => props.theme.font.regular};
    font-size: 12px;
`;

export const GradientButton = styled(LinearGradient)`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    padding: 10px 25px;
    margin-top: 25px;
`;

export const GradientButtonText = styled.Text`
    color: #fff;
    font-family: ${props => props.theme.font.regular};
    font-size: 16px;
    margin-left: 10px;
`;

export const TitleContainer = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.bold};
    font-size: 24px;
`;

export const LinkContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.Text`
    color: ${props => props.theme.colors.link};
    font-family: ${props => props.theme.font.regular};
    font-size: 14px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;