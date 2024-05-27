import React from "react";
import { Button } from "@chakra-ui/react";
import { ISource } from "entities/sources";
//module
import { useFetchSource } from "../model/useFetchSource";
import { useSourcesContext } from "../../model/context/useSourcesContext";

interface IProps {
  source: ISource;
}

export const FetchSourceDataButton = ({ source }: IProps) => {
  const { isLoading } = useFetchSource({source});
  const { onOpenFetchModal } = useSourcesContext();

  return (
    <Button
      isLoading={isLoading}
      variant={"outline"}
      minW={"160px"}
      onClick={() => onOpenFetchModal(source)}
    >
      Задать период
    </Button>
  );
};