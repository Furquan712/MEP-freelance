/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row } from "theme-ui";
import {
    Button,
  Image,
} from "theme-ui";
import Img from '../assets/elec.jpg';

import {BsGear} from 'react-icons/bs'
import { GiElectric } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
export default function Service1() {
  return (
    <>
    <Container>
       <Image src={Img} sx={styles.Image}/>
    <Container sx={styles.service1}>
      <Box>
           <h1 sx={styles.mainheading} >MEP Building Services </h1>
           <p>
           Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab, Abu Dhabi Investment Council, Dubai Fountain, Atlantis The Palm and Dubai Airport Concourse 4.
           </p>
      </Box>
      <Box> 
        <h1 sx={styles.heading}><BsGear sx={styles.icons}/> Mechanical</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab, 
        </p>
        <br/>
        <Button><BsGear sx={styles.icons}/>HVAC</Button>
        <br/>
        <br/>
        <Button><BsGear sx={styles.icons}/>Plumbing</Button>
      </Box>
      <Box>
      <h1 sx={styles.heading}><GiElectric sx={styles.icons}/> Electricals</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab,         </p>
        <br/>
        <Button><BsGear sx={styles.icons}/>LV network</Button>
        <br/>
        <br/>
        <Button><BsGear sx={styles.icons}/>BLV</Button>
      </Box>
      <Box>
      <h1 sx={styles.heading}><GiElectric sx={styles.icons}/> Electricals</h1>
        <p>
        Since its establishment in 1978, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Burj Al Arab,         </p>
        <br/>
        <Button><BsGear sx={styles.icons}/>LV network</Button>
        <br/>
        <br/>
        <Button><BsGear sx={styles.icons}/>BLV</Button>
      </Box>
         
    </Container>
    </Container>
   
    </>
  );
}

const styles = {
    mainheading:{
        color:"#596AFF",
    },
    heading:{
        backgroundColor: "#596AFF",
        color: "white",
        display:'flex',
        alignItems:'center',
    },
    icons:{
      margin: '4px 10px'
    },
    Image: {
      paddingTop:"50px",
      width: "100%",
      height: "400px",
      objectFit: "cover",
      margin:"100px 0 50px 0"
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
