import React from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

//module
import { useSourcesContext } from "../../../model/context/useSourcesContext";
import { FetchSourceForm } from "./fetchSourceForm";

export const FetchSourceModal = () => {
  const { fetchSourceModal, selectedSource } = useSourcesContext();
  return (
    <>
      <Modal isOpen={fetchSourceModal.isOpen} onClose={fetchSourceModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            {"Обновить источник"}
          </ModalHeader>
          <ModalBody>
            <Text mb={"15px"}>
              Укажите дату, с которой должна начаться синхронизация документов
            </Text>
            {fetchSourceModal.isOpen && selectedSource &&
              <FetchSourceForm source={selectedSource} />
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};