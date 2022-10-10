/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row } from "theme-ui";
import { Button, Image } from "theme-ui";
import Img from "../assets/elec.jpg";

import { BsGear } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
export default function Service1() {
  return (
    <>
      <Container>
        <Image src={Img} sx={styles.Image} />
        <Container sx={styles.service1}>
          <Box>
            <h1 sx={styles.mainheading}>MEP Building Services </h1>
            <p>
              URBAN SCIENCE is one of the leading MEP companies in Dubai, in
              electrical, mechanical, instrumentation and building services
              within Dubai. We help our customers with integrated engineering
              solutions that is comprised of design, procurement, construction,
              project management, commissioning and facilities management
              especially done according to clients’ requirements.
            </p>
          </Box>
          <Box>
            <h1 sx={styles.heading}>
              <BsGear sx={styles.icons} /> Mechanical
            </h1>
            <p>
              From last 18 years URBAN SCIENCE have consistently delivery best
              output in facility management and MEP work. Our core team has
              covered a large part in Dubai. Our consistent delivery and
              expertise make us one of the leading facility management company
              in Dubai.
            </p>
            <br />
            <Button sx={styles.btn}>
              <Box sx={styles.bgBtn}>
                <BsGear sx={styles.icons} />
              </Box>
              HVAC
            </Button>
             
            <Button sx={styles.btn}>
              <Box sx={styles.bgBtn}>
                <BsGear sx={styles.icons} />
              </Box>
              Plumbing
            </Button>
          </Box>
          <Box>
            <h1 sx={styles.heading}>
              <GiElectric sx={styles.icons} /> Electricals
            </h1>
            <p>
              Urban Science Contracting is prepared to take on all challenging
              Electrical works whether it is ELV, LV, IT Solutions, access
              control, CCTV, and Security. We are happy to inform you that we
              are a Dubai Municipality and DCD approved MEP company in Dubai.
            </p>
            <br />
            <Button sx={styles.btn}>
              <Box sx={styles.bgBtn}>
                <BsGear sx={styles.icons} />
              </Box>
              LV network
            </Button>
            
            <Button sx={styles.btn}>
              <Box sx={styles.bgBtn}>
                <BsGear sx={styles.icons} />
              </Box>
              BLV
            </Button>
          </Box>
        </Container>
      </Container>
    </>
  );
}

const styles = {
  mainheading: {
    color: "#596AFF",
  },
  heading: {
    backgroundColor: "#596AFF",
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#596AFF",
    fontSize: "20px",
  },
  bgBtn: {
    backgroundColor: "#596AFF",
    color: "white",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
  },
  icons: {
    margin: "6px",
  },
  Image: {
    paddingTop: "50px",
    width: "100%",
    height: "400px",
    objectFit: "cover",
    margin: "100px 0 50px 0",
  },
  service1: {
    maxWidth: 600,
    padding: "0px 0 120px 0",
  },

  grid: {
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
};
