import React, { Component } from "react";
import styled from "styled-components";
import "./Product.scss";

export default class Product extends Component {
  render() {
    const { id, image, isnew, isseason, title } = this.props;
    const isBothTrue = isnew && isseason;
    return (
      <div className="product" key={id}>
        <div className="imageView">
          <img src={image} />
          <IsNew isTrue={isnew}>NEW</IsNew>
          <IsSeason isTrue={isseason} isBothTrue={isBothTrue}>
            시즌
            <br />
            한정
          </IsSeason>
        </div>
        <div className="title">{title}</div>
      </div>
    );
  }
}

const IsNew = styled.div`
  position: absolute;
  // border: 1px solid red;
  display: ${(props) => (props.isTrue ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  bottom: 10px;
  left: 5px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: #006633;
`;

const IsSeason = styled(IsNew)`
  margin-left: ${(props) => (props.isBothTrue ? "50px" : "")};
  font-weight: 600;
  background-color: #669900;
`;
