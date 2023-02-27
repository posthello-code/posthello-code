import { Box } from 'grommet';

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
          <div class="amplenote-embed" data-note-token="Tt9PcjS7G1e8ZNXWe9MB2E1X" data-styles="../../Amplenote.css">
            <iframe title="amplenote" width="100%" height="100%" className="amplenote-iFrame" frameborder="0" src="https://public.amplenote.com/embed/Tt9PcjS7G1e8ZNXWe9MB2E1X?hostname=alexjensen.net&styles=%2FAmplenote.css"></iframe>
          </div>
          <script defer src="https://public.amplenote.com/embed.js">
          </script></Box>
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
