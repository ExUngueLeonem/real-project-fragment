import { Button, Center, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm, } from "react-hook-form";

import { useLazySendRestorePasswordMailQuery } from "api";
import { CustomInput } from "shared/ui";
import { emailPattern } from "shared/lib";

interface IForm {
  email: string,
}

export function Restore() {
  const [sendRestoreEmail, { isSuccess, isLoading }] = useLazySendRestorePasswordMailQuery();

  const Form = useForm<IForm>({
    // mode: "onChange",
    defaultValues: { email: "" },
  });

  const { handleSubmit, getValues, } = Form;
  const onSubmit: SubmitHandler<IForm> = (data) => {
    sendRestoreEmail(data)
  };

  if (isSuccess) {
    return (
      <VStack alignItems={"start"} gap={5}>
        <Text variant={"heading"} display={"inline"}> Восстановление пароля </Text>
        <Text variant={"descriptor"} display={"inline"}>
          На Ваш адрес электронной почты
          {" "}
          <span style={{ color: "#4684FF" }}>
          {getValues("email")}
        </span>
          {" "}
          отправлено письмо для восстановления пароля.
          Пожалуйста, откройте его и перейдите по ссылке.
          Если вы не обнаружили письмо, проверьте папку спам.
        </Text>
      </VStack>
    );
  }

  return (
    <FormProvider {...Form}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "contents" }}>
        <VStack alignItems={"start"} gap={5} pb={10}>
          <Text variant={"heading"}> Восстановление пароля </Text>
          <Text variant={"descriptor"}> Заполните поле ниже, чтобы получить письмо для восстановления пароля </Text>
        </VStack>
        <VStack alignItems={"start"} gap={5}>

          <CustomInput
            variant={"md"}
            label={"E-mail"}
            name={"email"}
            registerOptions={{
              required: "Обязательное поле",
              pattern: emailPattern,
            }}
          />

          <Button isLoading={isLoading} mt={3.5} variant={"large"} type={"submit"}>
            Сбросить пароль
          </Button>
          <Center w={"full"}>
            <HStack>
              <Text> У Вас уже есть аккаунт? </Text>
              <Link href={"/login"}>Войти</Link>
            </HStack>
          </Center>
        </VStack>
      </form>
    </FormProvider>
  );
}