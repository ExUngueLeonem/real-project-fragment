import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button, Center, HStack, Icon, InputRightElement, Link, Spacer, Text, VStack, } from "@chakra-ui/react";

import { useLoginMutation } from "api";
import { Alert, CustomInput } from "shared/ui";
import { emailPattern, ErrorUtils } from "shared/lib";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface ILoginForm {
  email?: string;
  password?: string;
  save?: boolean;
}

export function Login() {
  const navigate = useNavigate();
  const [login, { isError, isSuccess, reset, error }] = useLoginMutation();
  const [isVisible, setIsVisible] = useState(false);
  const LoginForm = useForm<ILoginForm>({
    // mode: "onChange"
  });
  const { handleSubmit } = LoginForm;
  const onSubmit: SubmitHandler<ILoginForm> = (data) => login(data);

  if (isSuccess) {
    return <Navigate to={"/login"} />;
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

  const onRestorePassword = () => {
    navigate("/login/restore")
  }

  return (
    <FormProvider {...LoginForm}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "contents" }}>
        <VStack alignItems={"start"} gap={5} pb={10}>
          <Text variant={"heading"}> Вход </Text>
          <Text variant={"descriptor"}> Войдите в систему, чтобы приступить к работе </Text>
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
            type={isVisible ? "" : "password"}
            label={"Пароль"}
            name={"password"}
            registerOptions={{ required: "Обязательное поле" }}
            inputRightElement={
              <InputRightElement h={"full"}>
                <Center onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ?
                    <Icon as={AiOutlineEyeInvisible} fill={"primary_text"} />
                    :
                    <Icon as={AiOutlineEye} fill={"primary_text"} />
                  }
                </Center>
              </InputRightElement>
            }
          />

          <HStack w={"full"}>
            <Spacer />
            <Button fontSize={"xs"} variant={"a"} onClick={onRestorePassword}>
              Забыли пароль?
            </Button>
          </HStack>
          <Button type={"submit"} variant={"large"}>
            Войти
          </Button>
          <Center w={"full"}>
            <HStack>
              <Text> У Вас нет аккаунта? </Text>
              <Link href={"login/register"}>Регистрация</Link>
            </HStack>
          </Center>
        </VStack>
      </form>
    </FormProvider>
  );

}
