/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row, Image } from "theme-ui";
import CoreFeatureThumb from "assets/about-1.jpg";
import Img from "../assets/elec.jpg";

import {
  Link,
  Flex,
  Grid,
  Button,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
} from "theme-ui";

function aboutsec() {
  return (
    <Box sx={styles.main}>
      <Container sx={styles.section} style={{margin:"60px"}}>
        <h1 style={{fontSize:"50px", textAlign:"center"}}>About Us</h1>
        <Flex sx={styles.flexbox}>
          <Box sx={styles.text}>
            <p>
              A Leading MEP company in Dubai is Urban Science contracting MEP
              companies in Dubai. For all of your MEP requirements, there is a
              one-stop shop in Dubai which is Urban Science Contracting. Our
              goal is to offer a good service at a very affordable price because
              we are industry specialists with 18+ years of experience. Founded
              in Dubai. The goal of Urban Science contracting is to provide the
              Dubai, UAE with top-notch mechanical, electrical, and plumbing
              MEP. With immense satisfaction, Urban Science Contracting would
              like to present us as one of the reputable MEP companies in Dubai,
              United Arab Emirates that provides best MEP Services in Dubai.
              Urban Science contracting in Dubai, UAE mostly concentrated on MEP
              services such as mechanical, electrical and plumbing. We have a
              vast experience in the facility management as well as your
              community management. At Urban Science we are 24/7 working for
              managing your communities so that you can spend your team
              peacefully. Best facility management company in Dubai.
            </p>
          </Box>
          <Box>
          <Image src={CoreFeatureThumb} alt="Thumbnail" sx={styles.image} />
          </Box>
        </Flex>
        <Box sx={styles.quotes}>
          <h1>Our Vision</h1>
          <h3>
            “We want to work till the point, that a person in UAE won’t ask for
            Facility management but URBAN SCIENCE.’’
          </h3>
        </Box>

        <Box sx={styles.quotes}>
          <h1>CEO's Message</h1>
          <h3>“I have collected the UAE’S industry problems for almost 18 years and named it URBAN SCIENCE”</h3>
        </Box>
      </Container>
      <Grid sx={styles.gridform}>
        <Box sx={styles.headBox}>
          <h1 sx={styles.head}>Register your interest</h1>
        </Box>
        <Box
          as="form"
          sx={styles.aboutform}
          onSubmit={(e) => e.preventDefault()}
        >
          <Flex sx={styles.flexx}>
            <Input
              name="username"
              sx={styles.spacing}
              id="username"
              mb={3}
              placeholder="Name"
            />
            <Input
              type="email"
              sx={styles.spacing}
              placeholder="Email"
              id="password"
              mb={3}
            />
            <Input
              type="tel"
              sx={styles.spacing}
              placeholder="Mobile Number"
              id="password"
              mb={3}
            />
          </Flex>
          <Button sx={styles.formBtn}>Submit</Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default aboutsec;

const styles = {
  main: {
    backgroundColor: "white",
  },
  section: {
    padding: "150px 0 120px 0",
  },
  text:{
marginTop:"0px",
  },
  image: {
    width: "600%",
  },
  spacing: {
    margin: ["20px 0", "20px"],
    maxWidth: "300px",
  },
  extra: {
    margin: "20px 0 20px 0",
  },

  flexx: {
    flexWrap: "wrap",
  },
  headBox: {
    padding: ["0 20px", "0 70px"],
    position: "relative",
  },
  head: {
    fontSize: "30px",
    position: "absolute",
    bottom: "-85px",
    color: "#7d89f2",
    textAlign:"center",
    zIndex: "1",
  },
  
  Image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    margin: "100px 0 50px 0",
  },
  flexxbox: {
    display: "flex",
    padding: "60px",
  },
  quotes: {
    marginTop: "50px",
    textAlign:"center",
  },
  aboutform: {
    position: "relative",
    padding: ["20px", "70px"],
    border: "2px solid #fff",
    margin: "40px",
  },
  aboutforminner: {
    padding: "20px",
  },
  formBtn: {
    position: "absolute",
    bottom: "-25px",
    width: ["100px", "300px"],
    left: "35vw",
  },
};
