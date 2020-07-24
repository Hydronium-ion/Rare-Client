import React, { ReactNode, useEffect } from 'react';

import Portal from '#/Common/Portal/Portal.component';
import { ModalOverlay, ModalWrapper, ModalInner, CloseModalButtonContainer } from './Modal.styles';

export interface IVisible {
  visible: boolean;
  onClick?: any;
}

interface IClosable {
  onClose: Function;
  maskClosable: any;
  closable: any;
}

type IModalProps =  IVisible & IClosable & { children: ReactNode };

const Modal = ({ onClose, maskClosable, closable, visible, children }: IModalProps) => {

  const onMaskClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e: any) => {
    if (onClose) {
      onClose(e)
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={ visible } />
      <ModalWrapper 
        visible={ visible }
        onClick={ maskClosable ? onMaskClick : null }
        tabIndex={-1}
        > 
        <ModalInner tabIndex={0}>
          {closable && 
            <CloseModalButtonContainer>
              <button onClick={close}>x</button>
            </CloseModalButtonContainer>}
          { children }
        </ModalInner>
      </ModalWrapper>
    </Portal>
  )
}

export default Modal