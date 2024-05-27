import React from "react";

import { PlusButton } from "shared/ui";

//module
import { useCompaniesContext } from "../../model/context/useCompaniesContext";

export const CreateCompanyButton = () => {
  const { onOpenCompanyForm } = useCompaniesContext();

  return (
    <PlusButton
      aria-label={"add company"}
      onClick={() => onOpenCompanyForm?.()}
    />
  );
};