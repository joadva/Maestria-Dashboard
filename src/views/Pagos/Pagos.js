import React, { Component } from "react";
// import { Button, Card, CardBody, /*CardHeader, */Col, Row } from 'reactstrap';
import "./Pagos.css";
import Mapa from "../Mapa/Mapa";
// import Widget01 from '../Widgets/Widget01';

// import {Button } from '@material-ui/core/Button';
class Pagos extends Component {
  constructor(props) {
    super(props);

    /*this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);*/

    this.state = {
      widthMap: "100%",
      heightMap: "50vh",
    };
  }

  render() {
    return (
      <div>
        <div className="row pr-1">
          <div className="col-xl-12">
            <Mapa
              className=""
              width={this.state.widthMap}
              height={this.state.heightMap}
            />
          </div>
        </div>
        <div className="row pt-2 pr-1">
          <div className="col-xl-5 ">
            <table
              className="table table-borderless shadow"
              style={{ backgroundColor: "#fff", borderRadius: "5px" }}
            >
              <thead>
                <tr>
                  <th scope="col">
                    Symbology: &nbsp;&nbsp;
                    <div className="SquareNormal"></div>
                    <span style={{ color: "#165466" }}> Normal</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="SquareLow"></div>
                    <span style={{ color: "#ffd10e" }}> Low</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="SquareCritical"></div>
                    <span style={{ color: "#c01b1b" }}> Critical</span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div
            className="col-xl-7 shadow"
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              marginBottom: "10px",
              paddingTop: "8px",
            }}
          >
            <div className="row ">
              <div className="col-xl-2">
                <label className="col-form-label">Clients: (400)</label>
              </div>
              <div className="col-xl-3">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>

              <div className="col-xl-3">
                <div className="" style={{ display: "inline" }}>
                  <label className="col-form-label">Sort by: &nbsp;</label>
                </div>
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

              <div className="col-xl-4">
                <div className="" style={{ display: "inline" }}>
                  <label className="col-form-label">Status: &nbsp;</label>
                </div>
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
        <div className="row pr-1">
          <div className="col-xl-5 ">
            <div
              className="shadow pl-3 mb-2"
              style={{
                backgroundColor: "#fff",
                borderRadius: "3px",
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <div className="row" style={{ fontWeight: "600" }}>
                <div className="col-xl-5">Status Client</div>
                <div className="col-xl-3">Clients</div>
                <div className="col-xl-4">Gas Required</div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%", backgroundColor: "#c01b1b" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">100</div>
                <div className="col-xl-4">35,000</div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "45%", backgroundColor: "#ffd10e" }}
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      45%
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">180</div>
                <div className="col-xl-4">75,000</div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "30%", backgroundColor: "#165466" }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      30%
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">120</div>
                <div className="col-xl-4">200,000</div>
              </div>
            </div>
            <div
              className="shadow pl-3"
              style={{
                backgroundColor: "#fff",
                borderRadius: "3px",
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <div className="row" style={{ fontWeight: "600" }}>
                <div className="col-xl-7">Status by route</div>
                <div className="col-xl-5"></div>
              </div>
              <div className="row">
                <div className="col-xl-7">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%", backgroundColor: "#c01b1b" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">R1, R2, R3, R7, R9</div>
              </div>
              <div className="row">
                <div className="col-xl-7">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "45%", backgroundColor: "#ffd10e" }}
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      45%
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">R5, R6</div>
              </div>
              <div className="row">
                <div className="col-xl-7">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "30%", backgroundColor: "#165466" }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      30%
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">R8, R10</div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 ">
            <div className="row pt-2" style={{ fontWeight: "600" }}>
              <div className="col">Status</div>
              <div className="col">Gas Levels</div>
              <div className="col">Day(s) of Gas</div>
              <div className="col">Client</div>
              <div className="col">Location</div>
              <div className="col">Dispatcher</div>
              <div className="col">Last Order</div>
            </div>
            <div
              className="row pt-2 mb-2 shadow-sm"
              style={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: "600",
              }}
            >
              <div className="col">
                <span style={{ color: "#e6462d" }}> Critical</span>
              </div>
              <div className="col">
                <span style={{ color: "#e6462d" }}>09%</span>
              </div>
              <div className="col">
                <span style={{ color: "#e6462d" }}>5</span>
              </div>
              <div className="col">
                <span>Kristen C. Sanchez</span>
              </div>
              <div className="col">
                <span>Harley Vincent Drive</span>
              </div>
              <div className="col">
                <span style={{}}> Kristen C. Sanchez</span>
              </div>
              <div className="col">
                <span>May 12 2019 11:35 AM</span>
              </div>
            </div>
            <div
              className="row pt-2 mb-2 shadow-sm"
              style={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                fontSize: "11px",
              }}
            >
              <div className="col">
                <span style={{ color: "#ffd10e" }}> Critical</span>
              </div>
              <div className="col">
                <span style={{ color: "#ffd10e" }}>09%</span>
              </div>
              <div className="col">
                <span style={{ color: "#ffd10e" }}>5</span>
              </div>
              <div className="col">
                <span>Kristen C. Sanchez</span>
              </div>
              <div className="col">
                <span>Harley Vincent Drive</span>
              </div>
              <div className="col">
                <span style={{}}> Kristen C. Sanchez</span>
              </div>
              <div className="col">
                <span>May 12 2019 11:35 AM</span>
              </div>
            </div>
            <div
              className="row pt-2 mb-2 shadow-sm"
              style={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                fontSize: "11px",
              }}
            >
              <div className="col">
                <span style={{ color: "#ffd10e" }}> Critical</span>
              </div>
              <div className="col">
                <span style={{ color: "#ffd10e" }}>09%</span>
              </div>
              <div className="col">
                <span style={{ color: "#ffd10e" }}>5</span>
              </div>
              <div className="col">
                <span>Kristen C. Sanchez</span>
              </div>
              <div className="col">
                <span>Cleveland, OH 44115</span>
              </div>
              <div className="col">
                <span style={{}}> Kristen C. Sanchez</span>
              </div>
              <div className="col">
                <span>May 12 2019 11:35 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagos;
