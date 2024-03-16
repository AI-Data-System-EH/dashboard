import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { gradientBgBase } from "../colors";
import CardBox from "../components/CardBox";
import SectionMain from "../components/SectionMain";
import { appTitle } from "../config";
import { type StyleKey } from "../interfaces";
import LayoutGuest from "../layouts/Guest";
import { useAppDispatch } from "../stores/hooks";
import { setDarkMode, setStyle } from "../stores/styleSlice";

function StyleSelect(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.style.scrollMargin = "1em";
    return () => {
      document.documentElement.style.scrollMargin = ""; // cleanup
    };
  }, []);

  dispatch(setDarkMode(false));

  const styles: StyleKey[] = [ "white", "basic" ];

  const router = useRouter();

  const handleStylePick = (e: React.MouseEvent, style: StyleKey): void => {
    e.preventDefault();

    dispatch(setStyle(style));

    void router.push("/dashboard");
  };

  return (
    <React.Fragment>
      <Head>
        <title>{ appTitle }</title>
      </Head>
      <div className={ `flex min-h-screen items-center justify-center ${gradientBgBase}` }>
        <SectionMain>
          <h1 className="mt-12 mb-3 text-center text-4xl font-bold text-white md:text-5xl lg:mt-0">
            Pick a style&hellip;
          </h1>
          <h2 className="mb-12 text-center text-xl text-white md:text-xl">
            Style switching with a single
            <code className="rounded bg-white/20 px-1.5 py-0.5">action() </code>
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
            {
              styles.map((style) => (
                <CardBox key={ style }
                         className="cursor-pointer bg-gray-50"
                         isHoverable={ true }
                         onClick={
                           (e) => {
                             handleStylePick(e, style);
                           }
                         }>
                  <div className="mb-3 md:mb-6">
                    <Image src={ `https://static.justboil.me/templates/one/small/${style}-v3.png` }
                           width={ 1280 }
                           height={ 720 }
                           alt={ style } />
                  </div>
                  <h1 className="text-xl font-black capitalize md:text-2xl">{ style }</h1>
                  <h2 className="text-lg md:text-xl">& Dark mode</h2>
                </CardBox>
              ))
            }
          </div>
        </SectionMain>
      </div>
      <div className={ `flex min-h-screen items-center justify-center ${gradientBgBase}` }>
        <SectionMain>
          <h1 className="mt-12 mb-3 text-center text-4xl font-bold text-white md:text-5xl lg:mt-0">
            Pick a style&hellip;
          </h1>
          <h2 className="mb-12 text-center text-xl text-white md:text-xl">
            Style switching with a single
            <code className="rounded bg-white/20 px-1.5 py-0.5">action() </code>
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
            {
              styles.map((style) => (
                <CardBox key={ style }
                         className="cursor-pointer bg-gray-50"
                         isHoverable={ true }
                         onClick={
                           (e) => {
                             handleStylePick(e, style);
                           }
                         }>
                  <div className="mb-3 md:mb-6">
                    <Image src={ `https://static.justboil.me/templates/one/small/${style}-v3.png` }
                           width={ 1280 }
                           height={ 720 }
                           alt={ style } />
                  </div>
                  <h1 className="text-xl font-black capitalize md:text-2xl">{ style }</h1>
                  <h2 className="text-lg md:text-xl">& Dark mode</h2>
                </CardBox>
              ))
            }
          </div>
        </SectionMain>
      </div>
    </React.Fragment>
  );
}

StyleSelect.getLayout = function getLayout(page: JSX.Element) {
  return <LayoutGuest>{ page }</LayoutGuest>;
};

export default StyleSelect;
