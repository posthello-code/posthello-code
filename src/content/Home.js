import '../App.css';

export const IntroText = function () {
  return <td>
    I started my journey as a technologist about ten years ago in college where I primarily wrote applications and interfaces 
    for <b>electronic devices</b> such as <b>Raspberry Pi</b>, and <b>NetDuino</b> and various other <b>microcontrollers</b>. My capstone project included building a user interface in <b>C#</b> to retrieve telemetry and photographic data from a homemade quad-rotor drone. In my professional career, I moved quickly from a production worker soldering and assembling to product validation, where I became proficient in <b>NodeJS</b> by writing test automation with tools like <b>SerenityBDD, CucumberJS, WebdriverIO and Selenium.</b> I learned how to work
    with <b>Angular</b> by contributing front-end features. I learned what makes a quality <b>RESTful API</b>, by defining implementation guidelines and encouraging the use of OpenAPI standards. I generated SDKs with openAPI generator and helped automatically generate client libraries as part of application deployments. I tested event driven technologies using <b>KafkaJS</b>. I learned how to work with <b>Java springboot</b> and added features to backend services. I learned how to monitor and troubleshoot scalable applications 
    running on <b>Kubernetes and elastic beanstalk</b>. I learned about devops with <b>bitbucket, and drone.io</b> by creating pipelines for automated tests, and deploying front-end applications. In the future I want to learn more about data science and create more side projects outside of work! I'll put them here when I have some to share.
  </td>
}

function Home() {
  return (
    <div>
      <div>Hello, I'm Alex! 👋</div>
      <table>
        <tbody>
          <tr>
            <th>
              <h2>Technologist | Breaker of Things | Software Dev and Tester | Creative</h2>
            </th>
          </tr>
          <tr>
            <IntroText></IntroText>
          </tr>
          <tr>
            <td>Don't hesitate to get in touch with me, and ask about anything above. I'm also a musician, and I enjoy synthesizers and guitar feel free to ask me where to find my music or anything else for that matter 😼 </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Home;
