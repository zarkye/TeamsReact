import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';

import { Container, HeaderContainer, Content } from './styles';
import { Input } from '@components/input';

export function AddMember() {
  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title='Equipes'
          subtitle='Prepare suas equipes'
        />
      </HeaderContainer>

      <Content>
        <Input
            placeholder='Adicione um membro'
        />
        <Button
          title='Deletar Equipe'
          type="SECONDARY"
        />
      </Content>
    </Container>
  );
}