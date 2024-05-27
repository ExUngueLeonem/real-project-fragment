import { Table } from "@tanstack/react-table";
import { Box, BoxProps, Button, HStack, Select, Spacer, Text, Tooltip } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export function Pager<T>(
  {
    table,
    total,
    page,
    pageSize,
    selectionCount,
    styleProps,
  }: {
    table: Table<T>;
    total: number;
    page: number;
    pageSize: number;
    selectionCount: number;
    styleProps?: BoxProps;
  }) {
  // const { t } = useTranslation();

  return (
    <HStack
      minH={"40px"}
      pl={"5px"} pr={"10px"}
      pt={2} pb={2}
      gap={"10px"}

      fontSize={"xs"}

      backgroundColor={"primary_th_bg"}

      //border
      borderRadius={"0 0 5px 5px"}
      borderWidth={"1px"}
      borderStyle={"solid"}
      borderTop={"none"}

      overflowY={"hidden"}

      {...styleProps}
      // css={hideScrollCss}
    >

      <Tooltip
        // label={        t("pager.previous")}
        label={"предыдущая страница"}
      >
        <Button
          variant={"a"}
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon h={6} w={6} />
          <Text color={"inherit"} fontSize={"xs"}>
            Назад
          </Text>
        </Button>
      </Tooltip>

      <HStack>
        <Text>Страница</Text>
        <Text fontWeight="bold" as="span">{page + 1}</Text>
        <Text>
          {/*{t("pager.of")}*/}
          из
        </Text>
        <Text fontWeight="bold" as="span">{table.getPageCount()}</Text>
      </HStack>


      <Tooltip
        // label={t("pager.next")}
        label={"следующая страница"}
      >
        <Button
          variant={"a"}
          // aria-label={t("pager.next")}
          aria-label={"следующая страница"}
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          <Text color={"inherit"} fontSize={"xs"}>
            Далее
          </Text>
          <ChevronRightIcon h={6} w={6} />
        </Button>
      </Tooltip>

      <HStack gap={"5px"} ml={"16px"}>
        <Text flexShrink="0">Показывать по:</Text>
        <Select
          fontSize={"xs"}
          backgroundColor={"primary_bg"}
          w={"fit-content"}
          value={pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
      </HStack>

      <Spacer />

      <Box>
        {selectionCount ? <Text color={"a"} as="span">Выбрано: {selectionCount} </Text> : <></>}
      </Box>

      <Box>
        <Text as="span">
          Всего элементов: {total}
          {/*{t("pager.total", { value: total })}*/}
        </Text>
      </Box>
    </HStack>
  );
}