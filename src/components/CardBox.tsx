import React, { type ReactNode } from "react";

import CardBoxComponentBody from "./CardBoxComponentBody";
import CardBoxComponentFooter from "./CardBoxComponentFooter";


interface Props {
  rounded?: string;
  flex?: string;
  className?: string;
  hasComponentLayout?: boolean;
  hasTable?: boolean;
  isHoverable?: boolean;
  isModal?: boolean;
  children: ReactNode;
  footer?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export default function CardBox({
  rounded = "rounded-2xl",
  flex = "flex-col",
  className = "",
  hasComponentLayout = false,
  hasTable = false,
  isHoverable = false,
  isModal = false,
  children,
  footer,
  onClick
}: Props): JSX.Element {
  const componentClass = [
    "bg-white flex",
    className,
    rounded,
    flex,
    isModal ? "dark:bg-slate-900" : "dark:bg-slate-900/70"
  ];

  if (isHoverable) {
    componentClass.push("hover:shadow-lg transition-shadow duration-500");
  }

  return React.createElement(
    "div",
    { className: componentClass.join(" "), onClick },
    hasComponentLayout
      ? (
          children
        )
      : (
          <React.Fragment>
            <CardBoxComponentBody noPadding={ hasTable } className={ className }>
              { children }
            </CardBoxComponentBody>
            { footer && <CardBoxComponentFooter className={ className }>{ footer }</CardBoxComponentFooter> }
          </React.Fragment>
        )
  );
}
