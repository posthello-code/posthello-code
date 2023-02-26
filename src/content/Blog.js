function Amplenote() {
  return (
    <div>
      <div class="amplenote-embed" data-note-token="Tt9PcjS7G1e8ZNXWe9MB2E1X" data-styles="../../Amplenote.css">
        <iframe  width="100%" height={1080} className="amplenote-iFrame" frameborder="0" src="https://public.amplenote.com/embed/Tt9PcjS7G1e8ZNXWe9MB2E1X?hostname=alexjensen.net&styles=%2FAmplenote.css"></iframe>
      </div>
      <script defer src="https://public.amplenote.com/embed.js">
      </script>
    </div>)
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
