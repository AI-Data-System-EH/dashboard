import React, { type ReactNode } from "react";

import { useAppSelector } from "../stores/hooks";


interface Props {
  children: ReactNode;
}

export default function LayoutGuest({ children }: Props): JSX.Element {
  const darkMode = useAppSelector((state) => state.style.darkMode);

  return (
    <div className={ darkMode ? "dark" : "" }>
      <div className="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">{ children }</div>
    </div>
  );
}
