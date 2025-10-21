import { Button } from "@components/Button";
import { Container, Content, HeaderCotainer } from "./styles"
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { TeamCard } from "@components/TeamCard";
import { useState } from "react";
import { FlatList } from "react-native";
 
export function Teams(){
    const [teams, setTeams] = useState(["Equipe 1"])
    return(
        <Container>
            <HeaderCotainer>
                <Header />

                <Highlight 
                title="Equipes"
                subtitle="Preparem suas equipes"
                /> 
            </HeaderCotainer>

            <Content>
                <FlatList
                    data={teams}
                    keyExtractor={item => item}
                    renderItem={({item}) => <TeamCard title={item}/>}
                    ListEmptyComponent={() => <ListEmpty message="Começe criando uma equipe!"/>}
                    contentContainerStyle={teams.length === 0 && {flex: 1}}
                />
                <Button
                    title="Criar uma Nova Equipe"
                    type="PRIMARY"
                />
                
            </Content>
        </Container>
    )
}