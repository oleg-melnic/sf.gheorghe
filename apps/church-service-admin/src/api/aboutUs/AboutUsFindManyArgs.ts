import { AboutUsWhereInput } from "./AboutUsWhereInput";
import { AboutUsOrderByInput } from "./AboutUsOrderByInput";

export type AboutUsFindManyArgs = {
  where?: AboutUsWhereInput;
  orderBy?: Array<AboutUsOrderByInput>;
  skip?: number;
  take?: number;
};
