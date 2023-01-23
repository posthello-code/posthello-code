import '../App.css';

function Home() {
  return (
    <div>
      <h1>
        About me  
      <hr></hr>
      </h1>
      <table>
        <tbody>
          <tr>
            <th><h2>Software Developer</h2></th>
          </tr>
          <tr>
            <td>I have spearheaded initiatives to automate large suites of acceptance tests for front-end/back-end, as well as contributed features and bug fixes to various 
              data collection platforms and user interfaces in the environmental monitoring industries (fire weather, meterology, hydrology, utilities etc). 
              In addition to this I have contributed to observability, continuous integration/deployment, and DevOps infrastructure as time permits.</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th><h2>Product Owner</h2></th>
          </tr>
          <tr>
            <td>As a Product validation specialist for over 5 years, I have learned a lot about what it takes to develop high-quality software accross the entire stack 
              while maintaining consistency and avoiding scope-creep. I can be relied upon to make informed decisions regarding 
              product backlogs, feature suggestions, and release management. I find continuous feedback is a useful tool for understanding how to build better products.</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th><h2>Technologies I've been using lately</h2></th>
          </tr>
          <tr>
            <td>
              Javascript -- Typescript, Angular, React, CucumberJS, SerenityJS, WebdriverIO
            </td>
          </tr>
          <tr>
            <td>
              DevOps -- Drone.io/Bitbucket Pipelines, AWS (ec2, lambda, elastic beanstalk, IAM), Kubernetes, Docker, Heroku, Render
            </td>
          </tr>
          <tr>
            <td>
              Observability -- Grafana/Prometheus, AWS CloudWatch
            </td>
          </tr>
          <tr>
            <td>
              Java -- Springboot
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
