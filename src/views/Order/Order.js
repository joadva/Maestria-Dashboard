import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody /*CardHeader, */ /*Col, Row*/,
} from "reactstrap";
import "./Order.css";
import Mapa from "../Mapa/Mapa";
// import Widget01 from '../Widgets/Widget01';

// import {Button } from '@material-ui/core/Button';
class Order extends Component {
  constructor(props) {
    super(props);

    /*this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);*/

    this.state = {
      widthMap: "100%",
      heightMap: "60vh",

      //collapse: true,
      //fadeIn: true,
      //timeout: 300
    };
  }

  render() {
    return (
      <div className="animated fadeIn mt-2">
        <div className="row mb-2">
          <div className="col-xl-1 margin">
            <Button
              className="shadow-sm col-xl-12"
              block
              style={{
                backgroundColor: "#052c3d",
                color: "#fff",
                border: "none",
              }}
            >
              <b>Orders</b>
            </Button>
          </div>
          <div className="col-xl-2 margin">
            <Button
              className="shadow-sm col-xl-10"
              block
              style={{ backgroundColor: "#fff", border: "none" }}
            >
              <b>Live Monitoring</b>
            </Button>
          </div>
          <div className="col-xl-7 margin"></div>
          <div className="col-xl-2 margin">
            <strong>Monday, May 12 2019</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 margin">
            <Card className="shadow" style={{ border: "none" }}>
              <CardBody>
                <div className="row d-flex">
                  <div className="form-group col-xl-12">
                    <strong>Symbology:</strong>
                    <br />
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group col-xl-12">
                    <div className="">
                      <div className="SquareDelivered"></div>
                      <span style={{ color: "#42e478" }}> Delivered</span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group col-xl-12">
                    <div className="">
                      <div className="SquarePending"></div>
                      <span style={{ color: "#ffa008" }}> Pending</span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group col-xl-12">
                    <div className="">
                      <div className="SquareOngoing"></div>
                      <span style={{ color: "#4268e3" }}> Ongoing</span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group col-xl-12">
                    <div className="">
                      <div className="SquareRefuse"></div>
                      <span style={{ color: "#e6462d" }}> Refuse</span>
                      <br />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="form-group col-xl-5 margin">
            <Card className="shadow" style={{ border: "none" }}>
              <CardBody>
                <div className="row">
                  <div className="form-group col-xl-6">
                    <strong>Status Client</strong>
                  </div>
                  <div className="form-group col-xl-2">
                    <strong>Clients</strong>
                  </div>
                  <div className="form-group col-xl-4">
                    <strong>Gas Required</strong>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group justify-content-center col-xl-6">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>100</span>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>35,000</span>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group justify-content-center col-xl-6">
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>180</span>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>75,000</span>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group justify-content-center col-xl-6">
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>120</span>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>200,000</span>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="form-group justify-content-center col-xl-6">
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        100%
                      </div>
                    </div>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>120</span>
                  </div>
                  <div className="form-group justify-content-center col-xl-3">
                    <span>200,000</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="form-group justify-content-center col-xl-4 mb-2 margin">
            <Card className="shadow" style={{ border: "none" }}>
              <CardBody>
                <div className="row">
                  <div className="form-group justify-content-center col-xl-12">
                    <strong>Status by route</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-xl-7">
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "09%" }}
                        aria-valuenow="09"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        09%
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-xl-5">
                    <span>R1, R2, R3, R7, R9</span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-xl-7">
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "45%" }}
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        45%
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-xl-5">
                    <span>R5, R6</span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-xl-7">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "35%" }}
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        35%
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-xl-5">
                    <span>R8, R10</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-7">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <span>R11</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div
          className="row pt-2"
          style={{ backgroundColor: "#fff", borderBottom: "solid #ddd 1px" }}
        >
          <div className="form-group col-xl-6 margin">
            <strong>Order list (45)</strong>
          </div>
          <div className="form-group col-xl-6">
            <div className="row">
              <div className="form-group col-xl-4">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="form-group col-xl-2">
                <label className="col-form-label">Sort by:</label>
              </div>
              <div className="form-group col-xl-2">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-dark dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Date
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href={{}}>
                      Action
                    </a>
                    <a className="dropdown-item" href={{}}>
                      Another action
                    </a>
                    <a className="dropdown-item" href={{}}>
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href={{}}>
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-group col-xl-1">
                <label className="col-form-label">Status:</label>
              </div>
              <div className="form-group col-xl-3">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-dark dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    All Statuses
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href={{}}>
                      Action
                    </a>
                    <a className="dropdown-item" href={{}}>
                      Another action
                    </a>
                    <a className="dropdown-item" href={{}}>
                      Something else here
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href={{}}>
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#fff" }}>
          <div className="col-xl-6" style={{ marginLeft: "-14px" }}>
            <Mapa
              className=""
              width={this.state.widthMap}
              height={this.state.heightMap}
            />
          </div>
          <div className="col-xl-6">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Order</th>
                  <th scope="col">Client</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody className="" style={{ fontSize: "10px" }}>
                <tr className="shadow-sm">
                  <th scope="row">
                    <span style={{ color: "#4268e3", fontWeight: "800" }}>
                      {" "}
                      Ongoing
                    </span>
                  </th>
                  <th scope="row">#090595</th>
                  <th scope="row">Kristen C. Sanchez</th>
                  <th scope="row">
                    <span>575 Harley Vincen Drive, Cleveland, OH 44115</span>
                  </th>
                  <th scope="row">
                    <span>May 12 2019 11:35 AM</span>
                  </th>
                  <th scope="row">
                    <span style={{ color: "#e6462d", fontWeight: "800" }}>
                      {" "}
                      High
                    </span>
                  </th>
                  <th scope="row">
                    <span>$343.56</span>
                  </th>
                </tr>
                <tr className="shadow-sm">
                  <th scope="row">
                    <span style={{ color: "#4268e3", fontWeight: "800" }}>
                      {" "}
                      Ongoing
                    </span>
                  </th>
                  <th scope="row">#090595</th>
                  <th scope="row">Kristen C. Sanchez</th>
                  <th scope="row">
                    <span>575 Harley Vincen Drive, Cleveland, OH 44115</span>
                  </th>
                  <th scope="row">
                    <span>May 12 2019 11:35 AM</span>
                  </th>
                  <th scope="row">
                    <span style={{ color: "#ffa008", fontWeight: "800" }}>
                      {" "}
                      Medium
                    </span>
                  </th>
                  <th scope="row">
                    <span>$343.56</span>
                  </th>
                </tr>
                <tr className="shadow-sm">
                  <th scope="row">
                    <span style={{ color: "#4268e3", fontWeight: "800" }}>
                      {" "}
                      Ongoing
                    </span>
                  </th>
                  <th scope="row">#090595</th>
                  <th scope="row">Kristen C. Sanchez</th>
                  <th scope="row">
                    <span>575 Harley Vincen Drive, Cleveland, OH 44115</span>
                  </th>
                  <th scope="row">
                    <span>May 12 2019 11:35 AM</span>
                  </th>
                  <th scope="row">
                    <span style={{ color: "#ffa008", fontWeight: "800" }}>
                      {" "}
                      Medium
                    </span>
                  </th>
                  <th scope="row">
                    <span>$343.56</span>
                  </th>
                </tr>
                <tr className="shadow-sm">
                  <th scope="row">
                    <span style={{ color: "#ffa008", fontWeight: "800" }}>
                      {" "}
                      Pending
                    </span>
                  </th>
                  <th scope="row">#090595</th>
                  <th scope="row">Kristen C. Sanchez</th>
                  <th scope="row">
                    <span>575 Harley Vincen Drive, Cleveland, OH 44115</span>
                  </th>
                  <th scope="row">
                    <span>May 12 2019 11:35 AM</span>
                  </th>
                  <th scope="row">
                    <span style={{ color: "#ffa008", fontWeight: "800" }}>
                      {" "}
                      Medium
                    </span>
                  </th>
                  <th scope="row">
                    <span>$343.56</span>
                  </th>
                </tr>
                <tr className="shadow-sm">
                  <th scope="row">
                    <span style={{ color: "#ffa008", fontWeight: "800" }}>
                      {" "}
                      Pending
                    </span>
                  </th>
                  <th scope="row">#090595</th>
                  <th scope="row">Kristen C. Sanchez</th>
                  <th scope="row">
                    <span>575 Harley Vincen Drive, Cleveland, OH 44115</span>
                  </th>
                  <th scope="row">
                    <span>May 12 2019 11:35 AM</span>
                  </th>
                  <th scope="row">
                    <span style={{ color: "#e6462d", fontWeight: "800" }}>
                      {" "}
                      High
                    </span>
                  </th>
                  <th scope="row">
                    <span>$343.56</span>
                  </th>
                </tr>
                <tr className="shadow-sm">
                  <th scope="row">
                    <span style={{ color: "#42e478", fontWeight: "800" }}>
                      {" "}
                      Delivered
                    </span>
                  </th>
                  <th scope="row">#090595</th>
                  <th scope="row">Kristen C. Sanchez</th>
                  <th scope="row">
                    <span>575 Harley Vincen Drive, Cleveland, OH 44115</span>
                  </th>
                  <th scope="row">
                    <span>May 12 2019 11:35 AM</span>
                  </th>
                  <th scope="row">
                    <span style={{ color: "#42e478", fontWeight: "800" }}>
                      {" "}
                      Low
                    </span>
                  </th>
                  <th scope="row">
                    <span>$343.56</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
