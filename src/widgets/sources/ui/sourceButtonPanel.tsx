import React from "react";
import { HStack } from "@chakra-ui/react";
import { ISource } from "entities/sources";
import { DeleteSourceButton, FetchSourceDataButton, RefreshSourceButton, UpdateSourceButton } from "features/sources";
import { useFetchSource } from "features/sources";

interface IProps {
  source: ISource;
}

export const SourceButtonPanel = ({ source }: IProps) => {
  const { isLoading } = useFetchSource({ source });
  return (
    <HStack justifyContent={"end"} gap={4}>
      <UpdateSourceButton source={source} isDisabled={isLoading} />
      <RefreshSourceButton source={source} />
      <FetchSourceDataButton source={source} />
      <DeleteSourceButton source={source} />
    </HStack>
  );
};