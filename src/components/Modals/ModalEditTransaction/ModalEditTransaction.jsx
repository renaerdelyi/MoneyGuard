import React, { useEffect } from 'react';
import {
  Backdrop,
  BtnCancel,
  CloseBtn,
  CloseModalBtn,
  Gradient,
  StyledModal,
} from './ModalEditTransaction.styled';
import { Header } from '../../Dashboard/Header/Header';
import { useMediaQuery } from 'react-responsive';

function ModalEditTransaction({ closeModal, children }) {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    function handleEscPress(ev) {
      if (ev.key === 'Escape') {
        closeModal(false);
      }
    }

    document.addEventListener('keydown', handleEscPress);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscPress);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal(false);
    }
  };

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        closeModal(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  return (
    <Backdrop onClick={handleBackdropClick} data-backdrop>
      {!isTabletOrDesktop && <Header />}
      <StyledModal>
        <Gradient />
        <CloseModalBtn
          type="button"
          aria-label="Close Button"
          onClick={() => closeModal(false)}
        >
          <CloseBtn />
        </CloseModalBtn>
        {children}
        <BtnCancel type="button" onClick={() => closeModal(false)}>
          Cancel
        </BtnCancel>
      </StyledModal>
    </Backdrop>
  );
}

export default ModalEditTransaction;
