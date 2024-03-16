import React, { type ReactNode } from "react";


interface Props {
  className: string;
  children?: ReactNode;
}

export default function CardBoxComponentFooter({ className, children }: Props): JSX.Element {
  return <footer className={ `p-6 ${className}` }>{ children }</footer>;
}
