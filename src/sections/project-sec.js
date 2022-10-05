/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row } from "theme-ui";
import Img from "../assets/elec.jpg";
import { Image } from "theme-ui";
import Mall from "../assets/dubai_mall.webp";
import Metro from '../assets/dubai-metro.jpg'

export default function ProjectSec() {
  return (
    <>
      <Image src={Img} sx={styles.Image} />
      <Container sx={styles.contactform}>
            <div sx={styles.circle}></div>
            <Heading sx={styles.h1}>USBC MEP</Heading>
      </Container>
      <Container sx={styles.center}>
        <Heading sx={styles.projectHeading} as="h1" >Our Projects</Heading>
        <div sx={styles.anotherFlex}>
          <Heading sx={{...styles.mainText}} as="h2" >M</Heading>
          <Heading sx={{...styles.mainText,backgroundImage:`url(${Mall})`}} as="h2" >E</Heading>
          <Heading sx={{...styles.mainText,backgroundImage:`url(${Metro})`}} as="h2" >P</Heading>
        </div>
        
      </Container>
    </>
  );
}

const styles = {
  h1: {
    fontSize: "90px",
    color: "#F4F8FC",
    letterSpacing: "0.13em",
    fontWeight: "700",
  },
  center:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
  },
  anotherFlex:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  mainText:{
    fontSize: "433px",
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    "-webkit-background-clip": "text",
    backgroundClip: "text",
    color: "transparent",
  },
  circle:{
    width:'50px',
    height:'50px',
    borderRadius:'50%',
    background: "radial-gradient(70% 70% at 70% 64.8%, rgba(92, 118, 255, 0.6) 0%, rgba(255, 255, 255, 0.5) 100%)",
    position:"absolute",
    bottom:"150px",
    left:"0"
  },
  projectHeading: {
    fontSize: "133px",
    color: "#353535"
  },
  contactform: {
    padding: "0",
    display: 'flex',
    justifyContent: 'center',
  },
  salesBox: {
    padding: "10px 20px",
  },
  Image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    margin:"100px 0 50px 0"
  },
  box: {
    padding: "10px 20px",
  },
  grid: {
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "white",
    container: {
      display: "flex",
    },
  },
};
