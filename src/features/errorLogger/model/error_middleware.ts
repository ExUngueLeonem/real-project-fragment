import { createStandaloneToast } from "@chakra-ui/react";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { CompaniesActions } from "entities/companies";
import { SourcesActions } from "entities/sources";
import { UserActions } from "entities/user";

import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { api as serverApi } from "api";

const { toast } = createStandaloneToast();

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      if (Number.isInteger(action.payload?.status)) {
        switch (action.payload.status) {
          case 401:
            api.dispatch(CompaniesActions.reset());
            api.dispatch(SourcesActions.reset());
            api.dispatch(UserActions.logout());
            api.dispatch(serverApi.util.resetApiState());
            break;
          default:
            toast({
              title: `Ошибка запроса (${action.payload.status})`,
              description:
                action.payload?.data?.detail ?? "Общая ошибка запроса",
              status: "error",
              position: "bottom-right",
              isClosable: true,
            });
            break;
        }
      } else {
        toast({
          title: action.payload?.data?.title ?? "Ошибка запроса",
          description: action.payload?.data?.detail ?? "Общая ошибка запроса",
          status: "error",
          position: "bottom-right",
          isClosable: true,
        });
      }
    }

    return next(action);
  };
