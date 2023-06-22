import { Box } from 'grommet';

export function IframeContainer(props) {
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