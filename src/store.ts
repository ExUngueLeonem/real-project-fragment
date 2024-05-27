import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { UserReducer as user } from "entities/user";
import { CompaniesReducer as companies, } from "entities/companies";
import { SourcesReducer as sources, } from "entities/sources";
import { TasksReducer as tasks } from "entities/tasks";
import { ApplicationReducer as application } from "entities/application";

import { rtkQueryErrorLogger } from "features/errorLogger";

import { ApiMiddleware, ApiReducer as api } from "api";

const persistDefaults = {
  debug: process.env.NODE_ENV !== "production",
  storage,
};

const reducer = combineReducers({
  application: persistReducer(
    {
      ...persistDefaults,
      key: "application",
    },
    application
  ),
  user: persistReducer(
    {
      ...persistDefaults,
      key: "user",
    },
    user
  ),
  companies: persistReducer(
    {
      ...persistDefaults,
      key: "companies",
    },
    companies
  ),
  sources: persistReducer(
    {
      ...persistDefaults,
      key: "sources",
      blacklist: ["list"],
    },
    sources
  ),
  tasks: persistReducer(
    {
      ...persistDefaults,
      key: "tasks",
    },
    tasks
  ),
  api,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      ApiMiddleware,
      rtkQueryErrorLogger
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Persistor for using local storage
export const persistor = persistStore(store);
