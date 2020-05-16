import React, { useState, useEffect, useCallback } from 'react';
import {
  FiChevronsLeft,
  FiTrash2,
  FiRotateCw,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiUsers,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Modal from '../../components/Modal';
import ModalFilter from '../../components/ModalFilter';

import {
  Container,
  CardLeft,
  CardRight,
  LinkListagem,
  ListCases,
  AreaIcons,
  ContainerPage,
  ContainerSubHeader,
  CasesConfirmed,
} from './styles';

export interface PropModal {
  id: string;
  name: string;
  email?: string;
  is_health_area: boolean;
  birth: string;
  cellphone: string;
  weight: number;
  height: number;
  health_problems?: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  address_number?: number;
  zip_code: string;
  group_of_risk: boolean;
}

interface FiltersParams {
  typeFilter: string;
  dataFilter: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<PropModal[]>([]);
  const [page, setPage] = useState(1);
  const [totalCase, setTotalCases] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalFilterIsOpen, setModaFilterlIsOpen] = useState(false);
  const [propModal, setPropModal] = useState<PropModal | undefined>(
    {} as PropModal,
  );

  const [valueFilterType, setValueFilterType] = useState('todos');
  const [valueFilterData, setValueFilterData] = useState('');
  const [valueFilterDataBoolean, setValueFilterDataBoolean] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api
      .get(
        `/users/${page}?${valueFilterType}=${
          valueFilterType === 'is_health_area' ||
          valueFilterType === 'group_of_risk'
            ? valueFilterDataBoolean
            : valueFilterData
        }`,
      )
      .then(response => {
        setData(response.data[0]);
        setTotalCases(response.data[1]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page, valueFilterData, valueFilterType, valueFilterDataBoolean]);

  const handleGetDataFilters = useCallback(
    async (filter: FiltersParams) => {
      setValueFilterType(filter.typeFilter);
      setValueFilterData(filter.dataFilter);
      if (
        filter.typeFilter === 'is_health_area' ||
        filter.typeFilter === 'group_of_risk'
      ) {
        setValueFilterDataBoolean(filter.dataFilter === 'sim');
      }

      try {
        const response = await api.get(
          `/users/${page}?${filter.typeFilter}=${
            filter.typeFilter === 'is_health_area' ||
            filter.typeFilter === 'group_of_risk'
              ? filter.dataFilter === 'sim'
              : filter.dataFilter
          }`,
        );

        setData(response.data[0]);
        setTotalCases(response.data[1]);
      } catch (error) {
        console.log(error);
      }
    },
    [page],
  );

  const handleIncrementPage = useCallback(async () => {
    if (page * 5 >= totalCase) return;

    setPage(page + 1);

    const response = await api.get(
      `users/${page + 1}?${valueFilterType}=${
        valueFilterType === 'is_health_area' ||
        valueFilterType === 'group_of_risk'
          ? valueFilterDataBoolean
          : valueFilterData
      }`,
    );
    setData(response.data[0]);
  }, [
    page,
    totalCase,
    valueFilterData,
    valueFilterType,
    valueFilterDataBoolean,
  ]);

  const handleDecrementPage = useCallback(async () => {
    if (page <= 1) return;

    setPage(page - 1);

    const response = await api.get(
      `users/${page - 1}?${valueFilterType}=${
        valueFilterType === 'is_health_area' ||
        valueFilterType === 'group_of_risk'
          ? valueFilterDataBoolean
          : valueFilterData
      }`,
    );
    setData(response.data[0]);
  }, [page, valueFilterData, valueFilterType, valueFilterDataBoolean]);

  const handleDeleteCase = useCallback(
    async id => {
      try {
        await api.delete(`users/${id}`);

        setData(data.filter(user => user.id !== id));
      } catch (error) {
        console.log(error);
      }
    },
    [data],
  );

  const updatedCase = useCallback(
    user => {
      localStorage.setItem('@CovidProject:updateCase', JSON.stringify(user));
      history.push('/');
    },
    [history],
  );

  const handleOpenModal = useCallback(
    user => {
      setPropModal(user);

      modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    },
    [modalIsOpen],
  );

  const handleOpenModalFilter = useCallback(() => {
    modalFilterIsOpen
      ? setModaFilterlIsOpen(false)
      : setModaFilterlIsOpen(true);
  }, [modalFilterIsOpen]);

  return (
    <>
      <Container>
        <CardRight />
        <CardLeft>
          <div>
            <h1>Relação de casos confirmados COVID-19</h1>
            <ContainerSubHeader>
              <FiFilter
                style={{ cursor: 'pointer' }}
                onClick={handleOpenModalFilter}
                size={30}
                color="#49c61f"
              />

              <CasesConfirmed>
                {`${totalCase} `}
                casos listados
                <FiUsers size={30} color="#931919" />
              </CasesConfirmed>
            </ContainerSubHeader>
            <ListCases>
              {data.map(user => (
                <li key={user.id}>
                  <section>
                    <div>
                      <strong>Nome</strong>
                      <span>{user.name}</span>
                    </div>
                    <div>
                      <strong>E-mail</strong>
                      <span>{user.email}</span>
                    </div>
                    <div>
                      <strong>Grupo de risco?</strong>
                      <span>{user.group_of_risk ? 'Sim' : 'Não'}</span>
                    </div>
                    <div>
                      <strong>Prossifional Área da Saúde?</strong>
                      <span>{user.is_health_area ? 'Sim' : 'Não'}</span>
                    </div>
                  </section>

                  <AreaIcons>
                    <FiTrash2
                      onClick={() => handleDeleteCase(user.id)}
                      size={30}
                      color="#ff6d6d"
                    />

                    <FiRotateCw
                      onClick={() => updatedCase(user)}
                      color="#777eff"
                      size={28}
                    />

                    <FiEye
                      onClick={() => handleOpenModal(user)}
                      color="#1aaf07"
                      size={28}
                    />
                  </AreaIcons>
                </li>
              ))}
            </ListCases>

            <ContainerPage>
              <FiChevronLeft
                onClick={handleDecrementPage}
                size={25}
                color="#fff"
                style={{
                  background: page <= 1 ? '#111' : '#444',
                  cursor: page <= 1 ? 'not-allowed' : 'pointer',
                }}
              />
              Página
              {` ${page}`}
              <FiChevronRight
                onClick={handleIncrementPage}
                size={25}
                color="#fff"
                style={{
                  background: page * 5 >= totalCase ? '#111' : '#444',
                  cursor: page * 5 >= totalCase ? 'not-allowed' : 'pointer',
                }}
              />
            </ContainerPage>
          </div>
          <LinkListagem>
            <Link to="/">
              <FiChevronsLeft color="#fff" size={28} />
              Retornar para cadastro
            </Link>
          </LinkListagem>
        </CardLeft>
      </Container>
      <Modal dataProp={propModal} modalOpen={modalIsOpen} />
      <ModalFilter
        onClickButton={handleGetDataFilters}
        modalOpen={modalFilterIsOpen}
      />
    </>
  );
};

export default List;
