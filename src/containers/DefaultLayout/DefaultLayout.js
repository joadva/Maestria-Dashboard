import React, { Component, Suspense } from 'react';
import { /*BrowserRouter,*/ Redirect, Route, Switch /*, BrowserRouter*/ } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  /*AppBreadcrumb,
  AppFooter,*/
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

// const Login = React.lazy(() => import('../../views/Pages/Login/Login'));
///const Register = React.lazy(() => import('./../../views/Pages/Register/Register'));
const DefaultAside = React.lazy(() => import('./DefaultAside'));
//const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props){
    super(props)
    this.state = {
      statusToken: false,
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken');
    //this.setState({statusToken: false});
    //window.location.reload();
    // window.location.replace("/");
    //this.props.history.push('/');
    this.props.onLogin(false);

  }

  componentWillMount(){
    //console.log("hola");
    const token = localStorage.usertoken;
    //console.log(token);
    if(token === undefined){
     // this.setState({statusToken: true});
      //window.location.replace("/");
    }
    else
    {
      // this.setState({statusToken: false});
    }
  }

  componentDidMount(){
    // console.log(window.location.pathname);
  }

  render() {
    return (
        <div className="app">
          <AppHeader style={{backgroundColor: '#052c3d'}} fixed>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader onLogout={e=>this.signOut(e)}/>
            </Suspense>
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <Suspense>
                <AppSidebarNav navConfig={navigation} {...this.props} />
              </Suspense>
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <main className="main">
              <Container fluid>
              <div>
                <Suspense fallback={this.loading()}>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>
                </div>
              </Container>
            </main>
            <AppAside fixed>
              <Suspense fallback={this.loading()}>
                <DefaultAside />
              </Suspense>
            </AppAside>
          </div>
        </div>
    );
    //<AppFooter>
      //<Suspense fallback={this.loading()}>
        //<DefaultFooter />
      //</Suspense>
    //</AppFooter>
  }
}

export default DefaultLayout;
