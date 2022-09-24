import SectionHeader from 'components/section-header';
import { Container, Grid, Card,Image,Text, Button, Box } from 'theme-ui'
import { FaArrowCircleRight } from 'react-icons/fa';
import MallOfEmirates from 'assets/Mall-Of-The-Emirates.jpg';


export default function OurProjects(){
    return(
        <section style={styles.coreFeature}>
            <Container >
                <SectionHeader 
                    title="Our Projects"
                />
                <Grid gap={2} columns={[2, '1fr 1fr']}>
                    <Card style={styles.card}>
                        <Image style={styles.image} src={MallOfEmirates} alt="Mall of Emirates" />
                        <Text style={styles.cardText}>Mall Of Emirates</Text>
                    </Card>
                    <Card style={styles.card}>
                        <Image src={MallOfEmirates} alt="Mall of Emirates" />
                        <Text style={styles.cardText}>Mall Of Emirates</Text>
                    </Card>
                    <Card style={styles.card}>
                        <Image src={MallOfEmirates} alt="Mall of Emirates" />
                        <Text style={styles.cardText}>Mall Of Emirates</Text>
                    </Card>
                    <Card style={styles.card}>
                        <Image src={MallOfEmirates} alt="Mall of Emirates" />
                        <Text style={styles.cardText}>Mall Of Emirates</Text>
                    </Card>
                </Grid>
                <Box>
                <Button style={styles.button}>Find Out More <FaArrowCircleRight style={{margin:'0 6px'}} /> </Button>
                </Box>
                
            </Container>
        </section>
    )
    
}



const styles = {
    coreFeature: {
      py: [0, null, null, 2, null, 7],
      position: 'relative',
      margin: '40px 0',
      '&::before': {
        position: 'absolute',
        content: '""',
        top: ['auto', null, null, '50%'],
        bottom: ['100px', 0, null, 'auto'],
        left: 0,
        background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
        height: [350, 550, '60%'],
        width: '50%',
        zIndex: -1,
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        transform: ['translateY(0)', null, null, 'translateY(-50%)'],
      },
    },
    containerBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: ['column', null, null, 'row'],
    },
    thumbnail: {
      pl: [0, 5, 0, null, 7, 95],
      pr: [0, 5, null, null, null, 75, 95],
      order: [2, null, null, 0],
    },
    contentBox: {
      width: ['100%', 450, 550, 350, 500, 570],
      pr: [0, null, 'auto', null, null, 80],
      pl: 'auto',
      flexShrink: 0,
    },
    button:{
        backgroundColor:'#93C1F9',
        width: '100%',
        borderRadius:'6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingTop: {
      pl: [0, null, null, null, '35px', null, '55px', 6],
      mb: [3, null, null, null, 1],
      textAlign: ['center', null, null, 'left'],
    },
    grid: {
      p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
    },
    image:{
        borderRadius:'16px 16px 0 0'
    },
    card: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection:'column',
      
      p: [
        '0 17px 20px',
        null,
        null,
        '0 0 20px',
        '20px 15px 17px',
        null,
        null,
        '25px 30px 23px',
      ],
      backgroundColor: 'white',
      borderRadius: '10px',
      transition: 'all 0.3s',
      width: ['100%', '85%', null, '100%'],
      mx: 'auto',
      '&:hover': {
        boxShadow: [
          '0px 0px 0px rgba(0, 0, 0, 0)',
          null,
          null,
          null,
          '0px 8px 24px rgba(69, 88, 157, 0.07)',
        ],
      },
    },
    cardText:{
        textAlign:'center',
        padding:'10px',
        backgroundColor: '#596AFF',
        width:'100%',
        textAlign:'center',
        borderRadius: '0 0px 4px 4px',
        fontSize:'18px',
        color:'white',
        fontWeight:'bold',
    },
    img: {
      width: ['50px', null, '55px'],
      height: 'auto',
      flexShrink: 0,
      mr: [3, 4],
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      mt: '-5px',
      title: {
        fontSize: 3,
        color: 'heading_secondary',
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