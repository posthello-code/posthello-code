import { Box, Text } from 'grommet';

function Amplenote() {
  return (
    <div>
      <h2>My tech diary / and other curious ramblings </h2>
      <div className='Box'>
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
          <div className  ="amplenote-embed" data-note-token="Tt9PcjS7G1e8ZNXWe9MB2E1X" data-styles="../../Amplenote.css">
            <iframe title="amplenote" width="100%" height="100%" 
              className="amplenote-iFrame" frameBorder="0" 
              src="https://public.amplenote.com/embed/Tt9PcjS7G1e8ZNXWe9MB2E1X?hostname=alexjensen.net&styles=%2FAmplenote.css">  
            </iframe>
          </div>
          <script defer src="https://public.amplenote.com/embed.js">
          </script></Box>
      </div>
      <div id="ample-desc">
      <Text size="small" textAlign="center">
        This blog is updated in near real-time using an <a href="https://www.amplenote.com/help/custom_css_blogging_platform_use_case">embedded Amplenote</a> markdown <a href="https://public.amplenote.com/embed/Tt9PcjS7G1e8ZNXWe9MB2E1X?hostname=alexjensen.net&styles=%2FAmplenote.css">file</a>
      </Text>
      </div></div>)
}

function Blog() {
  return (
    <div>
      <Amplenote>
      </Amplenote>
    </div>
  );
}

export default Blog;
