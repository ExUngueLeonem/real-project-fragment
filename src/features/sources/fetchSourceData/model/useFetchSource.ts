import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetSourcesQuery } from "api";
import { ISource } from "entities/sources";
import { useAppSelector } from "shared/model";

interface IProps {
  source?: ISource;
}

export const useFetchSource = (
  {
    source
  }: IProps) => {

  const [localSource] = useState(source);

  const sourceSyncDict = useAppSelector(state => state.tasks.sourceSyncDict);
  const storeTask = sourceSyncDict[localSource?.id || ""];

  const getIsLoading = () => {
    return storeTask?.status === "Running" || false
  }

  const company = useAppSelector(state => state.companies.current);
  useGetSourcesQuery((!getIsLoading() && company?.id) ? { company: company?.id } : skipToken, { refetchOnMountOrArgChange: true });

  // отсюда вырезан функционал по таскам

  return {
    isLoading: getIsLoading(),
  }
}