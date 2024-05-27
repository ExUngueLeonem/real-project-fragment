import { Navigate } from "react-router-dom";

//редирект из корня
export function EntryPage() {
  return <Navigate to={"/sources"} />;
}