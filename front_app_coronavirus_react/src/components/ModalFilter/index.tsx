import React, { useState, useCallback } from 'react';
import { FiXCircle, FiSearch } from 'react-icons/fi';

import {
  Container,
  ModalBody,
  ModalHeader,
  Label,
  LabelSelect,
  BodyContent,
} from './styles';

interface FiltersParams {
  typeFilter: string;
  dataFilter: string;
}

interface ModalProps {
  modalOpen: boolean;
  onClickButton(filter: FiltersParams): Promise<void>;
}

const ModalFilters: React.FC<ModalProps> = ({ modalOpen, onClickButton }) => {
  const [isOpenState, setIsOpenState] = useState(true);

  const [valueSelectTypeFilter, setValueSelectTypeFilter] = useState('todos');
  const [valueConfirmation, setValueConfirmation] = useState('nao');
  const [valueSelectFilterData, setValueSelectFilterData] = useState('');

  const closeModal = useCallback(() => {
    if (modalOpen) return setIsOpenState(false);
    return setIsOpenState(true);
  }, [modalOpen]);

  const handleFilter = useCallback(() => {
    if (
      valueSelectTypeFilter === 'city' ||
      valueSelectTypeFilter === 'state' ||
      valueSelectTypeFilter === 'street' ||
      valueSelectTypeFilter === 'neighborhood'
    ) {
      return (
        <Label>
          <FiSearch size={26} color="#333" />
          <input
            value={valueSelectFilterData}
            onChange={event => setValueSelectFilterData(event.target.value)}
            type="text"
            placeholder="Busque conforme filtro selecionado"
          />
        </Label>
      );
    }
    if (
      valueSelectTypeFilter === 'group_of_risk' ||
      valueSelectTypeFilter === 'is_health_area'
    ) {
      return (
        <LabelSelect>
          <FiSearch size={26} color="#333" />
          <select
            value={valueConfirmation}
            onChange={event => setValueConfirmation(event.target.value)}
          >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
        </LabelSelect>
      );
    }

    return <> </>;
  }, [valueSelectTypeFilter, valueSelectFilterData, valueConfirmation]);

  const PassParamsFilterToProps = useCallback(() => {
    onClickButton({
      typeFilter:
        valueSelectTypeFilter !== 'todos' ? valueSelectTypeFilter : '',
      dataFilter:
        valueSelectTypeFilter === 'group_of_risk' ||
        valueSelectTypeFilter === 'is_health_area'
          ? valueConfirmation
          : valueSelectFilterData,
    });
  }, [
    onClickButton,
    valueSelectTypeFilter,
    valueConfirmation,
    valueSelectFilterData,
  ]);

  return (
    <Container isOpenState={isOpenState} isOpenProp={modalOpen}>
      <ModalBody>
        <ModalHeader>
          <FiXCircle onClick={closeModal} size={30} color="#333" />
        </ModalHeader>
        <BodyContent>
          <LabelSelect>
            Filtrar por
            <select
              value={valueSelectTypeFilter}
              onChange={event => setValueSelectTypeFilter(event.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="group_of_risk">Gupo de Risco</option>
              <option value="is_health_area">
                Proffisionais da Área de Saúde
              </option>
              <option value="state">Estado</option>
              <option value="city">Cidade</option>
              <option value="neighborhood">Bairro</option>
              <option value="street">Rua</option>
            </select>
          </LabelSelect>

          {handleFilter()}

          <footer>
            <button onClick={PassParamsFilterToProps} type="button">
              Filtrar
            </button>
          </footer>
        </BodyContent>
      </ModalBody>
    </Container>
  );
};

export default ModalFilters;
