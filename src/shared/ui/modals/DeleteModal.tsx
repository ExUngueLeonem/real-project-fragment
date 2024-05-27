import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";

//module
import { AcceptButton } from "../form/buttons/acceptButton";

interface IProps {
  disclosure: ReturnType<typeof useDisclosure>;
  isLoading?: boolean;
  onDelete: () => void;
  title?: string;
  message?: string;
}

export const DeleteModal = (
  {
    disclosure,
    isLoading,
    onDelete,
    title,
    message,
  }: IProps) => {

  const [confirm, setConfirm] = useState("");

  const onDeleteHandler = () => {
    if (confirm.trim().toLowerCase() !== "удалить") return;
    onDelete();
  }

  //если форма закрыта, удаляем confirm
  useEffect(() => {
    if (disclosure.isOpen) return;
    if (!confirm) return;
    setConfirm("");
  }, [confirm, disclosure.isOpen])

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          {title}
        </ModalHeader>
        <ModalBody p={"0 0 20px 0"} fontSize={"sm"}>
          <Box pb={"20px"}>
            {message}
            <br />
            Для подтверждения введите
            <Badge m={"0 10px"} colorScheme='red'>удалить</Badge>
            в поле ниже
          </Box>

          <Input variant={"md"} value={confirm} onChange={(e) => setConfirm(e.target.value)} />

        </ModalBody>
        <ModalFooter>
          <HStack w={"full"}>
            {/*<CancelButton onClick={disclosure.onClose} />*/}
            <AcceptButton
              onClick={onDeleteHandler}
              isLoading={isLoading}
            >
              Удалить
            </AcceptButton>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};