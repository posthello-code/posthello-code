import { IframeContainer } from './Amplenote';

function Blog() {
  return (
    <div className='PageContent'>
      <h2>My tech journal, and other curious ramblings </h2>

      <IframeContainer src="https://public.amplenote.com/embed/Tt9PcjS7G1e8ZNXWe9MB2E1X?hostname=alexjensen.net&styles=%2FAmplenote.css"/>
    </div>
  );
}

export default Blog;
