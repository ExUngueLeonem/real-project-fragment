import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { flexRender, Row, Table as RTable } from "@tanstack/react-table";
import { Box, Table, TableContainer, TableContainerProps, Tbody, Td, Tfoot, Th, Thead, Tr, useColorMode, useTheme } from "@chakra-ui/react";

import { hideScrollCss } from "shared/assets";

import { ReactNode } from "react";

export function CTable<T>(
  {
    table,
    variant,
    isFooterDisable = false,
    onRowClick,
    footerAddon,
    headerAddon,
    ...props
  }: {
    table: RTable<T>;
    variant?: string,
    onRowClick?: (row: Row<T>) => void;
    isFooterDisable?: boolean;
    footerAddon?: ReactNode;
    headerAddon?: ReactNode;
  } & TableContainerProps) {

  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (

    <TableContainer
      {...props}
      overflowY={"auto"}
      maxH={"full"}
      css={
        hideScrollCss(theme?.semanticTokens?.colors?.main_bg?.["_" + colorMode])
      }
    >
      <Table
        textAlign={"left"}
        position={"relative"}
      >
        <Thead
          zIndex={1}
          position={"sticky"}
          top={0}
        >
          {headerAddon &&
            <Tr>
              <Th
                p={0}
                colSpan={table?.getAllColumns()?.length}
                whiteSpace={"pre-wrap"}
                wordBreak={"break-word"}
              >
                {headerAddon}
              </Th>
            </Tr>
          }

          {table.getHeaderGroups().map((hg) => (
            <Tr key={hg.id}>
              {hg.headers.map((header) => (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  {...{
                    style: {
                      width: header.getSize() || "auto",
                    },
                  }}
                >
                  <Box display={"inline"}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Box>
                  {header.column.getCanSort() ?
                    <Box display={"inline"} ml={"3px"}>
                      <>
                        {header.column.getIsSorted() === false && <TriangleUpIcon opacity={0} />}
                        {header.column.getIsSorted() === "desc" && <TriangleDownIcon />}
                        {header.column.getIsSorted() === "asc" && <TriangleUpIcon />}
                      </>
                    </Box>
                    :
                    <></>
                  }
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}
                onClick={() => onRowClick?.(row)}
                cursor={onRowClick ? "pointer" : "inherit"}
                _hover={onRowClick ? { backgroundColor: "primary_th_bg" } : {}}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
        <Tfoot
          // zIndex={1}
          position={"sticky"}
          bottom={0}
        >
          {!isFooterDisable &&
            <>
              {table.getFooterGroups().map((footerGroup) => {
                return (
                  <Tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => {
                      return (
                        <Th
                          key={header.id}

                          borderBottom={"1px"}
                          borderColor={"inherit"}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                        </Th>
                      );
                    })}
                  </Tr>
                );
              })}
            </>
          }

          {footerAddon &&
            <Tr>
              <Th
                p={0}
                colSpan={table?.getAllColumns()?.length}
              >
                {footerAddon}
              </Th>
            </Tr>
          }
        </Tfoot>
      </Table>
    </TableContainer>
  );
}