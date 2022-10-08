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
      <Container sx={styles.section}>
        <Flex sx={styles.flexbox}>
          <Box sx={styles.text}>
            <h2>VISION & MISSION</h2>
            <h3>Vision</h3>
            <p>
              VISION & MISSIONVISIONSobha Group aspires to become the most
              trusted and respected real estate organisation both regionally and
              globally.MISSIONBy pioneering innovative global projects and
              transforming perceptions of quality, we work to challenge existing
              norms and standards to ultimately enrich communities and even
              society at large.
            </p>
            <h3>Mission</h3>
            <p>
              VISION & MISSIONVISIONSobha Group aspires to become the most
              trusted and respected real estate organisation both regionally and
              globally.MISSIONBy pioneering innovative global projects and
              transforming perceptions of quality, we work to challenge existing
              norms and standards to ultimately enrich communities and even
              society at large.
            </p>
          </Box>
          <Image src={CoreFeatureThumb} alt="Thumbnail" sx={styles.image} />
        </Flex>
        <Flex sx={styles.flexbox}>
          <Image src={CoreFeatureThumb} alt="Thumbnail" sx={styles.image} />
          <Box sx={styles.text}>
            <h2>PHILOSOPHY</h2>
            <h3>Excelance</h3>
            <p>
              PHILOSOPHYEXCELLENCESobha Group’s foundations have been built on
              excellence. From design to engineering, development and interiors,
              everything has to be of the highest possible standard at all
              times. These standards are embodied by everyone associated with
              Sobha
            </p>
            <h2>Responsiblity</h2>
            <p>
              <p>
                PHILOSOPHYEXCELLENCESobha Group’s foundations have been built on
                excellence. From design to engineering, development and
                interiors, everything has to be of the highest possible standard
                at all times. These standards are embodied by everyone
                associated with Sobha Group. The eminence of our work can be
                revealed by our
              </p>
            </p>
          </Box>
        </Flex>
      </Container>
      <Grid sx={styles.gridform}>
        <Box
          as="form"
          sx={styles.aboutform}
          onSubmit={(e) => e.preventDefault()}
        >
          <Flex sx={styles.flexx}>
            <Input name="username" sx={styles.spacing} id="username" mb={3} placeholder="Name"/>
            <Input type="email" sx={styles.spacing} placeholder="Email" id="password" mb={3} />
            <Input type="tel" sx={styles.spacing} placeholder="Mobile Number" id="password" mb={3} />
            <Select sx={styles.extra} name="sound" id="sound" mb={3}>
              <option>India</option>
              <option>UAE</option>
              <option>Saudi Arab</option>
            </Select>
          </Flex>
          <Button styles={{justifyContent:"centre"}}>Submit</Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default aboutsec;

const styles = {
  main: {
    backgroundColor: "#7d89f2",
  },
  section: {
    padding: "150px 0 120px 0",
  },
  text: {
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  image: {
    width: "200%",
  },
  spacing:{
    margin: ["20px 0","20px"],
    maxWidth: "300px",
  },
  extra:{
    margin: "20px 0 20px 0",
  },

  flexx:{
    flexWrap: "wrap",
  },
  flexbox: {
    paddingTop:"50px",
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
  aboutform:{
padding:"100px",
  },
  aboutforminner: {
    padding: "20px",
  },
};
