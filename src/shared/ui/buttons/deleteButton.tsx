import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface IProps extends IconButtonProps{
  onClick?: () => void
}

export const DeleteButton = (
  {
    onClick,
    ...props
  }: IProps) => {

  return (
    <IconButton
      variant={"outline_error"}
      icon={<DeleteIcon />}
      onClick={onClick}
      {...props}
    />
  );
};