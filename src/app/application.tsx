import React, { Suspense } from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

import { Loader } from "shared/ui";

import { useApplication } from "entities/application";

import "shared/i18n";
import "@fontsource-variable/inter";
import "@fontsource-variable/roboto-mono";

import { AppRoutes } from "./appRoutes";

export default function Application() {
  const app = useApplication();
  const dialog = useDisclosure({
    defaultIsOpen: true,
    onClose: () => app.clear(),
  });

  //если версия не совпадает дропает localStorage
  //вписывает в localStorage версию,
  const version = localStorage.getItem("app_version");
  if (version !== import.meta.env.APP_VERSION) {
    localStorage.clear();
    localStorage.setItem("app_version", import.meta.env.APP_VERSION)
  }

  return (
    <Suspense fallback={<Loader />}>
      <AppRoutes />

      {app.message && (
        <Modal {...dialog} isOpen isCentered variant={"notification"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            {app.message?.label ?
              <ModalHeader>{app.message?.label ?? "Сообщение"}</ModalHeader>
              :
              <></>
            }
            <ModalBody>{app.message?.text}</ModalBody>
            <ModalFooter>
              <Button variant="large" onClick={() => dialog.onClose()}>
                Ок
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Suspense>
  );
}