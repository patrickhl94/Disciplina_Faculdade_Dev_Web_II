import React, { useState, useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, ModalBody, ModalHeader } from './styles';

interface ModalProps {
  modalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ modalOpen }) => {
  const [isOpenState, setIsOpenState] = useState(true);

  const closeModal = useCallback(() => {
    if (modalOpen) return setIsOpenState(false);
    return setIsOpenState(true);
  }, [modalOpen]);

  return (
    <Container isOpenState={isOpenState} isOpenProp={modalOpen}>
      <ModalBody>
        <ModalHeader>
          <FiXCircle onClick={closeModal} size={30} color="#333" />
        </ModalHeader>
        <section>
          <strong>Nome</strong>
          <span>Patrick Lima</span>
        </section>
        <section>
          <strong>Data nascimento</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>E-mail</strong>
          <span>patrick@email.com</span>
        </section>
        <section>
          <strong>Celular</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Altura</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Peso</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Grupo de risco?</strong>
          <span>Não</span>
        </section>
        <section>
          <strong>Problemas de Saúde</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Profissional da área da saúde?</strong>
          <span>Não</span>
        </section>
        <section>
          <strong>CEP</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Estado</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Bairro</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>Logradouro</strong>
          <span>Sim</span>
        </section>
        <section>
          <strong>N°</strong>
          <span>Sim</span>
        </section>
      </ModalBody>
    </Container>
  );
};

export default Modal;
