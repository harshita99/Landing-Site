import React, { Component } from "react";

export default class Screenshot extends Component {
  render() {
    return (
      <div class="applic-apps section-padding2">
        <div class="container-fluid">
          <div class="row">
            {/* <!-- slider Heading --> */}
            <div class="col-xl-4 col-lg-4 col-md-8">
              <div class="single-cases-info mb-30">
                <h3>
                  Dopamine App
                  <br /> Screenshot
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consecadipiscing elit, sed do
                  eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis
                  ipsum suspendisse gravida. Risus commodo viverra maecenasan
                  lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
            {/* <!-- OwL --> */}
            <div class="col-xl-8 col-lg-8 col-md-col-md-7">
              <div class="app-active owl-carousel">
                <div class="single-cases-img">
                  <img src={require("../static/img/gallery/App1.png")} alt="" />
                </div>
                <div class="single-cases-img">
                  <img src={require("../static/img/gallery/App2.png")} alt="" />
                </div>
                <div class="single-cases-img">
                  <img src={require("../static/img/gallery/App3.png")} alt="" />
                </div>
                <div class="single-cases-img">
                  <img src={require("../static/img/gallery/App4.png")} alt="" />
                </div>
                <div class="single-cases-img">
                  <img src={require("../static/img/gallery/App1.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
