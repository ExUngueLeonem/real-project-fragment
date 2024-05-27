import url from "url";
import { useFormContext } from "react-hook-form";
import { FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";

export function EndpointEditor(
  {
    isDisabled = false,
  }: {
    isDisabled?: boolean;
  }) {

  const { register, setValue, getValues } = useFormContext();

  const changeHostName = () => {
    const protocol = getValues("protocol");
    const hostname = getValues("hostname");
    const port = getValues("port");
    const pathname = getValues("pathname");
    if (protocol && hostname && port && pathname)
      setValue("endpoint", url.format({ protocol, hostname, port, pathname }));
  }

  return (
    <>
      <FormControl w={"fit-content"}>
        <FormLabel> <Text variant={"form_input_label"}>Схема </Text> </FormLabel>
        <Select
          isDisabled={isDisabled}
          variant={"md"}
          w={"100px"}
          isRequired
          {...register("protocol", {onChange: () => changeHostName()})}
        >
          <option value={"http:"}>http</option>
          <option value={"https:"}>https</option>
        </Select>
      </FormControl>
      <FormControl flexGrow={1}>
        <FormLabel> <Text variant={"form_input_label"}> Адрес</Text></FormLabel>
        <Input
          isDisabled={isDisabled}
          variant={"md"}
          isRequired
          {...register("hostname", {onChange: () => changeHostName()}) }
        />
      </FormControl>

      <FormControl>
        <FormLabel> <Text variant={"form_input_label"}>Порт </Text></FormLabel>
        <Input
          isDisabled={isDisabled}
          variant={"md"}
          type="number"
          min={1}
          max={65535}
          isRequired

          {...register("port", {onChange: () => changeHostName()})}
        />
      </FormControl>
      <FormControl>
        <FormLabel> <Text variant={"form_input_label"}>Путь </Text></FormLabel>
        <Input
          isDisabled={isDisabled}
          variant={"md"}
          isRequired
          {...register("pathname", {onChange: () => changeHostName()})}
        />
      </FormControl>
    </>
  );
}