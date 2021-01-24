import React, { Component } from "react";
import {
  /*BrowserRouter, Route, Switch,*/ Link,
  NavLink,
} from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
// AppNavbarBrand
import {
  /*AppAsideToggler, */ AppHeaderDropdown,
  AppSidebarToggler,
} from "@coreui/react";
import logo from "../../assets/img/logo-urgegas.png";
// import sygnet from '../../assets/img/brand/sygnet.svg'

// Containers
// const DefaultLayout = React.lazy(() => import('../DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('../../views/Pages/Login'));

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  componentWillMount() {
    const token = localStorage.usertoken;
    // console.log(token);
    if (token === undefined) {
      // this.props.history.push(`/`);
    } else {
      const decoded = jwt_decode(token);
      this.setState({
        first_name: decoded.firstName,
        last_name: decoded.lastName,
        email: decoded.email,
      });
    }

    /*this.setState({
    firstName: 'carlos',
    last_name: 'caicedo',
    email: ''},function () {
      console.log(this.state);
     });*/
  }

  render() {
    // console.log(this.state);
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    // const token = this.state.stateToken;
    /*<AppNavbarBrand
    full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
    minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
  />*/
    //onClick={e => this.props.onLogout(e)}  onClick={this.logOut.bind(this)}
    const styleLink = {
      textDecoration: "none",
      color: "white",
    };
    /*
    <h5>{this.state.first_name.charAt(0).toUpperCase() + this.state.first_name.slice(1)} {this.state.last_name.charAt(0).toUpperCase() + this.state.last_name.slice(1)}</h5>
    */
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        &nbsp;&nbsp;
        <h2>
          <img src={logo} className="img-avatar ml-2" alt="" />
        </h2>
        &nbsp;&nbsp;
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link" style={styleLink}>
              <i className="icon-settings"></i> Settings
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link" style={styleLink}>
              <i className="icon-question"></i> Support
            </Link>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav className="mr-2">
              <img
                src={"../../assets/img/avatars/6.jpg"}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right style={{ right: "auto" }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-envelope-o"></i> Messages
                <Badge color="success">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-comments"></i> Comments
                <Badge color="warning">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-user"></i> Profile
              </DropdownItem>
              <DropdownItem onClick={(e) => this.props.onLogout(e)}>
                <i className="fa fa-lock"></i> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*
        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
