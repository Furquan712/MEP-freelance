/** @jsx jsx */
import { jsx, Container, Flex, Button, Heading } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo-dark.svg';
import LogoWhite from 'assets/logo.svg';
import BlackLogo from 'assets/blackLogo.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
// import { BsTelephoneInboundFil } from 'react-icons/bs';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.patti} className={className}>
        <Flex sx={styles.flex}>
          <a as="h4" href=" tel:123456789" sx={styles.head}>
            <FaPhone sx={styles.icons}/>
            0509418224
          </a>
          <a as="h4" href="mailto:mep@gmail.com" sx={styles.head}>
            <FaEnvelope sx={styles.icons}/>
            urbansciencemep@gmail.com
          </a>
        </Flex>
      </header>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === "sticky" ? BlackLogo : BlackLogo} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>
          
          {/* <h3><BsTelephoneInboundFill/></h3> */}
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
            backgroundColor="#596AFF"
            color="white"
          >
            Enquire Now
          </Button>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  patti: {
    textAlign: "right",
    backgroundColor:"white",
    padding: ["0","0px 20px"],
  },
  flex:{
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icons:{
    color: "#596AFF",
    margin: "0 10px",
  },
  head:{
    margin: "0 10px",
    display: "flex",
    alignItems: "center",
  },
  header: {
    color: "black",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: "25px",
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
      ".donate__btn": {
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          backgroundColor: "white",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "400",
      px: 25,
      cursor: "pointer",
      lineHeight: "1.2",
      "&.active": {
        color: "secondary",
      },
    },
  },
};
