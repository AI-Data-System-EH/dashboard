import React, { type ReactNode } from "react";


interface Props {
  noPadding?: boolean;
  className: string;
  children?: ReactNode;
}

export default function CardBoxComponentBody({ noPadding = false, className, children }: Props): JSX.Element {
  return <div className={ `flex-1 ${noPadding ? "" : "p-6"} ${className}` }>{ children }</div>;
}
