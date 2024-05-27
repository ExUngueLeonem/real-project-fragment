import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

interface IProps extends IconButtonProps{
  onClick?: () => void
}

export const PlusButton = (
  {
    onClick,
    ...props
  }: IProps) => {

  return (
    <IconButton
      variant={"outline"}
      onClick={onClick}
      icon={<AiOutlinePlus />}
      {...props}
    />
  );
};