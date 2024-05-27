import React, { HTMLProps, useEffect, useRef } from "react";
import { Box, Center } from "@chakra-ui/react";
import classNames from "classnames";

export function IndeterminateCheckbox(
  {
    indeterminate,
    className = "",
    ...rest
  }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  const onRefClick = (e: React.MouseEvent<HTMLDivElement>) => {
    ref.current.click();
    e.stopPropagation();
  };

  //увеличение кликабельной зоны чекбокса
  return (
    <Center position={"relative"} w={"full"}>
      <Box
        p={6}
        position={"absolute"}
        left={"50%"} top={"50%"}
        transform={"translate(-50%, -50%)"}
        onClick={(e) => onRefClick(e)}
      >
      </Box>
      <input
        type="checkbox"
        ref={ref}
        className={classNames(className, "cursor-pointer")}
        {...rest}
      />
    </Center>
  );
}