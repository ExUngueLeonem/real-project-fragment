import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FieldValues, FormProvider, SubmitHandler, useForm, Validate } from "react-hook-form";
import { Button, Center, HStack, Icon, InputRightElement, Link, Text, VStack } from "@chakra-ui/react";

import { useRegisterMutation } from "api";
import { emailPattern, ErrorUtils, passwordPattern } from "shared/lib";
import { Alert, CustomInput } from "shared/ui";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface IRegisterForm {
  email: string;
  confirmation: string;
  password: string;
  name: string;
  ref: string | null;
}

export function Register() {
  const [queryParam] = useSearchParams();
  const [registration, { isError, isSuccess, reset, error, isLoading }] = useRegisterMutation();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false);

  const Form = useForm<IRegisterForm>({
    // mode: "onChange",
    defaultValues:
      {
        email: "",
        confirmation: "",
        password: "",
        name: "",
        ref: queryParam.get("ref"),
      },
  });

  const { handleSubmit, getValues, } = Form;
  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    registration(data);
  };

  if (isSuccess) {
    return (
      <VStack alignItems={"start"} gap={5}>
        <Text variant={"heading"} display={"inline"}> Подтверждение </Text>
        <Text variant={"descriptor"} display={"inline"}>
          На Ваш адрес электронной почты
          {" "}
          <span style={{ color: "#4684FF" }}>
          {getValues("email")}
        </span>
          {" "}
          отправлено письмо для подтверждения.
          Пожалуйста, откройте его и перейдите по ссылке.
          Если вы не обнаружили письмо, проверьте папку спам.
        </Text>
      </VStack>
    );
  }

  if (isError) {
    return (
      <Alert
        isOpen
        text={ErrorUtils.getErrorMessage(error)}
        label="Ошибка"
        onClosed={reset}
      />
    );
  }

  const passwordValidation: Validate<string, FieldValues> = () => {
    if (getValues("password") !== getValues("confirmation")) return "Пароли не совпадают";
    return;
  };

  return (
    <FormProvider {...Form}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "contents" }}>
        <VStack alignItems={"start"} gap={5} pb={10}>
          <Text variant={"heading"}> Регистрация </Text>
          <Text variant={"descriptor"}> Заполните поля ниже, чтобы зарегистрироваться в системе </Text>
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

          <CustomInput
            variant={"md"}
            label={"Пароль"}
            name={"password"}
            type={isVisiblePassword ? "" : "password"}
            registerOptions={{
              required: "Обязательное поле",
              minLength: { value: 8, message: "Не менее 8 символов" },
              pattern: passwordPattern,
            }}
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
            helperText={"Ваш пароль должен содержать минимум 8 символов, заглавную букву, спецсимвол и цифру"}
          />

          <CustomInput
            variant={"md"}
            label={"Подтвердите пароль"}
            name={"confirmation"}
            type={isVisibleConfirmation ? "" : "password"}
            registerOptions={{
              required: "Обязательное поле",
              minLength: { value: 8, message: "Не менее 8 символов" },
              pattern: passwordPattern,
              validate: passwordValidation,
            }}
            inputRightElement={
              <InputRightElement h={"full"}>
                <Center onClick={() => setIsVisibleConfirmation(!isVisibleConfirmation)}>
                  {isVisibleConfirmation ?
                    <Icon as={AiOutlineEyeInvisible} fill={"primary_text"} />
                    :
                    <Icon as={AiOutlineEye} fill={"primary_text"} />
                  }
                </Center>
              </InputRightElement>
            }
          />

          <Button isLoading={isLoading} mt={3.5} variant={"large"} type={"submit"}>
            Создать аккаунт
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
