import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import "./BottomNav.scss";

class BottomNav extends Component {
  render() {
    return (
      <footer className="footer footer-fixed">
        <div className="boxes-container">
          <Button
            className="user-button"
            icon="fa-search"
            secondary
            key="about"
            iconClassName="fa fa-search"
            href=""
          >
            <p>모델 검색</p>
          </Button>
          <Button
            className="user-button"
            icon="fa-beer"
            secondary
            key="menu1"
            iconClassName="fa fa-heart"
            href="/about"
          >
            <p>내3D모델</p>
          </Button>

          <Button
            className="user-button"
            icon="faHome" // ??
            secondary
            key="variable-md-colors-warn"
            iconClassName="fa fa-comment"
            href="/about"
          >
            <p>예약하기</p>
          </Button>
          <Button
            className="user-button"
            icon="faHome" // ??
            secondary
            key="menu3"
            iconClassName="fa fa-book"
            href="/about"
          >
            <p>출력상태</p>
          </Button>
          <Button
            className="user-button"
            icon="faHome" // ???
            secondary
            key="menu4"
            iconClassName="fa fa-tag"
            href="/about"
          >
            <p>더보기</p>
          </Button>
        </div>
      </footer>
    );
  }
}

export default BottomNav;
