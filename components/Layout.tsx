import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Volfy TS" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <header>
      <nav>
        <h1>Pokemon List</h1>
      </nav>
    </header>
    <main>
      <div>{children}</div>
    </main>
  </div>
);

export default Layout;
