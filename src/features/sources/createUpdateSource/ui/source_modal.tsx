import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

import { ISource } from "entities/sources";

//model
import { SourceForm } from "./source_form";
import { useSourcesContext } from "../../model/context/useSourcesContext";

interface IProps {
  source: ISource | undefined;
  disclosure: ReturnType<typeof useDisclosure>;
}

export function SourceModal(
  {
    source,
  }: IProps) {
  const { sourceModal } = useSourcesContext();

  return (
    <>
      <Modal isOpen={sourceModal.isOpen} onClose={sourceModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            {source?.id ? "Редактирование источника" : "Добавление источника"}
          </ModalHeader>
          <ModalBody>
            {sourceModal.isOpen &&
              <SourceForm source={source} disclosure={sourceModal} />
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}