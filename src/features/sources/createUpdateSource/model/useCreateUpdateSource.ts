import { useToast } from "@chakra-ui/react";

import { useAddSourceMutation, useUpdateSourceMutation } from "api";
import { ISource, useGetSources } from "entities/sources";
//module

export const useCreateUpdateSource = ({ source }: { source?: ISource }) => {
  const [addSource, addSourceHelpers] = useAddSourceMutation();
  const [updateSource, updateSourceHelpers] = useUpdateSourceMutation();
  const { refetch: getSources } = useGetSources();
  const toast = useToast();

  const createUpdateSource = async (source: ISource, shouldFetchSource: boolean = true) => {
    if (source.type === 512) source = { ...source, name: "FNS" }

    const create = async () => {
      const res = await addSource(source).unwrap()
      toast({
        description: "Источник успешно создан",
        status: "success",
        isClosable: true,
      });
      return res;
    }

    const update = async () => {
      const res = await updateSource(source).unwrap();
      toast({
        description: "Источник успешно обновлен",
        status: "success",
        isClosable: true,
      });
      return res;
    }

    try {
      const res = source.id ? await update() : await create();
      await getSources();

      shouldFetchSource &&
      toast({
        description: "Пожалуйста подождите, синхронизация источника может занять несколько минут",
        status: "info",
        isClosable: true,
      });
      return res;
    } catch (e) {
      //ошибка обрабатывается в api
      console.error("onCreateUpdateSource", e)
    }
  }

  const isLoading =
    addSourceHelpers.isLoading ||
    updateSourceHelpers.isLoading;

  return {
    isLoading,
    createUpdateSource
  }
};