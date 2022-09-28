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
    <Container sx={styles.contactform}>
      <Grid gap={2} columns={[2, "1fr 1fr"]} sx={styles.grid}>
        <Box>
          <Heading>Connect With Us</Heading>
          <Box sx={styles.salesBox}>
            {/* <Heading as="h5">Enquiry</Heading> */}
            <Text
              sx={{
                fontSize: 2,
                fontWeight: "bold",
                display: "block",
                margin:"8px 0px"
              }}
            >
              <FaEnvelope/> enquiry@gmail.com
              {/* <FaPhone /> +91 1234567890 */}
            </Text>
            <Text
              sx={{
                fontSize: 2,
                fontWeight: "bold",
                display: "block",
              }}
            >
              <FaPhone /> +91 1234567890
            </Text>
          </Box>
        </Box>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" mb={3} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" mb={3} />
          <Box>
            <Label mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
          <Label htmlFor="sound">Sound</Label>
          <Select name="sound" id="sound" mb={3}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
          <Label htmlFor="comment">Comment</Label>
          <Textarea name="comment" id="comment" rows={6} mb={3} />
          <Flex mb={3}>
            <Label>
              <Radio name="letter" /> Alpha
            </Label>
            <Label>
              <Radio name="letter" /> Bravo
            </Label>
            <Label>
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>
          <Label>Slider</Label>
          <Slider mb={3} />
          <Button>Submit</Button>
        </Box>
      </Grid>
    </Container>
  );
}

const styles = {
  contactform: {
    maxWidth: 600,
    padding: "150px 0 120px 0",
  },
  salesBox: {
    padding: "20px",
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
    container: {
      display: "flex",
    },
  },
};
