export {
  actions as SourcesActions,
  reducer as SourcesReducer,
} from "./model/slice/slice";
export type { IProperty, ISourcesState } from "./model/slice/types";
export { useGetSources } from "./model/hooks/useGetSource";
export { SourceSelect } from "./ui/SourceSelect";

export type { ISource } from "./model/types/sources";
export type { IDepartment } from "./model/types/department";
export type { ICheckedDepartmentsDict } from "./model/types/checkedDepartmentsDict";