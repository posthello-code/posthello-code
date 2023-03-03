import '../App.css';
import { Text, Box } from "grommet"

export const IntroText = function () {
  return <div className='Box'>
  <Box
    round="medium"
    direction="row-responsive"
    alignSelf='center'
    justify="center"
    width="90%"
    align="center"
    pad="medium"
    background="dark-2"
    gap="medium"> 
    <div className  ="amplenote-embed" data-note-token="Kx4RgKSELN7AGrwrexFc135x" data-styles="../../Amplenote.css">
      <iframe title="amplenote" width="100%" height="100%" 
        className="amplenote-iFrame" frameBorder="0" 
        src="https://public.amplenote.com/embed/Kx4RgKSELN7AGrwrexFc135x?hostname=alexjensen.net&styles=%2FAmplenote.css">  
      </iframe>
    </div>
    <script defer src="https://public.amplenote.com/embed.js">
    </script></Box>
</div>
}

function Home() {
  return (
    <div>
        <h2>Technologist | Software Person | Creative </h2>
        <IntroText></IntroText>
    </div>
  );
}

export default Home;
