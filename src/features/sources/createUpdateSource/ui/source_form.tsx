import { useDisclosure } from "@chakra-ui/react";
import { ISource } from "entities/sources";

//module
import SourceFormPass from "./pass/source_form_pass";
import { useCreateUpdateSource } from "../model/useCreateUpdateSource";

interface IProps {
  source?: ISource | undefined;
  disclosure?: ReturnType<typeof useDisclosure>;
  sideEffect?: () => void
  direction?: "from" | "to";
}

export function SourceForm(
  {
    source,
    disclosure,
    sideEffect,
    direction,
  }: IProps) {

  const { createUpdateSource, isLoading } = useCreateUpdateSource({ source });
  const onCreateUpdateSource = async (source: ISource, shouldFetchSource: boolean = true) => {
    const res = await createUpdateSource(source, shouldFetchSource);
    sideEffect?.()
    if (res) disclosure?.onClose();
  };

  return (
      // здесь были табы с разными формами
      <SourceFormPass source={source} onSubmit={onCreateUpdateSource} isLoading={isLoading} direction={direction} />
  );
}