import { useDeleteSourceMutation } from "api";
import { useAppDispatch, useAppSelector } from "shared/model";
import { useToast } from "@chakra-ui/react";
import { ISource, SourcesActions } from "entities/sources";

//module
import { useSourcesContext } from "../../model/context/useSourcesContext";

export const useDeleteSource = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const { deleteModal } = useSourcesContext();
  const currentSourceId = useAppSelector(state => state.sources.current);
  const [deleteSource, { isLoading }] = useDeleteSourceMutation();

  const onDeleteSource = async (source?: ISource) => {
    if (!source) return
    try {
      await deleteSource(source).unwrap();
      if (currentSourceId === source.id) dispatch(SourcesActions.resetSelect())
      toast({ description: "Источник удален", status: "success", isClosable: true, });
      deleteModal?.onClose();

    } catch (e) {
      //исключение обработано в api
      console.error("onDeleteSource", e)
    }
  }

  return {
    onDeleteSource,
    isLoading,
  }
}