import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';
import { createTeam } from '../../storage/team/createTeam';

export function NewTeam() {
  const [team, setTeam] = useState('');

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  async function handleAddMembers() {
    await createTeam(team);
    navigation.navigate('addMembers', { team });
  }

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
        <Header showBackButton />

        <Highlight
          title='Nova Equipe'
          subtitle='Crie uma equipe e adicione membros'
        />
      </HeaderContainer>

      <Content>
        <Input
          placeholder='Nome da equipe'
          onChangeText={setTeam}
        />

        <Button
          title='Criar equipe'
          onPress={handleAddMembers}
        />
      </Content>
    </Container>
  );
}