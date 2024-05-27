import { IconButton } from "@chakra-ui/react";
import { CTable, TableBottomPanel, WithLoader } from "shared/ui";
import { useGetSources } from "entities/sources";
import { DeleteSourceModal, FetchSourceModal, SourceModal, useSourcesContext } from "features/sources";
import { AiOutlinePlus } from "react-icons/ai";

//module
import { useSourceTable } from "../model/useSourceTable";

export function SourcesTable() {
  const { table } = useSourceTable();
  const { deleteModal, selectedSource, sourceModal, onOpenSourceForm, fetchSourceModal } = useSourcesContext();
  const { isLoading } = useGetSources();

  return (
    <>
      <WithLoader isLoading={isLoading} h={"80vh"}>
        <CTable
          table={table}
          isFooterDisable={true}
          footerAddon={
            <TableBottomPanel>
              <IconButton
                variant={"outline"} aria-label={"add source"}
                onClick={() => onOpenSourceForm?.()}
                icon={<AiOutlinePlus/>} />
            </TableBottomPanel>
          }
        />
      </WithLoader>

      {sourceModal &&
        <SourceModal disclosure={sourceModal} source={selectedSource} />
      }

      {deleteModal &&
        <DeleteSourceModal />
      }

      {fetchSourceModal &&
        <FetchSourceModal />
      }
    </>
  );
}
