import React from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { HStack } from "@chakra-ui/react";
import { AcceptButton, CustomFormProvider, CustomInput } from "shared/ui";
import { ISource } from "entities/sources";

//module
import { useFetchSource } from "../../model/useFetchSource";
import { useSourcesContext } from "../../../model/context/useSourcesContext";


interface IFetchSourceInputs {
  from: string;
  to: string;
}

export const FetchSourceForm = ({ source }: { source: ISource }) => {
  const { fetchSourceModal } = useSourcesContext();
  const { isLoading } = useFetchSource({source});

  const onSubmit = async ({ from }: { from: string }) => {
    fetchSourceModal.onClose();
  }
  const Form = useForm<IFetchSourceInputs>({
    defaultValues: {
      from: moment().subtract(1, "month").format("YYYY-MM-DD"),
      to: moment().format("YYYY-MM-DD")
    }
  });
  const { getValues, formState: { isValid } } = Form;

  return (
    <CustomFormProvider onSubmit={onSubmit} Form={Form}>

      <CustomInput
        isNoRightElement={true}
        label={"Начало периода"}
        name={"from"}
        type={"date"}
        variant={"md"}
        max={getValues("to")}
        registerOptions={{
          max: getValues("to")
        }}
      />

      <CustomInput
        isNoRightElement={true}
        label={"Окончание периода"}
        name={"to"}
        type={"date"}
        variant={"md"}

        isDisabled={true}
      />

      <HStack justifyContent={"end"} w={"full"}>
        {/*<CancelButton*/}
        {/*  onClick={() => fetchSourceModal.onClose()}*/}
        {/*/>*/}
        <AcceptButton
          isLoading={isLoading}
          isDisabled={!isValid}
        >
          Обновить
        </AcceptButton>
      </HStack>

    </CustomFormProvider>
  );
};