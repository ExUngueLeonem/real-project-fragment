import { useEffect, useState } from "react";
import { FieldValues, useFormContext, Validate } from "react-hook-form";
import { Center, FormControl, FormLabel, Grid, Icon, InputRightElement, Select, Text } from "@chakra-ui/react";

import { appSettings } from "shared/lib";
import { TSourceTypes } from "shared/model";
import { CustomInput, EndpointEditor } from "shared/ui";
import { useGetSources } from "entities/sources";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//module
import { ISourceOption } from "../../model/source_options";

interface IProps {
  direction?: "from" | "to";
  isDisabled?: boolean;
  disabledFields?: { [key: string]: boolean };
}

export function SourceInputGroup(
  {
    direction,
    isDisabled = false,
    disabledFields
  }: IProps) {
  const { data: sources } = useGetSources();
  const { register, getValues, reset } = useFormContext();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  //лейблы подтягиваются из appSettings
  const sourcesOptions: ISourceOption[] = [
    { value: 1, disabled: false },
    { value: 2, disabled: false },
    { value: 512, disabled: false },
    { value: 1024, disabled: false },

    { value: 3, disabled: true },
  ];

  useEffect(() => {
    reset()
  }, [reset])

  //указывает, тип формы, входящий источник, или исходящий
  if (direction === "to") {
    sourcesOptions.reverse();
  }

  const validateSourceName: Validate<string, FieldValues> = () => {
    if (!sources) return
    for (const item of sources) {
      if (item.id === getValues("id")) continue;
      if (item.name === getValues("name")) return "Источник с таким именем уже существует";
    }
    return;
  };

  const isDisabledByUpload = (type: TSourceTypes) => {
    const canUploadToSource = appSettings.source.get(type)?.canUploadToSource;
    if (direction === "from") {
      return canUploadToSource
    } else if (direction === "to") {
      return !canUploadToSource
    }
    return false
  }

  return (
    <>
      {getValues("type") !== 512 &&
        <CustomInput
          variant={"md"}
          isDisabled={!!disabledFields?.["name"] || isDisabled}
          name={"name"} label={"Имя"}
          registerOptions={{
            required: "Обязательное поле",
            maxLength: { value: 255, message: "Максимальная длина 255 символов" },
            validate: validateSourceName,
          }}
        />
      }

      <FormControl w={"full"}>
        <FormLabel> <Text variant={"form_input_label"}> Тип </Text> </FormLabel>
        <Select
          w={"full"}
          isDisabled={!!disabledFields?.["type"] || isDisabled}
          variant={"md"}
          {...register("type", { valueAsNumber: true })}
        >
          {sourcesOptions.map(item =>
            <option key={item.value} value={item.value} disabled={item.disabled || isDisabledByUpload(item.value)}>
              {appSettings?.source?.get(item.value)?.name}
            </option>
          )}
        </Select>
      </FormControl>

      {getValues("type") === 1024 &&
        <Grid w={"full"} gridTemplateColumns={"100px 1fr"} gap={"20px"}>
          <EndpointEditor
            isDisabled={!!disabledFields?.["endpoint"] || isDisabled}
          />

        </Grid>
      }

      {getValues("type") !== 512 &&
        <>
          <CustomInput
            variant={"md"}
            name={"login"} label={"Логин"}
            isDisabled={!!disabledFields?.["login"] || isDisabled}
            registerOptions={{ required: "Обязательное поле" }}
          />
          <CustomInput
            variant={"md"}
            name={"password"}
            label={"Пароль"}
            type={isVisiblePassword ? "text" : "password"}
            isDisabled={!!disabledFields?.["password"] || isDisabled}
            registerOptions={{ required: "Обязательное поле" }}
            inputRightElement={
              <InputRightElement h={"full"}>
                <Center onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
                  {isVisiblePassword ?
                    <Icon as={AiOutlineEyeInvisible} fill={"primary_text"} />
                    :
                    <Icon as={AiOutlineEye} fill={"primary_text"} />
                  }
                </Center>
              </InputRightElement>
            }
          />
        </>
      }
    </>
  );
}