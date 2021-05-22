import styled from "styled-components/native";
import CirclesPattern from '../../assets/patterns/Circles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${(props) => props.theme.colors.terciary};
  padding: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.secundary};
  margin-top: 10px;
  position: relative;
`;

export const Pattern = styled(CirclesPattern)`
  position: absolute;
  right: 5px;
  top: 5px;
  opacity: 0.35;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.bold};
  font-size: 18px;
  margin-left: 10px;
  opacity: 0.85;
`;

export const Content = styled.View`
  margin-top: 10px;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.regular};
  font-size: 12px;
`;

export const Footer = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const FooterInfo = styled.View`
  flex-direction: row;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.regular};
  font-size: 12px;
  margin-left: 5px;
`;

interface LanguageDotProps {
  readonly bgColor: string;
}

export const LanguageDot = styled.View<LanguageDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 15px;
  background: ${(props) => props.bgColor};
`;
