import { AppState } from ".";

declare module "react-redux" {
  interface DefaultRootState extends AppState {}
}
