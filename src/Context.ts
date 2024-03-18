/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import { defaultResponse } from "./utils/api";

const defaultValue = {
  website: {
    link: "",
    isValid: true,
  },
  onChangeURL: (_: string) => {},
  onSubmit: () => {},
  loading: false,
  pa11yResults: defaultResponse,
};

export const AnalizeContext = createContext(defaultValue);
