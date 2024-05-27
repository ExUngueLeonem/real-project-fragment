import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FieldValues, FormProvider, SubmitHandler, useForm, Validate } from "react-hook-form";
import { useConfirmRestoreMutation } from "api";
import { Button, Center, HStack, Icon, InputRightElement, Link, Text, useToast, VStack } from "@chakra-ui/react";

import { CustomInput, LogoWrapper, SimpleFormWrapper } from "shared/ui";
import { passwordPattern } from "shared/lib";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface IForm {
  confirmation: string,
  password: string,
}

//подтверждение сброса пароля
export function ConfirmResetPage() {
  const toast = useToast();
  const navigate = useNavigate();
  const [confirmRestore, { isSuccess }] = useConfirmRestoreMutation();
  const [searchParams] = useSearchParams();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false);

  const Form = useForm<IForm>({
    mode: "onChange",
    defaultValues: {
      confirmation: "",
      password: "",
    },
  });
  const { handleSubmit, getValues, } = Form;
  const onSubmit: SubmitHandler<IForm> = (data) => {
    confirmRestore({
      email: searchParams.get("email") || "",
      token: searchParams.get("token") || "",
      password: data.password
    })
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login")

      toast({
        description: "Пароль успешно изменен",
        status: "success",
        isClosable: true,
      })
    }
  }, [isSuccess, navigate, toast])

  const passwordValidation: Validate<string, FieldValues> = () => {
    if (getValues("password") !== getValues("confirmation")) return "Пароли не совпадают";
    return;
  };

  return (
    <LogoWrapper>
      <SimpleFormWrapper>
        <FormProvider {...Form}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "contents" }}>
            <VStack alignItems={"start"} gap={5} pb={10}>
              <Text variant={"heading"}> Восстановление пароля </Text>
              <Text variant={"descriptor"}> Заполните поле ниже, чтобы сохранить новый пароль </Text>
            </VStack>
            <VStack alignItems={"start"} gap={5}>

              <CustomInput
                label={"Новый пароль"}
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

              <Button mt={3.5} variant={"large"} type={"submit"}>
                Сбросить пароль
              </Button>
              <Center w={"full"}>
                <HStack>
                  <Text> У Вас уже есть аккаунт? </Text>
                  <Link onClick={() => navigate("/login")}>Войти</Link>
                </HStack>
              </Center>
            </VStack>
          </form>
        </FormProvider>
      </SimpleFormWrapper>
    </LogoWrapper>
  );
}
