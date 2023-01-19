'use strict';

const e = React.createElement;

class MiscItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#misc_item_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(MiscItemButton));
