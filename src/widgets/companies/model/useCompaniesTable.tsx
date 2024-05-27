import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ColumnDef, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { HStack, IconButton } from "@chakra-ui/react";
import { useGetCompaniesQuery } from "api";
import { ICompany } from "entities/companies";
import { PickCompanyButton, useCompaniesContext } from "features/companies";

import { BiShare } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

function useCompaniesTable() {

  const {companyModal, setSelectedCompany, memberModal} = useCompaniesContext();

  const navigate = useNavigate();
  const { data: companies } = useGetCompaniesQuery();

  const onOpenCompanyForm = useCallback((company?: ICompany) => {
    companyModal?.onOpen();
    setSelectedCompany?.(company);
  }, [companyModal, setSelectedCompany]);


  const onOpenMemberModal = useCallback((company: ICompany) => {
    memberModal?.onOpen();
    setSelectedCompany?.(company);
  }, [memberModal, setSelectedCompany]);

  const navigateToMembersPage = useCallback((company?: ICompany) => {
    navigate(`/companies/${company?.id}/members`)
  }, [navigate]);

  const columns = useMemo(
    (): ColumnDef<ICompany>[] => [

      {
        id: "name", accessorKey: "name",
        header: "Название компании (ООО, ИП, ФИО)",
        size: 5000,
      },
      {
        id: "controls",
        accessorKey: "controls",
        header: "",
        size: 50,
        enableSorting: false,
        cell: (cell) => {
          return (
            <HStack justifyContent={"end"} gap={4}>
              <IconButton
                variant={"outline"} aria-label={"change"}
                icon={<AiOutlineEdit/>}
                onClick={() => onOpenCompanyForm(cell.row.original)}
              />
              <IconButton
                variant={"outline"} aria-label={"change"}
                icon={<BiShare/>}
                onClick={() => onOpenMemberModal(cell.row.original)}
              />

              <PickCompanyButton
                company={cell.row.original}
                minW={"160px"}
              >
                Выбрать
              </PickCompanyButton>

            </HStack>
          );
        },
      },
    ],
    [onOpenCompanyForm, onOpenMemberModal],
  );

  const table = useReactTable({
    columns,
    data: companies || [],
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

export default useCompaniesTable;