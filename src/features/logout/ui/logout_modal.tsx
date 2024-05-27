import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, } from "@chakra-ui/react";

import { AcceptButton } from "shared/ui";
import { useUser } from "entities/user";

//module
import { useLogoutContext } from "../model/logoutContext";

export function LogoutModal() {
  const { logout } = useUser();
  const nav = useNavigate();

  const {logoutModal} = useLogoutContext();

  const doLogout = useCallback(() => {
    logout();
    nav("/");
  }, [nav, logout]);

  return (
    <Modal isOpen={logoutModal.isOpen} onClose={logoutModal.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          Выйти из приложения?
        </ModalHeader>
        <ModalFooter>
          <VStack w={"full"}>
            <AcceptButton onClick={() => doLogout()}>
              Подтвердить
            </AcceptButton>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}