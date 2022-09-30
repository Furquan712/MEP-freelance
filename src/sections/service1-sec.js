/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row } from "theme-ui";
import {
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

export default function Service1() {
  return (
    <Container sx={styles.service1}>
      <Box>
           <h1>MEP Building Services </h1>
           <p>
           Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab, Abu Dhabi Investment Council, Dubai Fountain, Atlantis The Palm and Dubai Airport Concourse 4.
           </p>
      </Box>
      <Box> 
        <h1>Mechanical</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab, 
        </p>
        <br/>
        <h3>HVAC</h3>
        <h3>Plumbing</h3>
      </Box>
      <Box>
      <h1>Electricals</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab,         </p>
        <br/>
        <h3>LV network</h3>
        <h3>BLV</h3>
      </Box>
         
    </Container>
  );
}

const styles = {
  service1: {
    maxWidth: 600,
    padding: "150px 0 120px 0",
  },
  
  grid:{
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    }
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
     
  },
};
