import React from "react";
import { Route, Routes } from "react-router-dom";

//system
import { ConfirmationPage } from "pages/profile/confirmation";
import { ConfirmResetPage } from "pages/confirmReset";
import { LoginPage } from "pages/login";
//pages
import { NotFoundPage } from "pages/system/not_found";
import { EntryPage } from "pages/system/entry";

import { SourcesPage } from "pages/sources";

import { CompaniesPage } from "pages/companies";

//components
import { ProtectedLayout } from "widgets/layouts";
import { Login, Register, Restore } from "widgets/enter";
import { Navbar } from "widgets/navbar";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}>
        <Route index element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="restore" element={<Restore />}/>
      </Route>

      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/reset" element={<ConfirmResetPage />} />
      <Route path="/" element={<EntryPage />} />
      <Route element={<ProtectedLayout navbar={<Navbar />} />}>

        <Route path="/companies">
          <Route index element={<CompaniesPage />} />
        </Route>

        <Route path="/sources">
          <Route index element={<SourcesPage />} />
        </Route>

      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};