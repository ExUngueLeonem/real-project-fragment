import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export interface IDialogProps {
  label?: string;
  text?: string;
  isOpen?: boolean;
  onClosed?: () => void;
}

export function Alert(props: IDialogProps) {
  const cancelRef = React.useRef(null);
  const { isOpen, onClose } = useDisclosure({
    isOpen: props.isOpen,
    onClose: props.onClosed,
  });

  return (
    <AlertDialog
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {props.label}
          </AlertDialogHeader>
          <AlertDialogBody>{props.text}</AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="blue" onClick={onClose} ml={3}>
              Закрыть
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
