import React from "react";
import { ISource } from "entities/sources";
import { DeleteButton } from "shared/ui";

//module
import { useSourcesContext } from "../../model/context/useSourcesContext";

export const DeleteSourceButton = ({source}: {source: ISource}) => {
  const { onOpenDeleteModal } = useSourcesContext();

  return (
    <DeleteButton aria-label={"delete source"}
      onClick={() => onOpenDeleteModal?.(source)}
    />
  );
};