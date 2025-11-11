import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Tab } from '@components/Tab';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content, InputContainer, Tabs } from './styles';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Tag } from '@components/Tag';

export function AddMembers() {
  const [tab, setTab] = useState("Titular")
  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title='Equipe 1'
          subtitle='Adicione os titulares e reservas'
        />
      </HeaderContainer>

      <Content>
        <InputContainer>
          <Input
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder='Adicione um membro'
          />

          <ButtonIcon 
           style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            icon='add-circle-outline' 
          />
        </InputContainer>

        <Tabs>
          <FlatList
            data={["Titular", "Reserva"]}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
              <Tab
                title={item}
                isActive={item === tab}
                onPress={() => setTab(item)}
              />
            )}
            horizontal
          />
          <Tag
            text={4}
          />
        </Tabs>

      </Content>
      <Button
          title='Deletar equipe'
          type='SECONDARY'
          
        />
    </Container>
  );
}