import React from "react";
import ReactDOM from "react-dom";
import SeasonDispaly from "./seasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = { lat: null, errorMessaage: "" };
  //   }

  state = { lat: null, errorMessaage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessaage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("My cop did update");
  }
  render() {
    if (this.state.errorMessaage && !this.state.lat) {
      return <div>Error:{this.state.errorMessaage}</div>;
    }
    if (!this.state.errorMessaage && this.state.lat) {
      return <SeasonDispaly lat={this.state.lat} />;
    }
    return <Spinner message=" Please provide location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
