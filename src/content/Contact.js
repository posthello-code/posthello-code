import '../App.css';
import { Box } from "grommet"

function Contact() {
  return (
    <div>
      <h2>Contact Details</h2>

      <div className='Box'><Box
        round="medium"
        direction="row-responsive"
        alignSelf='center'
        justify="center"
        width="90%"
        align="center"
        pad="medium"
        background="dark-2"
        gap="medium"
      >
        <a href="mailto:mail@alexjensen.net">Email</a>
        <Box>
          <a href='https://linkedin.com/in/helloalexjensen'>LinkedIn</a>
        </Box>
        <Box>
          <a href='https://github.com/posthello-code'>Github</a>
        </Box>
      </Box></div>

    </div>
  );
}

export default Contact;
