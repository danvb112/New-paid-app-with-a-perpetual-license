import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { UploadedFile } from "../components/FileList/FileList";

import { appReducer, TAction } from "./reducer";

type Categories = {
  label: string;
  value: string;
  checked: boolean;
};

type Specification = {
  id: number; value: string
}

export interface InitialStateProps {
  appBuild: string;
  appCategories: Categories[];
  appDescription: string;
  appDocumentationURL: Specification;
  appERC: string;
  appId: string;
  appInstallationGuideURL: Specification;
  appProductId: number;
  appWorkflowStatusInfo: string;
  appLogo: UploadedFile;
  appLicense: string;
  appLicensePrice: string;
  appName: string;
  appNotes: string;
  appStorefrontImages: UploadedFile[];
  appType: Specification;
  appUsageTermsURL: Specification;
  appVersion: string;
  buildZIPFiles: UploadedFile[];
  catalogId: number;
  dayTrial: string;
  priceModel: string;
  publisherWebsiteURL: Specification;
  supportURL: Specification;
}

const initialState = {
  appBuild: "upload",
  appLicense: "perpetual",
  appType: { value: "saas" },
  dayTrial: "no",
  priceModel: "paid",
} as InitialStateProps;

interface AppContextProps extends Array<InitialStateProps | Function> {
  0: typeof initialState;
  1: React.Dispatch<
    React.ReducerAction<React.Reducer<InitialStateProps, TAction>>
  >;
}

const AppContext = createContext({} as AppContextProps);

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [state, dispatch] = useReducer<
    React.Reducer<InitialStateProps, TAction>
  >(appReducer, { ...initialState });

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
