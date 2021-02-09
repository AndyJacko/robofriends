import React, {Component} from 'react';


class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='tc'>
          <h1 className='h1'>Oops, something went wrong!</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;