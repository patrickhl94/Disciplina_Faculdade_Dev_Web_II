import React, { useState, useCallback, BaseSyntheticEvent } from 'react';
import Loader from 'react-loader-spinner';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  CardLeft,
  ButtonCadastrar,
  CardRight,
  ContainerRow,
  LinkListagem,
} from './styles';

import { SelectInput, InputMin } from '../../components/Input';

interface MessageSmallState {
  color: string;
  message: string;
  display: string;
}

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [healthProblems, setHealthProblems] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isHealthArea, setIsHealthArea] = useState('nao');

  const [displayLoader, setDisplayLoader] = useState(false);
  const [messageSmall, setMessageSmall] = useState<MessageSmallState>(
    {} as MessageSmallState,
  );

  const handleSubmit = useCallback(
    async (event: BaseSyntheticEvent) => {
      event.preventDefault();

      setMessageSmall({ ...messageSmall, display: 'none' });
      setDisplayLoader(true);
      try {
        await api.post('users', {
          name,
          birth,
          email,
          cellphone,
          weight: Number(weight),
          height: Number(height),
          health_problems: healthProblems,
          state,
          city,
          neighborhood,
          street,
          address_number: Number(addressNumber),
          zip_code: zipCode,
          is_health_area: isHealthArea === 'sim',
        });

        setDisplayLoader(false);
        setMessageSmall({
          ...messageSmall,
          display: '',
          color: '#21ff00',
          message: 'Cadastrado com sucesso!',
        });
        setName('');
        setBirth('');
        setEmail('');
        setCellphone('');
        setWeight('');
        setHeight('');
        setHealthProblems('');
        setState('');
        setCity('');
        setNeighborhood('');
        setStreet('');
        setAddressNumber('');
        setZipCode('');
        setIsHealthArea('');
      } catch (error) {
        setDisplayLoader(false);
        setMessageSmall({
          ...messageSmall,
          display: '',
          color: '#dd0000',
          message:
            'Erro no cadastro, verifique os campos obrigatório ( * ) e tente novamente.',
        });
      }
    },
    [
      name,
      addressNumber,
      birth,
      cellphone,
      city,
      email,
      healthProblems,
      height,
      isHealthArea,
      neighborhood,
      state,
      street,
      weight,
      zipCode,
      messageSmall,
    ],
  );

  return (
    <Container>
      <CardLeft>
        <div>
          <h1>Cadastrar casos confirmados de COVID-19</h1>
          <form onSubmit={handleSubmit}>
            <ContainerRow>
              <InputMin
                value={name}
                name="Nome *"
                handleChange={val => {
                  setName(val);
                }}
              />
              <InputMin
                value={email}
                handleChange={val => setEmail(val)}
                type="email"
                name="Email *"
                placeholder="email@email.com"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                value={birth}
                handleChange={val => {
                  setBirth(val);
                }}
                type="date"
                name="Nascimento *"
              />
              <InputMin
                value={cellphone}
                handleChange={val => {
                  setCellphone(val);
                }}
                type="tel"
                name="Celular *"
                placeholder="(27) 98888-8888"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                value={height}
                handleChange={val => {
                  setHeight(val);
                }}
                type="number"
                name="Altura *"
                step="0.01"
                placeholder="1.80"
              />
              <InputMin
                value={weight}
                handleChange={val => {
                  setWeight(val);
                }}
                type="number"
                name="Peso *"
                step="0.01"
                placeholder="70.5"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                value={healthProblems}
                handleChange={val => {
                  setHealthProblems(val);
                }}
                name="Problemas de Saude"
                placeholder="Diabete, Pressão Alta"
              />
              <SelectInput
                name="Profissional da área da Saúde? *"
                handleChange={val => {
                  setIsHealthArea(val);
                }}
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                value={zipCode}
                handleChange={val => {
                  setZipCode(val);
                }}
                name="CEP *"
                placeholder="Somente números, não inserir ( - ) "
                type="number"
              />
              <InputMin
                value={state}
                handleChange={val => {
                  setState(val);
                }}
                type="text"
                name="Estado *"
                maxLength={2}
                placeholder="Digite a sigla do estado, ex: ES"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                value={city}
                handleChange={val => {
                  setCity(val);
                }}
                name="Cidade *"
                placeholder="Nome da cidade"
              />
              <InputMin
                value={neighborhood}
                handleChange={val => {
                  setNeighborhood(val);
                }}
                name="Bairro *"
                placeholder="Nome do bairro"
              />
            </ContainerRow>
            <ContainerRow>
              <InputMin
                value={street}
                handleChange={val => {
                  setStreet(val);
                }}
                name="Logradouro *"
                placeholder="Nome da rua, avenida, etc."
              />
              <InputMin
                value={addressNumber}
                handleChange={val => {
                  setAddressNumber(val);
                }}
                name="Número"
                placeholder="Número da rua"
                type="number"
              />
            </ContainerRow>

            <ButtonCadastrar displayLoader={displayLoader} type="submit">
              <span>Cadastrar</span>
              <Loader type="ThreeDots" color="#6f2725" height={15} width={60} />
            </ButtonCadastrar>
          </form>

          <div>
            <small
              style={{
                color: messageSmall.color,
                display: messageSmall.display,
              }}
            >
              {messageSmall.message}
            </small>
          </div>
        </div>
        <LinkListagem>
          <Link to="/list">
            Relação de casos confirmados
            <FiChevronsRight color="#fff" size={28} />
          </Link>
        </LinkListagem>
      </CardLeft>
      <CardRight />
    </Container>
  );
};

export default Home;
