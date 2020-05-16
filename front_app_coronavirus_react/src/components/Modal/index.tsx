import React, { useState, useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { format, parseISO, formatISO } from 'date-fns';

import { Container, ModalBody, ModalHeader } from './styles';
import { PropModal } from '../../pages/List';

interface ModalProps {
  modalOpen: boolean;
  dataProp?: PropModal;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, dataProp }) => {
  const [isOpenState, setIsOpenState] = useState(true);

  const closeModal = useCallback(() => {
    if (modalOpen) return setIsOpenState(false);
    return setIsOpenState(true);
  }, [modalOpen]);

  console.log();

  return (
    <Container isOpenState={isOpenState} isOpenProp={modalOpen}>
      <ModalBody>
        <ModalHeader>
          <FiXCircle onClick={closeModal} size={30} color="#333" />
        </ModalHeader>
        <section>
          <strong>Nome</strong>
          <span>{dataProp?.name}</span>
        </section>
        <section>
          <strong>Data nascimento</strong>
          <span>
            {format(
              new Date(parseISO(dataProp?.birth || '1900-01-01')),
              'dd-MM-yyyy',
            )}
          </span>
        </section>
        <section>
          <strong>E-mail</strong>
          <span>{dataProp?.email}</span>
        </section>
        <section>
          <strong>Celular</strong>
          <span>{dataProp?.cellphone}</span>
        </section>
        <section>
          <strong>Altura</strong>
          <span>{dataProp?.height}</span>
        </section>
        <section>
          <strong>Peso</strong>
          <span>{dataProp?.weight}</span>
        </section>
        <section>
          <strong>Grupo de risco?</strong>
          <span>{dataProp?.group_of_risk ? 'Sim' : 'Não'}</span>
        </section>
        <section>
          <strong>Problemas de Saúde</strong>
          <span>{dataProp?.health_problems}</span>
        </section>
        <section>
          <strong>Profissional da área da saúde?</strong>
          <span>{dataProp?.is_health_area ? 'Sim' : 'Não'}</span>
        </section>
        <section>
          <strong>CEP</strong>
          <span>{dataProp?.zip_code}</span>
        </section>
        <section>
          <strong>Estado</strong>
          <span>{dataProp?.state}</span>
        </section>
        <section>
          <strong>Bairro</strong>
          <span>{dataProp?.neighborhood}</span>
        </section>
        <section>
          <strong>Logradouro</strong>
          <span>{dataProp?.street}</span>
        </section>
        <section>
          <strong>N°</strong>
          <span>{dataProp?.address_number}</span>
        </section>
      </ModalBody>
    </Container>
  );
};

export default Modal;
