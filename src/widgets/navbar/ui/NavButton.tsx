import { NavLink } from "react-router-dom";
import { Box, Button, ButtonProps, Center, Icon } from "@chakra-ui/react";
import { IconProps } from "@chakra-ui/icons";
import { IconType } from "react-icons";

interface IProps {
  label: string;
  to: string,
  icon?: (({ w, h, ...props }: IconProps) => JSX.Element) | IconType;
  isOpen: boolean;
  buttonProps?: ButtonProps;
  iconProps?: IconProps;
}

const NavButton = ({ to, icon, label, isOpen, buttonProps, iconProps }: IProps) => {
  return (
    <NavLink to={to} style={{
      padding: "0 10px",
      width: "100%",
    }}>
      <Button
        w={"full"}
        h={"40px"}
        p={2}
        justifyContent={"start"}
        backgroundColor={"inherit"}
        fontSize={"sm"}
        _hover={ {
          backgroundColor: "primary_btn_active"
        }}
        {...buttonProps}
      >
        <Box>
          <Center w={"30px"}>
            <Icon
              m={"8px"}
              h={"14px"}
              as={icon}
              //fill={"white"}
              {...iconProps}
            />
          </Center>
        </Box>
        {isOpen && label}
      </Button>
    </NavLink>
  );
};

export default NavButton;