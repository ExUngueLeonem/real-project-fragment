import { ReactNode } from "react";
import {
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter,
  ModalHeader, ModalOverlay, ModalProps, useDisclosure
} from "@chakra-ui/react";

interface IProps extends Omit<ModalProps, "onClose" | "isOpen" | "children"> {
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  disclosure: ReturnType<typeof useDisclosure>;
  isClosable?: boolean;
}

export const NotificationModal = (
  {
    disclosure,
    title,
    body,
    footer,
    isClosable = true,
    ...modalProps
  }: IProps) => {

  return (
    <Modal
      isOpen={disclosure.isOpen}
      onClose={disclosure.onClose}
      closeOnOverlayClick={isClosable}
      variant={"notification"}
      {...modalProps}
    >
      <ModalOverlay />
      <ModalContent>
        {isClosable && <ModalCloseButton />}
        <ModalHeader

        >
          {title}
        </ModalHeader>
        <ModalBody
          p={"20px 0"}
          overflow={"auto"}
          maxH={"80vh"}
        >
          {body}
        </ModalBody>
        {footer ?
          <ModalFooter>
            {footer}
          </ModalFooter>
          :
          <></>
        }
      </ModalContent>
    </Modal>
  );
};