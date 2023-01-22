import '../App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        Here's some thing I'm focusing on right now...
      <hr></hr>
      </h1>
      <table>
        <tbody>
          <tr>
            <th><h2>Software Developer/Test Engineer</h2></th>
          </tr>
          <tr>
            <td>As a developer in test, I have spearheaded initiatives to automate large suites of Acceptance tests, as well as contributed features and bug fixes to various 
              data collection platforms and user interfaces in the environmental monitoring industries (fire weather, meterology, hydrology, utilities etc). 
              In addition to this I have learned and contributed to observability, continuous integration/deployment, security other devops tasks.</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th><h2>Product Ownership</h2></th>
          </tr>
          <tr>
            <td>As a Product Validation specialist for over 5 years, I have learned a ton about what it takes to develop high-quality software accross the entire stack 
              while maintaining consistency and avoiding scope-creep. I can be relied upon to make informed decisions regarding 
              product backlogs, feature suggestions, and release management. I find criticism is a useful tool for understanding how to build better products.</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th><h2>Primary Tools/Technologies</h2></th>
          </tr>
          <tr>
            <td>
              Javascript -- Typescript, angular, react, CucumberJS, mochaJS, SerenityJS, WebdriverIO
            </td>
          </tr>
          <tr>
            <td>
              DevOps -- Drone.io/Bitbucket Pipelines, AWS (ec2, lambda, elastic beanstalk, IAM), Kubernetes, Docker
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
          <tr>
            <td>
              See <div className='resumeLink'><Link to="/resume">resume</Link></div> for more
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
