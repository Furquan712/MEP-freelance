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

export default function ContactSec() {
  return (
    <Box sx={styles.main}>
      <Container sx={styles.contactform}>
      <Grid gap={2} columns={[2, "1fr 1fr"]} sx={styles.grid}>
        <Box>
          <Heading as="h1" sx={styles.h1}>
            | Connect With Us
          </Heading>
          <Box sx={styles.salesBox}>
            <Heading as="h5">Enquiry </Heading>
            <Box sx={styles.box}>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                  display: "block",
                  margin: "8px 0px",
                }}
              >
                <FaEnvelope /> enquiry@urbansciencemep.com

                {/* <FaPhone /> +971 543565450 */}
              </Text>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                <FaPhone /> 0509418224
              </Text>
            </Box>
            <hr></hr>
          </Box>
          <Box sx={styles.salesBox}>
            <Heading as="h5">Procurement Team
</Heading>
            <Box sx={styles.box}>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                  display: "block",
                  margin: "8px 0px",
                }}
              >
                <FaEnvelope /> urbansciencemep@gmail.com

                {/* <FaPhone /> +971 543565450 */}
              </Text>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                <FaPhone /> +971 543565450
              </Text>
            </Box>
            <hr></hr>
          </Box>
          <Box sx={styles.salesBox}>
            <Heading as="h5">General Enquiry</Heading>
            <Box sx={styles.box}>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                <FaPhone /> +971 543565450
              </Text>
            </Box>
            <hr></hr>
          </Box>
        </Box>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="username">Name</Label>
          <Input name="username" id="username" mb={3} />
          <Label htmlFor="password">Email</Label>
          <Input type="email" name="password" id="password" mb={3} />

          <Label htmlFor="sound">Country</Label>
          <Select name="sound" id="sound" mb={3}>
            <option>UAE</option>
            <option>India</option>
            <option>etc</option>
          </Select>
          <Label htmlFor="password">Contact number</Label>
          <Input type="tel" name="password" id="password" mb={3} />
          <Label htmlFor="password">Expected date</Label>
          <Input type="date" name="password" id="password" mb={3} />
          <Label htmlFor="comment">Message</Label>
          <Textarea name="comment" id="comment" rows={6} mb={3} />
          {/* <Flex mb={3}>
            <Label>
              <Radio name="letter" /> Alpha
            </Label>
            <Label>
              <Radio name="letter" /> Bravo
            </Label>
            <Label>
              <Radio name="letter" /> Charlie
            </Label>
          </Flex> */}
          {/* <Label>Slider</Label>
          <Slider mb={3} /> */}
          <Button>Submit</Button>
        </Box>
      </Grid>
    </Container>
    </Box>
    
  );
}

const styles = {
  main:{
    backgroundColor:"white",
  },
  h1: {
    fontSize: "30px",
  },
  h3: {},
  contactform: {
    maxWidth: 600,
    padding: "150px 0 120px 0",
  },
  salesBox: {
    padding: "10px 20px",
  },
  box:{
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
