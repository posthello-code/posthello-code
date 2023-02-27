import '../App.css';
import { Box, Button, Text } from "grommet"
import { Send, Linkedin, Github } from 'grommet-icons'

function Contact() {
  return (
    <div>
      <h2>Contact Details</h2>

      <div className='Box'><Box
        round="medium"
        direction="column"
        alignSelf='center'
        justify="center"
        width="90%"
        align="center"
        pad="medium"
        background="dark-2"
        gap="medium"
      > 
        <Button icon={<Send />} color="white" label={<Text color='white'>Email</Text>} href="mailto:mail@alexjensen.net"></Button>
        <Button icon={<Linkedin />} color="white" label={<Text color='white'>LinkedIn</Text>} href='https://linkedin.com/in/helloalexjensen'></Button>
        <Button icon={<Github />} color="white" label={<Text color='white'>Github</Text>} href='https://github.com/posthello-code'></Button>
      </Box></div>

    </div>
  );
}

export default Contact;
