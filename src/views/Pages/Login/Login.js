import React, { Component /*, Suspense*/ } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  /*Form, Input,*/ InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { BrowserRouter, Route, Switch /*, Redirect*/ } from "react-router-dom";
import { login } from "../../UserFunctions";
// import { connect } from 'react-redux';
// import { obtenerLogin } from '../../../actions/loginActions';
// import { connect } from 'net';

// import './App.scss';
const DefaultLayout = React.lazy(() =>
  import("../../../containers/DefaultLayout/DefaultLayout")
);
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
// const DefaultLayout = React.lazy(() => import('../../../containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('../../../views/Pages/Register'));
// const Page404 = React.lazy(() => import('../../../views/Pages/Page404'));
// const Page500 = React.lazy(() => import('../../../views/Pages/Page500'));

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@urgegas.com",
      password: "test",
      stateToken: true,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push("/");
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.setState({ stateToken: true });
      } else {
        this.setState({ stateToken: false });
      }
    });
  }

  handleLogin(stateToken) {
    //console.log(is_logged);
    this.setState({ stateToken });
    this.props.history.push("/");
  }

  componentWillMount() {
    const token = localStorage.usertoken;
    //console.log(token);
    if (token !== undefined) {
      this.setState({ stateToken: true });
    } else {
      this.setState({ stateToken: false });
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    if (token !== undefined) {
    }

    // this.props.obtenerLogin();
  }

  render() {
    const userToken = this.state.stateToken;
    if (userToken !== false) {
      return (
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                path="/"
                name="Home"
                render={(props) => (
                  <DefaultLayout {...props} onLogin={this.handleLogin} />
                )}
              />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      );
    } else {
      return (
        <div className="app flex-row align-items-center">
          <Container>
            <form noValidate onSubmit={this.onSubmit}>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4">
                              Login
                            </Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">
                              Forgot password?
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card
                      className="text-white py-5 d-md-down-none"
                      style={{ width: "44%", backgroundColor: "#052c3d" }}
                    >
                      <CardBody className="text-center">
                        <div>
                          <h2>Sign up</h2>
                          <p>
                            Urgegas es la solución para conocer el nivel de gas
                            de cualquier tipo de tanque tanto estacionarios como
                            cilíndricos de la manera más cómoda y sencilla,
                            buscando ahorrar en el consumo mediante el monitoreo
                            del llenado y la selección del proveedor más
                            conveniente.
                          </p>
                          <Link to="/register">
                            <Button
                              color="primary"
                              className="mt-3"
                              active
                              tabIndex={-1}
                            >
                              Register Now!
                            </Button>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </form>
          </Container>
        </div>
      );
    }
  }
}
// onClick={this.OnDefaultLayout.bind(this)}
/*<Input type="text" 
        placeholder="Username" 
        autoComplete="username" 
        value={this.state.email}
        onChange={this.onChange}
      />*/
// <Input type="password" placeholder="Password" autoComplete="current-password" onChange={this.onChange} />
/* */
//}

/*const mapStateToProps = state => ({
    email: state.email
})*/

export default /*connect(mapStateToProps, {obtenerLogin}) (*/ Login;
