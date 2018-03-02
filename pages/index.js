import axios from "axios";
import { Fragment } from "react";

class MailJetTest extends React.Component {
  state = {
    hello: ""
  };

  componentDidMount() {
    axios.get("http://localhost:3001/hello").then(data => {
      this.setState({ hello: data });
    });
  }

  render() {
    const { hello } = this.state;

    return (
      <Fragment>
        <h1>MailJet Tester App</h1>
        {hello && <p>Hello, {hello}</p>}
      </Fragment>
    );
  }
}

export default MailJetTest;
