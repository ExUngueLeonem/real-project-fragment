import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { ICompanyCreateModel, IEmailConfirmationModel, IRestoreConfirmationModel, ITokenResponse } from "./models";

import type { ISource } from "entities/sources";
import type { IUserLoginModel } from "entities/user";
import type { ICompany } from "entities/companies";

const baseUrl =
  import.meta.env.MODE == "development"
    // ? "http://localhost:5150"
    ? "http://localhost:3050"
    : window.location.origin;

export const api = createApi({
  reducerPath: "api",
  tagTypes: [
    "companies",
    "sources",
    "checkedDepartments",
    "departments",
    // "XML_document_details",
    "documentStatus",
    "documentStatusOverride",
    "documents",
    "cheques",

    "members",
    "overrides",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // if (user.isLogged) {
      //   headers.set("authorization", `Bearer ${user.token}`);
      // }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: "/api/v1/member",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation<ITokenResponse, IUserLoginModel>({
      query: (payload) => ({
        url: "token",
        method: "GET",
      }),
      transformResponse() {
        return { access: "string", }
      }
    }),
    confirmEmail: builder.mutation<void, IEmailConfirmationModel>({
      query: (payload) => ({
        url: "/api/v1/member/confirm",
        method: "POST",
        body: payload,
      }),
    }),
    sendRestorePasswordMail: builder.query<void, { email: string }>({
      query: ({ email }) => ({
        url: `/api/v1/Member/reset?email=${email}`,
      }),
      extraOptions: {
        origin: "asdasd"
      }
    }),
    confirmRestore: builder.mutation<void, IRestoreConfirmationModel>({
      query: (payload) => ({
        url: "/api/v1/Member/reset",
        method: "POST",
        body: payload,
      }),
    }),

    //companies
    getCompanies: builder.query<ICompany[], void>({
      query: () => ({
        url: "companies",
      }),
      providesTags: [{ type: "companies", id: "LIST" }],
    }),
    addCompany: builder.mutation<ICompany, ICompanyCreateModel>({
      query: (payload) => ({
        url: "companies",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "companies", id: "LIST" }],
    }),
    updateCompany: builder.mutation<ICompany, ICompany>({
      query: (payload) => ({
        url: `companies/${payload.id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "companies", id: "LIST" }],
    }),

    //sources
    getSources: builder.query<ISource[], { company: string }>({
      query: (payload) => ({
        url: "sources",
      }),
      providesTags: [{ type: "sources", id: "LIST" }],
    }),
    addSource: builder.mutation<ISource, Partial<ISource>>({
      query: (payload) => ({
        url: "sources",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "sources", id: "LIST" }],
    }),
    updateSource: builder.mutation<ISource, Partial<ISource>>({
      query: (payload) => ({
        url: `sources/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: [{ type: "sources", id: "LIST" }],
    }),
    deleteSource: builder.mutation<void, ISource>({
      query: (payload) => ({
        url: `/api/v1/sources/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "sources", id: "LIST" },
        { type: "documents", id: "LIST" }
      ],
    }),

  }),
});

export const {
  reducer,
  middleware,
  //user
  useRegisterMutation,
  useLoginMutation,
  useConfirmEmailMutation,
  //restorePassword
  useLazySendRestorePasswordMailQuery,
  useConfirmRestoreMutation,
  //companies
  useGetCompaniesQuery,
  useAddCompanyMutation,
  useUpdateCompanyMutation,
  //source
  useAddSourceMutation,
  useGetSourcesQuery,
  useUpdateSourceMutation,
  useLazyGetSourcesQuery,
  useDeleteSourceMutation,
} = api;