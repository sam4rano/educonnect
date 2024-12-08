"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

interface ProvidersProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
