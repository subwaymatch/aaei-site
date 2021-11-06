import Head from "next/head";
import BootstrapBreakpoints from "components/debug/BootstrapBreakpoints";
import colors from "styles/colors.module.scss";
import SiteHeader from "components/SiteHeader";

interface ILayoutProps {
  children: React.ReactNode;
  excludeHeader?: boolean;
}

export default function Layout({ children, excludeHeader }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>
          Academy for Accountancy Excellence and Innovation Data Analytics
          Module
        </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={colors.blue}
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content={colors.blue} />
      </Head>

      {/* {process.env.NODE_ENV === "development" && <BootstrapBreakpoints />} */}

      {excludeHeader !== true && <SiteHeader />}

      {children}
    </>
  );
}
