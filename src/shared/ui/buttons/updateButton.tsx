import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";

interface IProps extends IconButtonProps {
  onClick?: () => void
}

export const UpdateButton = (
  {
    onClick,
    ...props
  }: IProps) => {

  return (
    // <IconButton
    //   variant={"outline_error"}
    //   icon={<DeleteIcon />}
    //   onClick={onClick}
    //   {...props}
    // />

    <IconButton
      variant={"outline"}
      icon={<AiOutlineEdit />}
      onClick={onClick}
      {...props}
    />
  );
};