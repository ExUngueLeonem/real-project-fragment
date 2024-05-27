import { ReactNode, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Center, Grid, Spinner, Text, useDisclosure, VStack, } from "@chakra-ui/react";

import { useGetCompaniesQuery, useLazyGetSourcesQuery } from "api";
import { useAppDispatch, useAppSelector } from "shared/model";
import { Alert, NotificationModal } from "shared/ui";
import { useUser } from "entities/user";
import { CompaniesActions, ICompany } from "entities/companies";
import { LogoutContextProvider, LogoutModal } from "features/logout";

export function ProtectedLayout(
  {
    navbar
  }: { navbar?: ReactNode }) {
  const { current: user } = useUser();
  const { data: companies, ...getCompaniesHelpers } = useGetCompaniesQuery();
  const { current } = useAppSelector((store) => store.companies);
  const [getSources] = useLazyGetSourcesQuery();
  // const version = localStorage.getItem("app_version");

  const [isShowWizard, setIsShowWizard] = useState(false);

  useEffect(() => {
    if (current?.id) {
      // Update sources after company change
      getSources({ company: current?.id })
    }
  }, [current, getSources]);

  useEffect(() => {
    if (
      getCompaniesHelpers.isSuccess &&
      companies?.length === 0 &&
      !isShowWizard
    ) {
      setIsShowWizard(true);
    }
  }, [companies?.length, getCompaniesHelpers.isSuccess, isShowWizard])

  if (!user.isLogged) return <Navigate to={"/login"} state={{ from: window.location.pathname }} />;

  //companies - не пуст
  //если компания создана, но она не выбрана
  if (!current && companies?.length !== 0) return <CompanySelectModal />;

  return (
    <>
      <LogoutContextProvider>
        <>
          <Grid gridTemplateColumns={"auto 1fr"} height={"full"}>
            {navbar}
            <Box overflowY={"auto"} backgroundColor={"main_bg"}>
              <Outlet />
            </Box>
          </Grid>

          <LogoutModal />
        </>
      </LogoutContextProvider>
    </>
  );
}

function CompanySelectModal() {
  const d = useAppDispatch();
  const notificationModal = useDisclosure({ isOpen: true });

  const { isError, data, refetch, isLoading } = useGetCompaniesQuery();

  if (isError) {
    return (
      <Alert
        isOpen
        text="Ошибка загрузки организаций"
        label="Ошибка"
        onClosed={refetch}
      />
    );
  }

  return (
    <NotificationModal
      isClosable={false}
      disclosure={notificationModal}
      title={"Выбор предприятия"}
      body={
        isLoading ?
          <Center h={"100px"}>
            <Spinner size={"xl"} color={"primary_btn"} />
          </Center>
          :
          <CompanySelect
            items={data}
            onSelected={(c) => d(CompaniesActions.setCurrent(c))}
          />
      }
    />
  );
}

function CompanySelect(
  {
    items = [],
    onSelected,
  }: {
    items?: ICompany[];
    onSelected: (c: ICompany) => void;
  }) {
  return (
    <>
      <VStack>
        {items.map((item) => (
          <Box key={item.id}
               cursor={"pointer"}
               w={"full"}
               p={"15px 40px"}
               borderRadius={"5px"}
               _hover={{ backgroundColor: "main_bg" }}
               onClick={() => onSelected?.(item)}
          >
            <Text variant={"descriptor"}>
              {item.name}
            </Text>
          </Box>
        ))}
      </VStack>
    </>
  );
}