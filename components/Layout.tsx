import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Todo app" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <Container>{children}</Container>
  </div>
);

export default Layout;
