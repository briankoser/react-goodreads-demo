import React from 'react';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from '../redux/actions'

// App.js
export class ReduxDemo extends React.Component {
    render() {
        return (
            <>
                <h2>Redux Demo</h2>
                <h3>{this.props.geod.title || 'Hello World!'}</h3>

                {this.props.geod.title ? (
                <button onClick={this.props.closeGeod}>Exit Geod</button>
                ) : (
                <button
                onClick={() =>
                    this.props.activateGeod({ title: 'I am a geo dude!' })
                }
                >
                Click Me!
                </button>
                )}
            </>
        );
    }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const ReduxDemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo);

export default ReduxDemoContainer;