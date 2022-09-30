/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row } from "theme-ui";
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

export default function Service1() {
  return (
    <Container sx={styles.service1}>
      <Box>
           <h1 sx={styles.mainheading} >MEP Building Services </h1>
           <p>
           Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab, Abu Dhabi Investment Council, Dubai Fountain, Atlantis The Palm and Dubai Airport Concourse 4.
           </p>
      </Box>
      <Box> 
        <h1 sx={styles.heading}>Mechanical</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab, 
        </p>
        <br/>
        <Link>HVAC</Link>
        <Link>Plumbing</Link>
      </Box>
      <Box>
      <h1 sx={styles.heading}>Electricals</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab,         </p>
        <br/>
        <Link>LV network</Link>
        <Link>BLV</Link>
      </Box>
         
    </Container>
  );
}

const styles = {
    mainheading:{
        color:"#596AFF",
    },
    heading:{
        backgroundColor: "#596AFF",
        color: "white",
    },
  service1: {
    maxWidth: 600,
    padding: "150px 0 120px 0",
  },
  
  grid:{
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    }
  },
  
};
