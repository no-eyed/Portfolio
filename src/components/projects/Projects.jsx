import React, {useRef, useState} from 'react'
import './projects.css'

import Portfolio from '../../assets/portfolio.png'
import Frontend2 from '../../assets/weatherapp.png'
import Frontend3 from '../../assets/jobquesto.png'
import FullStack1 from '../../assets/icodeyoucode.png'
import FullStack2 from '../../assets/chatapp.png'
import AI1 from '../../assets/firedetector.jpg'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});


const FrontendProjcts = [
  {
    id: 1,
    image: Portfolio,
    title: 'Portfolio',
    github: 'https://github.com/no-eyed/Portfolio',
    demo: 'https://joboquesto.netlify.app/'
  },
  {
    id: 2,
    image: Frontend2,
    title: 'Weather App',
    github: 'https://github.com/no-eyed/Weather-App',
    demo: 'https://dribble.com/'
  },
  {
    id: 3,
    image: Frontend3,
    title: 'Job Questo',
    github: 'https://github.com/no-eyed/JobQuesto-Frontend',
    demo: 'https://joboquesto.netlify.app/'
  }
]

const FullstackProjects = [
  {
    id: 1,
    image: FullStack1,
    title: 'I Code, You Code',
    github: 'https://github.com/no-eyed/I-Code-You-Code-Fullstack',
    demo: 'https://icodeyoucode-fullstack.onrender.com'
  },
  {
    id: 2,
    image: FullStack2,
    title: 'Chat App',
    github: 'https://github.com/no-eyed/Chat-App',
    demo: 'https://dribble.com/shots/16673715-crypto-currency-dashboard-financial-visualization'
  }
]

const AIProjects = [
  {
    id: 1,
    image: AI1,
    title: 'Fire Detector',
    github: 'https://github.com/no-eyed/DevOpsOnFire',
    demo: 'https://firedetector123.onrender.com'
  }
  // {
  //   id: 2,
  //   image: AI1,
  //   title: 'Fire Detector',
  //   github: 'https://github.com/no-eyed/DevOpsOnFire',
  //   demo: 'https://firedetector123.onrender.com'
  // }
]

const Projects = () => {
  // const frontendRef = useRef();
  // const fullstackRef = useRef();
  // const aiRef = useRef();
  // const [tabActive, setTabActive] = useState("Fullstack");

  // const changeTab = (e) => {
  //   e.preventDefault();
  //   if(tabActive === "Frontend") {
  //     frontendRef.current.classList.add("closed");
  //   }
  //   else if(tabActive === "FullStack") {
  //     fullstackRef.current.classList.add("closed");
  //   }
  //   else if(tabActive === "AI/ML") {
  //     aiRef.current.classList.add("closed");
  //   }

  //   // console.log(e.target.innerHTML);
  //   if(e.target.innerHTML === "Frontend") {
  //     setTabActive("Frontend");
  //     frontendRef.current.classList.remove("closed");
  //   }
  //   else if(e.target.innerHTML === "FullStack") {
  //     setTabActive("FullStack");
  //     fullstackRef.current.classList.remove("closed");
  //   }
  //   else if(e.target.innerHTML === "AI/ML") {
  //     setTabActive("AI/ML");
  //     aiRef.current.classList.remove("closed");
  //   }
  // };

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="projects">
      <h5>My recent Work</h5>
      <h2>Projects</h2>

      {/* <div className='projects__tabchange'>
        <button type="button" className='tablinks' onClick={changeTab}>Frontend</button>
        <button type="button" className='tablinks active' onClick={changeTab}>FullStack</button>
        <button type="button" className='tablinks' onClick={changeTab}>AI/ML</button>
      </div> */}
      
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} centered variant="halfWidth" textColor="inherit" aria-label="basic tabs example">
          <Tab label="Frontend" {...a11yProps(0)}  />
          <Tab label="Fullstack" {...a11yProps(1) }  />
          {/* <Tab label="Backend" {...a11yProps(3) }  /> */}
          <Tab label="AI/ML" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      
      <TabPanel value={value} index={0}>
      <div className="container projects__container">
        
        {/* <div ref={frontendRef} className='container projects__frontend closed'> */}
          {
            FrontendProjcts.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt=""></img>
                </div>
                <h3>{title}</h3>
                <div className='projects__item-cta'>
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
                </article>
              )
            })
          }
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="container projects__container">
        {/* <div ref={fullstackRef} className='container projects__fullstack closed'> */}
          {
            FullstackProjects.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt=""></img>
                </div>
                <h3>{title}</h3>
                <div className='projects__item-cta'>
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
                </article>
              )
            })
          }
        </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="container projects__container">
        {/* <div ref={aiRef}  className='container projects__ai closed'> */}
          {
          AIProjects.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='projects__item'>
              <div className='projects__item-image'>
                <img src={image} alt=""></img>
              </div>
              <h3>{title}</h3>
              <div className='projects__item-cta'>
                <a href={github} className='btn' target="_blank">GitHub</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
              </div>
              </article>
            )
            })
          }
        </div>
        </TabPanel>
        
      {/* </div> */}
    </Box>
    </section>
  )
}

export default Projects