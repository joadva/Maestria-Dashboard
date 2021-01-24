import React, { Component } from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

class Clientes extends Component {
  constructor(props) {
    super(props);

    /*this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);*/

    this.state = {};
  }

  /*toggle() {
    this.setState({ collapse: !this.state.collapse });
  }*/

  /*toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }*/

  render() {
    return (
      <div className="animated fadeIn">
        <span>Choferes</span>

        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Validation feedback</strong> Form
            </CardHeader>
            <CardBody>
              <Form className="was-validated">
                <FormGroup>
                  <Label htmlFor="inputSuccess2i">Non-required input</Label>
                  <Input
                    type="text"
                    className="form-control-success"
                    id="inputSuccess2i"
                  />
                  <FormFeedback valid>Non-required</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputWarning2i">Required input</Label>
                  <Input
                    type="text"
                    className="form-control-warning"
                    id="inputWarning2i"
                    required
                  />
                  <FormFeedback className="help-block">
                    Please provide a valid information
                  </FormFeedback>
                  <FormFeedback valid className="help-block">
                    Input provided
                  </FormFeedback>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Clientes;
