import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useGetCompaniesQuery } from "api";
import { useAppSelector } from "shared/model";
import { trimmedString } from "shared/lib";
import { usePickCompany } from "features/companies";

export function CompanyMenuButton() {
  const company = useAppSelector(state => state.companies.current);
  const { data, isLoading } = useGetCompaniesQuery();

  const { onPickCompany, currentCompanyId } = usePickCompany();
  return (
    <>
      {/*<Box cursor={"pointer"}>*/}
      {/*  <Link to={"/companies"}>*/}
      {/*    <Text fontSize={"sm"} lineHeight={"1.35"} color={"primary_btn"}>*/}
      {/*      <ChevronDownIcon opacity={0} /> Предприятие: {company?.name}*/}
      {/*    </Text>*/}
      {/*  </Link>*/}
      {/*</Box>*/}

      <Menu>
        <MenuButton
          as={Button}
          variant={"a"}
          p={0}
          alignItems={"end"}
          lineHeight={"1.35"}
          rightIcon={<ChevronDownIcon />}
          isLoading={isLoading}
          h={"auto"}
        >
          Предприятие: {company?.name ? trimmedString(company?.name, 25) : ""}
        </MenuButton>
        <MenuList zIndex={50} maxW={"400px"}>
          {data?.map(item =>
            <MenuItem
              key={item.id}
              isDisabled={item.id === currentCompanyId}
              onClick={() => onPickCompany(item)}
            >
              {item.name}
            </MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
}