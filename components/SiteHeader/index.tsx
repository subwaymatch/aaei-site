import React, { useState, useEffect, forwardRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SiteHeader.module.scss";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FiLogIn, FiHexagon } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiBook3Line } from "react-icons/ri";
import MenuButton from "components/SiteHeader/MenuButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { desktop } from "constants/media-query-strings";
import Tippy from "@tippyjs/react";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { supabaseClient } from "lib/supabase/supabaseClient";
import { VscLinkExternal } from "react-icons/vsc";

const menuItems = [
  {
    href: "/",
    label: "Modules",
    iconChild: <RiBook3Line className={styles.reactIcon} />,
    isActive: (asPath: string) => asPath.startsWith("/modules"),
  },
  {
    href: "https://canvas.illinois.edu/courses/827",
    label: (
      <>
        <span>Canvas</span>
        <VscLinkExternal className={styles.reactIcon} />
      </>
    ),
    iconChild: <FiHexagon className={styles.reactIcon} />,
    isActive: (asPath: string) => asPath.startsWith("/assignments"),
  },
];

const SignInButton = forwardRef((props, ref: React.Ref<HTMLDivElement>) => (
  <Link href="/login">
    <div ref={ref} className={styles.signInButton}>
      <span className={styles.label}>Sign In</span>
      <HiOutlineMail className={styles.reactIcon} />
    </div>
  </Link>
));

const SignOutButton = () => {
  const router = useRouter();

  return (
    <a
      className={styles.signOutButton}
      onClick={async () => {
        await supabaseClient.auth.signOut();
        toast.success("Successfully signed out, bye!");
        router.push("/");
      }}
    >
      <span className={styles.label}>Sign Out</span>
      <FiLogIn className={styles.reactIcon} />
    </a>
  );
};

const UserMenu = () => {
  const isScreenDesktop = useMediaQuery(desktop);
  const { user } = useSupabaseAuth();

  return (
    <Row className="align-items-middle">
      <Col>
        <div className={styles.userMenu}>
          {user ? (
            <SignOutButton />
          ) : (
            <Tippy
              disabled={!isScreenDesktop}
              content="Requires @illinois email"
              placement="bottom"
              className="tippy"
              theme="light"
            >
              <SignInButton />
            </Tippy>
          )}
        </div>
      </Col>
    </Row>
  );
};

const HeaderDesktopMenu = () => {
  const router = useRouter();

  return (
    <Row className={clsx(styles.mainMenu, "align-items-center")}>
      {menuItems.map((item) => (
        <Col key={item.href}>
          <Link href={item.href}>
            <a
              className={clsx(styles.menuLink, {
                [styles.isActive]: item.isActive
                  ? item.isActive(router.asPath)
                  : false,
              })}
            >
              <span className={styles.label}>{item.label}</span>
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

const HeaderMobileMenu = () => (
  <Row className={clsx(styles.mobileMenu)}>
    {menuItems.map((item) => (
      <Col xs={12} key={item.href}>
        <Link href={item.href}>
          <a className={styles.menuLink}>
            <span className={styles.label}>{item.label}</span>
            {item.iconChild && (
              <span className={styles.iconWrapper}>{item.iconChild}</span>
            )}
          </a>
        </Link>
      </Col>
    ))}

    <Col xs={12}>
      <UserMenu />
    </Col>
  </Row>
);

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScreenDesktop = useMediaQuery(desktop);

  useEffect(() => {
    if (isScreenDesktop && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isScreenDesktop]);

  return (
    <>
      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            e.preventDefault();

            setIsMenuOpen(false);
          }}
        />
      )}

      <header className={styles.header}>
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="d-none d-md-block">
              <HeaderDesktopMenu />
            </Col>

            <Col
              md={{
                span: 2,
                offset: 6,
              }}
              className="d-none d-md-block"
            >
              <UserMenu />
            </Col>

            <Col xs={6} className="d-md-none">
              <div className={styles.menuBtnWrapper}>
                <MenuButton
                  isOpen={isMenuOpen}
                  onClick={() => {
                    setIsMenuOpen((v) => !v);
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenuWrapper}
            initial="closed"
            animate="open"
            exit={{
              height: 0,
              opacity: 0,
            }}
            variants={{
              open: {
                height: "auto",
                opacity: 1,
              },
              closed: { height: 0, opacity: 0 },
            }}
          >
            <Container>
              <HeaderMobileMenu />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
