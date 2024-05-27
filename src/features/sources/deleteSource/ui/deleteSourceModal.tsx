import React from "react";
import { DeleteModal } from "shared/ui";

//module
import { useSourcesContext } from "../../model/context/useSourcesContext";
import { useDeleteSource } from "../model/useDeleteSource";

export const DeleteSourceModal = () => {
  const { selectedSource, deleteModal } = useSourcesContext();
  const { onDeleteSource, isLoading } = useDeleteSource();

  return (
    <>
      {deleteModal &&
        <DeleteModal
          disclosure={deleteModal}
          onDelete={() => onDeleteSource(selectedSource)}
          isLoading={isLoading}
          title={"Удаление источника"}
          message={"Удаление источника приведет к удалению связанных с ним сопоставлений и документов"}
        />
      }
    </>
  );
};