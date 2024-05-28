import url from "url";
import { useForm } from "react-hook-form";
import { Box, HStack, VStack } from "@chakra-ui/react";

import { useAppSelector } from "shared/model";
import { AcceptButton, CustomFormProvider } from "shared/ui";
import { ISource } from "entities/sources";

//module
import { ISourceInputs } from "../../model/source_inputs";
import { SourceInputGroup } from "./SourceInputGroup";
import { useEffect } from "react";

interface IProps {
  source: ISource | undefined;
  // onClose: () => void;
  onSubmit: (source: ISourceInputs, shouldUpdate?: boolean) => void;
  isLoading?: boolean;
  direction?: "from" | "to";
}

export default function SourceFormPass(
  {
    source,
    onSubmit,
    isLoading = false,
    direction,
  }: IProps) {
  const company = useAppSelector(state => state.companies.current);
  const { protocol, hostname, port, pathname } = url.parse(source?.endpoint || "https://localhost:443/resto");

  const endpontDefault = {
    protocol,
    hostname,
    port,
    pathname,
  }

  const Form = useForm<ISourceInputs>({
    defaultValues: source ?
      //update
      {
        ...source,
        ...endpontDefault,
        authenticateType:	4,
      }
      :
      //create
      {
        company: company?.id || "",
        type: direction === "to" ? 1024 : 1,
        ...endpontDefault,
        authenticateType:	4,
      }
  });
  const { watch, formState, reset } = Form;
  watch("type");

  console.log("source", formState)

  const onSubmitHandler = (sourceInputs: ISourceInputs) => {
    //проверка что какие-то поля, кроме имени и пароля изменились
    let shouldFetchSource = false;
    if (formState.dirtyFields.name) shouldFetchSource = false;

    for (const key in formState.dirtyFields) {
      if (key === "password") continue;
      if (key === "name") continue;
      shouldFetchSource = true;
      break;
    }

    onSubmit(sourceInputs, shouldFetchSource)
  }

  useEffect(() => {
    reset();
  })

  return (
    <Box w={"full"}>
      <CustomFormProvider onSubmit={onSubmitHandler} Form={Form}>

        <VStack gap={"15px"} pt={"15px"} w={"full"}>
          <SourceInputGroup
            isDisabled={isLoading}
            disabledFields={{ type: !!source }}
            direction={direction}
          />
        </VStack>
        <HStack justifyContent={"end"} w={"full"}>
          <AcceptButton
            isLoading={isLoading}
          >
            Принять
          </AcceptButton>
        </HStack>

      </CustomFormProvider>
    </Box>
  );
}