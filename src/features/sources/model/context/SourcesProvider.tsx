import { ReactNode, useCallback, useState, } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ISource } from "entities/sources";

import { SourcesContext } from "./sourceContext";

interface IProps {
  children: ReactNode;
}

export function SourcesProvider({ children }: & IProps) {
  const [selectedSource, setSelectedSource] = useState<ISource>();
  const deleteModal = useDisclosure();
  const sourceModal = useDisclosure();
  const fetchSourceModal = useDisclosure();

  const onOpenSourceForm = useCallback((source?: ISource) => {
    setSelectedSource(source);
    sourceModal.onOpen();
  }, [sourceModal]);

  const onOpenDeleteModal = useCallback((source: ISource) => {
    setSelectedSource(source);
    deleteModal.onOpen();
  }, [deleteModal]);

  const onOpenFetchModal = useCallback((source: ISource) => {
    setSelectedSource(source);
    fetchSourceModal.onOpen();
  }, [fetchSourceModal])

  return (
    <SourcesContext.Provider
      value={{
        selectedSource,

        deleteModal,
        onOpenDeleteModal,
        sourceModal,
        onOpenSourceForm,
        fetchSourceModal,
        onOpenFetchModal,
      }}
    >
      {children}
    </SourcesContext.Provider>
  );
}