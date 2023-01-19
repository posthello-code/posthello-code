'use strict';

const e = React.createElement;

class MiscItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { load: false };
  }

  render() {
    if (this.state.load) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => { 
        this.setState({ load: true })
      } },
      'Click'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.misc_item_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(MiscItemButton, { commentID: commentID })
    );
  });
