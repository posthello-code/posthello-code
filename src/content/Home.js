import '../App.css';
import { Box } from "grommet"
import React from 'react';

function IframeContainer(props) {
  return (
    <Box justify="center" direction='row-responsive' pad="medium" background="dark-2" round="medium" width="90%" height={{ min: '200px', max: "800px" }}>
      <iframe title="amplenote" width="100%" height="700px"
       frameBorder="0" 
        src={props.src}>  
      </iframe><script defer src="https://public.amplenote.com/embed.js">
    </script>
    </Box>
  );
}

function Home() {
  return (
    <div className='PageContent'>
     <h2>Developer, Technologist, Cat Person</h2>
      <IframeContainer src="https://public.amplenote.com/embed/Kx4RgKSELN7AGrwrexFc135x?hostname=alexjensen.net&styles=%2FAmplenote.css"/>
    </div>
  );
}

export default Home;
