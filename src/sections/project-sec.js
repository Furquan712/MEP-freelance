import { Container, Box, Heading, Text, Flex } from "theme-ui";
import Img from "../assets/elec.jpg";
import { Image } from "theme-ui";
import Mall from "../assets/dubai_mall.webp";
import Metro from "../assets/dubai-metro.jpg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import Plumber from "assets/plumber.png";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectSec() {
  const [popUp, setPopUp] = useState(false);
  const [popUp2, setPopUp2] = useState(false);
  const [popUp3, setPopUp3] = useState(false);

  return (
    <>
      {popUp ? (
        <>
        <Box sx={style.blackBG}></Box>
        <Box sx={style.popUp}>
          <Container sx={{padding:"20px",borderRadius:"6px"}}>
            <Box sx={style.flexBox}>
              <Heading as="h1">Mechanical</Heading>
              <Heading sx={style.close}>
                <FaTimes onClick={()=>{setPopUp(false)}}/>
              </Heading>
            </Box>
          </Container>
          <Container>
            <div class="container">
              <div style={style.anotherContainer}>
                <ul class="cards" style={style.cards}>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Box>
        </>
      ) : null}
      {popUp2 ? (
        <>
        <Box sx={style.blackBG}></Box>
        <Box sx={style.popUp}>
          <Container sx={{padding:"20px",borderRadius:"6px"}}>
            <Box sx={style.flexBox}>
              <Heading as="h1">Electric</Heading>
              <Heading sx={style.close}>
                <FaTimes onClick={()=>{setPopUp2(false)}}/>
              </Heading>
            </Box>
          </Container>
          <Container>
            <div class="container">
              <div style={style.anotherContainer}>
                <ul class="cards" style={style.cards}>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Box>
        </>
      ) : null}
      {popUp3 ? (
        <>
        <Box sx={style.blackBG}></Box>
        <Box sx={style.popUp}>
          <Container sx={{padding:"20px",borderRadius:"6px",borderRadius:"6px"}}>
            <Box sx={style.flexBox}>
              <Heading as="h1">Plumbing</Heading>
              <Heading sx={style.close}>
                <FaTimes onClick={()=>{setPopUp3(false)}}/>
              </Heading>
            </Box>
          </Container>
          <Container>
            <div class="container">
              <div style={style.anotherContainer}>
                <ul class="cards" style={style.cards}>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                  <li class="card" style={style.card}>
                    <div style={style.cardContent}>
                      <div>
                        <div style={style.imageBG}>
                          <img
                            src={Plumber}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 style={style.cardHeading}>Electrical Works</h3>
                      </div>
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <p style={style.cardPara}>
                          afas oadh aaojdha ahuidgad ahsoudb afas oadh aaojdha
                          ahuidgad ahs
                        </p>
                      </div>
                      <h2>
                        <FiArrowRight />
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Box>
        </>
      ) : null}
      <Image src={Img} sx={style.Image} />
      <Container sx={style.contactform}>
        <div sx={style.circle}></div>
        <Heading sx={style.h1}>USBC MEP</Heading>
      </Container>
      <Container sx={style.center}>
        <Heading sx={style.projectHeading} as="h1">
          Our Projects
        </Heading>
        <div sx={style.anotherFlex} style={{ display: "flex" }}>
          <Heading sx={style.mainText} as="h2" onClick={() => setPopUp(true)}>
            M
          </Heading>
          <Heading
            sx={{ ...style.mainText, backgroundImage: `url(${Mall})` }}
            as="h2"
            onClick={() => setPopUp2(true)}
          >
            E
          </Heading>
          <Heading
            sx={{ ...style.mainText, backgroundImage: `url(${Metro})` }}
            as="h2"
            onClick={() => setPopUp3(true)}
          >
            P
          </Heading>
        </div>
      </Container>
    </>
  );
}

const style = {
  h1: {
    fontSize: ["43px", "90px"],
    color: "#F4F8FC",
    letterSpacing: "0.13em",
    fontWeight: "700",
  },
  popUp: {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "90vw",
    backgroundColor: "white",
    transform: "translate(-50%, -50%)",
  },
  flexBox:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  blackScreen: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    zIndex: "999999",
    margin: "0",
    padding: "0",
  },
  close:{
    cursor: "pointer",
  },
  anotherFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mainText: {
    fontSize: ["50px", "433px"],
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    "-webkit-background-clip": "text",
    backgroundClip: "text",
    color: "transparent",
    cursor: "pointer",
  },
  circle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background:
      "radial-gradient(70% 70% at 70% 64.8%, rgba(92, 118, 255, 0.6) 0%, rgba(255, 255, 255, 0.5) 100%)",
    position: "absolute",
    bottom: "150px",
    left: "0",
  },
  projectHeading: {
    fontSize: ["42px", "133px"],
    color: "#353535",
  },
  contactform: {
    padding: "0",
    display: "flex",
    justifyContent: "center",
  },
  blackBG:{
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    opacity: "0.8",
  },
  salesBox: {
    padding: "10px 20px",
  },
  Image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    margin: "100px 0 50px 0",
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
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  cards: {
    display: "grid",
    margin: "10px",
    gridAutoColumns: ["100%", "50%"],
    gridColumnGap: "20px",
    gridAutoFlow: "column",
    padding: "25px 10px",
    listStyle: "none",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
  },
  anotherContainer: {
    maxWidth: "1400px",
    padding: "0 15px",
    margin: "0 auto",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  imageBG: {
    backgroundColor: "#EBEDFF",
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  button: {
    backgroundColor: "#93C1F9",
    width: "100%",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  image: {
    borderRadius: "16px 16px 0 0",
  },
  cardText: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#596AFF",
    width: "100%",
    textAlign: "center",
    borderRadius: "0 0px 4px 4px",
    fontSize: "18px",
    color: "white",
    fontWeight: "bold",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    minWidth: "400px",
    minHeight: "430px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 15%)",
    scrollSnapAlign: "start",
    transition: "all 0.2s",
  },
  cardHeading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#272D4E",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  cardPara: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#7D7987",
    margin: "0",
  },
  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
