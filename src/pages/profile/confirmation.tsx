import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Text, useToast } from "@chakra-ui/react";
import { useConfirmEmailMutation } from "api";

import { useQuery } from "shared/lib";

//страничка подтверждает адрес почты и перебрасывает
export function ConfirmationPage() {
  const toast = useToast();
  const params = useQuery();
  const [confirm, { isSuccess }] = useConfirmEmailMutation();
  const navigate = useNavigate();
  const doConfirm = useCallback(() => {
    const email = params.get("email");
    const token = params.get("token");

    if (email && token) {
      confirm({ email, token })
        .unwrap()
        .then(() =>
          toast({
            title: "Успех",
            description: "Адрес электронной почты успешно подтвержден",
            status: "success",
            duration: 10000,
            isClosable: true,
          })
        )
        .catch(() =>
          toast({
            title: "Ошибка",
            description: "Ошибка подтверждения адреса электронной почты",
            status: "success",
            isClosable: true,
          })
        );
    }
  }, [params, confirm, toast]);

  useEffect(() => {
    doConfirm()
  }, [doConfirm])

  useEffect(() => {
    if (isSuccess) {
      navigate("/login")
    }
  }, [isSuccess, navigate])


  return (
    <Center height={"full"}>
      <Text variant={"descriptor"}>Подтверждаем адрес</Text>
    </Center>
  );
}
