import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import { ICompany } from "entities/companies";

//module
import { CompaniesForm } from "./companies_form";
import { useCreateUpdateCompany } from "../model/useCreateUpdateCompany";

interface IProps {
  company: ICompany | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export function CompanyModal(
  {
    company,
    onClose,
    isOpen,
  }: IProps) {

  const { isLoading, createUpdateCompany } = useCreateUpdateCompany();
  const onCreateUpdateCompany = async (company: ICompany) => {
    const res = await createUpdateCompany(company)
    if (res) onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            {company?.id ? "Редактирование компании" : "Добавление компании"}
          </ModalHeader>
          <ModalBody>
            {isOpen && <CompaniesForm isLoading={isLoading} company={company} onClose={onClose} onSubmit={onCreateUpdateCompany} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}