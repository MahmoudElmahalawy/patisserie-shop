import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <>
        <div className="text-center mt-5">
          <h1>لم يتم العثور على الصفحة</h1>
        </div>
        <div
          className="pt-5 text-center text-title "
          style={{
            textDecoration: "underline",
            fontSize: "2rem",
          }}
        >
          <Link to="/">العودة للمتجر</Link>
        </div>
      </>
    );
  }
}
