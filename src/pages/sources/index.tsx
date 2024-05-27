import { PageWithHeading } from "shared/ui";
import { SourcesTable } from "widgets/sources";
import { SourcesProvider } from "features/sources";
import { Box } from "@chakra-ui/react";

export function SourcesPage() {
  return (
    <>
      <SourcesProvider>
        <PageWithHeading label={"Источники данных"}>
          <Box w={"full"} p={"0 20px"}>
            <Box>
              <SourcesTable />
            </Box>
          </Box>
        </PageWithHeading>
      </SourcesProvider>
    </>
  );
}
