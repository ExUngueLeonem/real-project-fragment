import { ReactNode } from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

import {
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
  Tooltip
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { PiWarningCircleBold } from "react-icons/pi";

interface IProps extends InputProps {
  name: string;
  label?: string;
  type?: "password" | "email" | "date" | "text" | "";
  variant?: string;
  inputRightElement?: ReactNode;
  registerOptions?: RegisterOptions<FieldValues>,
  helperText?: string;
  w?: string;
  isDisabled?: boolean;
  isNoRightElement?: boolean;
  isNoErrorMessage?: boolean;
  hasErrorIcon?: boolean;
}

export function CustomInput(
  {
    w = "full",
    name,
    label,
    type,
    variant = "primary",
    inputRightElement,
    registerOptions,
    helperText,
    isDisabled = false,
    isNoRightElement = false,
    isNoErrorMessage = false,
    hasErrorIcon = false,
    ...inputProps
  }: IProps) {

  const { formState, register, getFieldState, setValue } = useFormContext();
  const { errors, dirtyFields } = formState;
  const error = getFieldState(name, formState)?.error
  const errorBorder = error && "error";
  const greenBorder = dirtyFields[name] && !error && "ok";
  const fieldBorderColor = errorBorder || greenBorder || "inherit";
  return (
    <FormControl isInvalid={!!errors?.[name]} w={w}>
      {label && <FormLabel> <Text variant={"form_input_label"}> {label} </Text> </FormLabel>}
      <InputGroup>
        <Input
          isDisabled={isDisabled}
          variant={variant}
          borderColor={fieldBorderColor}
          type={type}
          {...register(name, {
            ...registerOptions,
            onChange: (e) => {
              registerOptions?.onChange?.(e)
              ||
              setValue(name, e.target.value)
            }
          })}
          {...inputProps}
        />
        {!isNoRightElement &&
          <>
            {inputRightElement ?
              <>{inputRightElement}</>
              :
              <InputRightElement h={"full"}>
                <Center>
                  {greenBorder &&
                    <CheckCircleIcon color={"ok"} />
                  }
                </Center>
              </InputRightElement>}
          </>
        }
      </InputGroup>
      {helperText &&
        <FormHelperText>
          <Text variant={"form_input_label"}>
            {helperText}
          </Text>
        </FormHelperText>
      }
      {!isNoErrorMessage &&
        <FormErrorMessage>
          {error && error?.message as string}
        </FormErrorMessage>
      }
      {hasErrorIcon &&
        error?.message &&
        <Tooltip label={error && error?.message as string}>
          <Center
            w={"18px"}
            h={"18px"}
            position={"absolute"} right={"5px"} top={"50%"} transform={"translateY(-50%)"}
          >
            <>
              <Icon
                boxSize={"18px"}
                size={"xl"}
                as={PiWarningCircleBold}
                color={"error"}
              />
            </>
          </Center>
        </Tooltip>
      }
    </FormControl>
  );
}