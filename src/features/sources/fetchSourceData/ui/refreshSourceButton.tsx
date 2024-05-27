import React from "react";
import { IconButton } from "@chakra-ui/react";
import { HiOutlineRefresh } from "react-icons/hi";
import { ISource } from "entities/sources";
import { useFetchSource } from "../model/useFetchSource";

interface IProps {
  source: ISource;
}

export const RefreshSourceButton = ({ source }: IProps) => {
  const { isLoading } = useFetchSource({source});
  return (
    <IconButton
      variant={"outline"}
      icon={<HiOutlineRefresh />}
      aria-label={"refresh source"}
      onClick={() => {console.log("RefreshSourceButton")}}
      isLoading={isLoading}
    />
  );
};