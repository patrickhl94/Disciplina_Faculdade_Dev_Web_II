import React from 'react';

import {
  Container,
  CardLeft,
  ButtonCadastrar,
  CardRight,
  ContainerRow,
} from './styles';

import { SelectInput, InputMin } from '../../components/Input';

const Home: React.FC = () => {
  return (
    <Container>
      <CardLeft>
        <div>
          <h1>Cadastrar casos confirmados de COVID-19</h1>
          <form>
            <ContainerRow>
              <InputMin name="Nome" />
              <InputMin
                type="email"
                name="Email"
                placeholder="email@email.com"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin type="date" name="Nascimento" />
              <InputMin
                type="tel"
                name="Celular"
                placeholder="(27) 98888-8888"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin type="number" name="Altura" placeholder="1.80" />
              <InputMin type="number" name="Peso" placeholder="70.5" />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                name="Problemas de Saude"
                placeholder="Diabete, Pressão Alta"
              />
              <SelectInput name="Profissional da área da Saúde?" />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                name="CEP"
                placeholder="Somente números, não inserir ( - ) "
                type="number"
              />
              <InputMin
                type="text"
                name="Estado"
                maxLength={2}
                placeholder="Digite a sigla do estado, ex: ES"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin name="Cidade" placeholder="Nome da cidade" />
              <InputMin name="Bairro" placeholder="Nome do bairro" />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                name="Logradouro"
                placeholder="Nome da rua, avenida, etc."
              />
              <InputMin
                name="Número"
                placeholder="Número da rua"
                type="number"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin name="Peso" placeholder="70.5" />
              <InputMin name="Peso" placeholder="70.5" />
            </ContainerRow>

            <ButtonCadastrar type="submit">Cadastrar</ButtonCadastrar>
          </form>
        </div>
      </CardLeft>
      <CardRight />
    </Container>
  );
};

export default Home;
