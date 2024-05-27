import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { ColumnDef, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Box } from "@chakra-ui/react";

import { appSettings } from "shared/lib";
import { ISource, useGetSources } from "entities/sources";

//module
import { SourceButtonPanel } from "../ui/sourceButtonPanel";

export const useSourceTable = () => {
  const { data: sources } = useGetSources();

  const navigate = useNavigate();

  const openFilterChangeHandler = useCallback((source?: ISource) => {
    navigate(`/sources/filter/${source?.id}`)
  }, [navigate]);

  //тип, название, дата обновления, состояние
  const columns = useMemo(
    (): ColumnDef<ISource>[] => [
      {
        id: "type", accessorKey: "type",
        header: "Тип",
        size: 220,
        accessorFn: (row) => appSettings.source.get(row.type)?.name ?? "Не известный тип"
      },
      {
        id: "name", accessorKey: "name",
        header: "Название",
        size: 800,
      },
      {
        id: "updated",
        accessorKey: "updated",
        header: "Дата обновления",
        size: 220,
        cell: ({ row }) => {
          if (row.original.updated) return moment(row.original.updated).local().format("DD.MM.YYYY HH:mm:ss")
          if (row.original.type === 512 /*ФНС*/) return "-";
          // return <CProgress />
          return "-"
        }
      },
      {
        id: "broken",
        accessorKey: "broken",
        header: "Cостояние",
        size: 220,
        accessorFn: (row) => row.broken ? "Ошибка" : "Нормальное",
      },
      {
        id: "controls",
        accessorKey: "controls",
        header: "  ",
        size: 50,
        enableSorting: false,
        cell: (cell) => {
          return (
            <Box>
              {cell.row.original.type !== 512 &&
                <SourceButtonPanel source={cell.row.original} />
              }
            </Box>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data: sources || [],
    enableRowSelection: true,
    manualPagination: true,
    defaultColumn: {
      minSize: 50, //enforced during column resizing
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row, _, parent) => {
      return parent ? [parent.id, row.id].join("_") : row.id;
    },
  });

  return {
    table
  }
}