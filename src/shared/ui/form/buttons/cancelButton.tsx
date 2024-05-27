import React from "react";
import { Box, ButtonProps, IconButton } from "@chakra-ui/react";
import { LiaTimesSolid } from "react-icons/lia";

export const CancelButton = (
  {
    w = "48px",
    h = "48px",
    ...buttonProps
  }: ButtonProps) => {

  return (
    <Box
      w={w}
      h={h}
    >
      <IconButton
        w={w}
        h={h}
        backgroundColor={"error"}
        aria-label={"cancel"}
        icon={<LiaTimesSolid />}
        // onClick={() => fetchSourceModal.onClose()}
        {...buttonProps}
      />
    </Box>
  );
};