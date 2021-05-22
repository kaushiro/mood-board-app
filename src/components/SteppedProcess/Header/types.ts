import { Title, IStep } from "../types";

export interface ISteppedProcessHeader {
  title?: Title;
  steps: IStep[];
  isLoading?: boolean;
}
