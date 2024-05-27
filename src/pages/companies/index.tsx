import { Box } from "@chakra-ui/react";

import { PageWithHeading, TableBottomPanel } from "shared/ui";
import { CompaniesProvider, CreateCompanyButton } from "features/companies";
import { CompaniesTable } from "widgets/companies";

export function CompaniesPage() {
  return (
    <CompaniesProvider>
      <PageWithHeading label={"Предприятия +"}>
        <Box w={"full"} h={"full"} p={"0 20px"}>
          <Box>
              <CompaniesTable
                footerAddon={
                  <TableBottomPanel>
                    <CreateCompanyButton />
                  </TableBottomPanel>
                }
              />
          </Box>
        </Box>
      </PageWithHeading>
    </CompaniesProvider>
  );
}