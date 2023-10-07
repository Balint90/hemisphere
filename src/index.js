import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import HemiSphereDisplay from "./HemiSphereDisplay";
import Loader from "./Loader";

class App extends React.Component {

    constructor(props) {
        super(props);  //call parent constructor

        this.state = { latitude: null, errorMessage: '' }

        window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({latitude: position.coords.latitude}, )
        },
        (error) => {
            this.setState({errorMessage: 'Cannot determine location'})
        },
        );
    }

    render() {
        //conditional rendering
        if (this.state.errorMessage && !this.state.latitude) {
            return (
                <div>
                    { this.state.errorMessage }
                </div>
            );
        }
        else if (!this.state.errorMessage && this.state.latitude) {
            return (
                <div>
                    { this.state.latitude }
                </div>
            );
        }
        else {
            return (
                <div>
                    <Loader />
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));