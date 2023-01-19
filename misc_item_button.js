'use strict';

const e = React.createElement;

class MiscItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { load: false };
  }

  render() {
    if (this.state.load) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ load: true }) },
      'Click'
    );
  }
}

const domContainer = document.querySelector('#misc_item_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(MiscItemButton));
