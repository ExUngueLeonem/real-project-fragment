import { ReactNode } from "react";
import { CenterProps } from "@chakra-ui/react";
import { Loader } from "./Loader";

interface IProps extends CenterProps{
  children: ReactNode;
  isLoading: boolean;
}

export const WithLoader = ({ children, isLoading, ...styleProps }: IProps) => {
  return (
    <>
      {isLoading ?
        <Loader {...styleProps}/>
        :
        <>
          {children}
        </>
      }
    </>
  );
};