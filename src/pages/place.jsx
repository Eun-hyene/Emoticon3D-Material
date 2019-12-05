import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Helmet from "react-helmet";

import { Avatar, Subheader, Divider, List, ListItem } from "react-md";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const style = { Width: 900 };

class Place extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="장소 검색">
        <div className="about-container">
          <Helmet>
            <title>{`place | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/place`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <CardText>
                  <div className="md-grid">
                    <List className="md-cell md-paper md-paper--1">
                      <Subheader red primaryText="이모티콘 MakerSpace" />
                      교육 필수 , 무료, 동작구
                    </List>
                  </div>

                  <div className="md-grid">
                    <Card
                      style={style}
                      className="md-cell md-paper md-paper--1"
                    >
                      <CardTitle title="중앙대 메이커스페이스" />
                      <CardText>
                        <p>교육 필수 ,학생 및 교직원만 가능, 무료 </p>
                        <p>동작구 </p>
                      </CardText>
                    </Card>
                  </div>

                  <div className="md-grid">
                    <List className="md-cell md-paper md-paper--1">
                      <Subheader red primaryText="디지털 대장간" />
                      <ListItem primaryText="교육 필수 , 무료" />
                      <ListItem primaryText="용산구" />
                    </List>
                  </div>

                  <div className="md-grid">
                    <List className="md-cell md-paper md-paper--1">
                      <Subheader red primaryText="팹랩 서울" />
                      <ListItem primaryText="교육 필수, 유료" />
                      <ListItem primaryText="종로구" />
                    </List>
                  </div>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Place;
