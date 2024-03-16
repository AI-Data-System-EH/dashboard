import React, { type ReactNode } from "react";

import { containerMaxW } from "../config";


interface Props {
  children: ReactNode;
}

export default function SectionMain({ children }: Props): JSX.Element {
  return <section className={ `p-6 ${containerMaxW}` }>{ children }</section>;
}
