import { CustomInput } from "shared/ui";

export function CompanyInputGroup({isDisabled = false}: {isDisabled?: boolean}) {
  return (
    <>
      <CustomInput
        variant={"md"}
        isDisabled={isDisabled}
        name={"name"}
        label={"Название Вашей компании (ООО, ИП, ФИО)"}
        registerOptions={{ required: "Обязательное поле", maxLength: {value: 250, message: "Не более 250 символов"} }}
      />

      {/*<CustomInput*/}
      {/*  isDisabled={isDisabled}*/}
      {/*  name={"tin"}*/}
      {/*  label={"ИНН"}*/}
      {/*  registerOptions={{ required: "Обязательное поле", maxLength: {value: 10, message: "Не более 10 символов"} }}*/}
      {/*/>*/}
    </>
  );
}