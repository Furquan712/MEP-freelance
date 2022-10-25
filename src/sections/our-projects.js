import SectionHeader from "components/section-header";
import { Container, Button, Box, Flex, Card, Image } from "theme-ui";
import { FaArrowCircleRight } from "react-icons/fa";
import MallOfEmirates from "assets/emax dubai.jpg";
import Palm from "assets/softel.jpg";
import Shopping from "assets/shopping-center.jpg";
import  Gym from "assets/Gym.jpg";
import Airport from "assets/Gym.jpg";
import img2 from "assets/img4dubaimall.jpg";
import img3 from "assets/img5emax.jpeg";
import img4 from "assets/img6jumeriah.jpg";
import img5 from "assets/img7carefour.jpg";
import img6 from "assets/img8gym.png";
import img7 from "assets/img9.jpg";
import img8 from "assets/img10.jpg";

export default function OurProjects() {
  const data = [
    {
      id: 1,
      imgSrc: img3,
      altText: "Mall Of Emirates",
    },
    {
      id: 2,
      imgSrc: img2,
      altText: "Palm Jumeirah",
    },
    {
      id: 3,
      imgSrc: img7,
      altText: "gym",
    },
    {
      id: 4,
      imgSrc: img8,
      altText: "Shoping",
    },
    {
      id: 5,
      imgSrc: img4,
      altText: "Dubai Airport",
    },
  ];

  return (
    <section style={styles.coreFeature}>
      <SectionHeader title="Projects" />
      <Flex style={styles.flex}>
        <Card sx={styles.specialCard}>
          <Image src={data[0].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[0].altText}</h3>
          </Box>
        </Card>
        <Card sx={{ ...styles.specialCard }}>
          <Image src={data[1].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        <Card sx={styles.specialCard}>
          <Image src={data[2].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[2].altText}</h3>
          </Box>
        </Card>
        <Card sx={{ ...styles.specialCard}}>
          <Image src={data[3].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
      </Flex>
      <Box style={styles.buttonDiv}>
        <Button style={styles.button}>
          Find Out More <FaArrowCircleRight style={{ margin: "0 6px" }} />{" "}
        </Button>
      </Box>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
    backgroundImage: 
 "url('https://media.istockphoto.com/photos/industrial-welder-with-torch-in-big-hall-welding-metal-profiles-picture-id1303602869?k=20&m=1303602869&s=612x612&w=0&h=ZckhxyIZOPIj7FZFhtMfjX3vSnHUk20JykqL8H2IcB8=')",
    padding: "60px 0",
    margin: "0 0 40px 0",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  AnimationOne:{

  },
  AnimationTwo:{

  },
  AnimationThree:{

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
  flex: {
    flexWrap: "nowrap",
    margin: "40px 0px",
    overflowX:"auto",
    padding: "20px",

    "&::WebkitScrollbar": {
      background: "transparent",
    }
  },
  specialCard: {
    backgroundColor: "#fff",
    flex:  "0 0 auto",
    textAlign: "center",
    alignItems: "center",
    margin: "20px",
    width: "400px",
    display: "inline-block",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.3s ease-in-out",
    },
    "@media screen and (max-width: 768px)": {
      width: "250px",
    }
  },

  specialCardImage: {
    width: "90%",
    transform: "translateY(-10%)",
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    borderRadius: "6px",
    display: "flex",
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
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",

    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
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
