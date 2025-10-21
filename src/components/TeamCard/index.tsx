import { Text } from "react-native";
import { Container, Icon, Title } from "./styles";
import {MaterialIcons} from "@expo/vector-icons"
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    title: string;
}

export function TeamCard({ title, ...rest } : Props){
    return (
        <Container {...rest}>
            <Icon name="groups" />

            <Title>{title}</Title>
        </Container>
    )
}