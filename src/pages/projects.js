import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { FaTimes } from "react-icons/fa";
import ProjectSec from "sections/project-sec";
import { Container, Box, Heading, Card, Image, Text } from "theme-ui";
import { useState } from "react";
import Img from '../assets/dubai_mall.webp';

export default function Project() {
  const [popUp, setpopUp] = useState(false);
  const [popUp2, setpopUp2] = useState(false);
  const [popUp3, setpopUp3] = useState(false);

  const reset = () => {
    setpopUp(false);
    setpopUp2(false);
    setpopUp3(false);
  };
  return (
    <ThemeProvider theme={theme}>
      {popUp || popUp2 || popUp3 ? (
        <Container sx={style.complete}>
          <Container sx={style.head}>
            <Box>
              <Heading as="h1">{popUp && "Mechanical"}{popUp2 && "Electrical"}{popUp3 && "Plumbing"}</Heading>
            </Box>
            <Box onClick={reset}>
              <FaTimes />
            </Box>
          </Container>
          <Container sx={style.body}>
            <Box sx={style.collectiveCard}>
              <Card sx={style.card}>
                <Image src={Img} />
                <Text>Mall</Text>
              </Card>
              <Card sx={style.card}>
                <Image src={Img} />
                <Text>Mall</Text>
              </Card>
              <Card sx={style.card}>
                <Image src={Img} />
                <Text>Mall</Text>
              </Card>
              <Card sx={style.card}>
                <Image src={Img} />
                <Text>Mall</Text>
              </Card>
              <Card sx={style.card}>
                <Image src={Img} />
                <Text>Mall</Text>
              </Card>
            </Box>
          </Container>
          <Container></Container>
        </Container>
      ) : (
        <StickyProvider>
          <Layout>
            <SEO title="Startup Landing 004" />
            <ProjectSec
              setpopUp={setpopUp}
              setpopUp2={setpopUp2}
              setpopUp3={setpopUp3}
            />
          </Layout>
        </StickyProvider>
      )}
    </ThemeProvider>
  );
}

const style = {
  complete:{
    padding: "40px",
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card:{
    width:["500px","316px"],
    margin:"20px",
  },
  collectiveCard:{
    display: "flex",
    flexWrap: "wrap",
  }
};
