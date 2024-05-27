import { ButtonProps } from "@chakra-ui/react";
import { UpdateButton } from "shared/ui";
import { ISource } from "entities/sources";

//module
import { useSourcesContext } from "../../model/context/useSourcesContext";

interface IProps extends ButtonProps {
  source: ISource;
}

export const UpdateSourceButton = ({source, ...buttonProps}: IProps) => {
  const { onOpenSourceForm } = useSourcesContext();

  return (
    <UpdateButton
      {...buttonProps}
      aria-label={"update source"}
      onClick={() => onOpenSourceForm?.(source)}
    />
  );
};