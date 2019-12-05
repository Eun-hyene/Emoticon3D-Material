/** src/pages/notAbout.jsx */
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Helmet from 'react-helmet';
import UserLinks from '../../components/UserLinks';
import Layout from '../../layout';
import config from '../../../data/SiteConfig';
import './NotAbout.scss';

class AboutPage2 extends Component {
  render() {
    return (
      <Layout location={this.props.location} title='notAbout'>
        <div className='notAbout-container'>
          <Helmet>
            <title>{`notAbout | ${config.siteTitle}`}</title>
            <link rel='canonical' href={`${config.siteUrl}/notAbout/`} />
          </Helmet>
          <div className='notAbout-container md-grid mobile-fix'>
            <Card className='md-grid md-cell--8'>
              <div className='notAbout-wrapper'>
                <img
                  src={config.userAvatar}
                  className='notAbout-img'
                  alt={config.userName}
                />
                <CardText>
                  <p className='notAbout-text md-body-1'>글자글자</p>
                  <p className='notAbout-text md-body-1'>카드텍스트</p>
                  <p className='notAbout-text md-body-1'>
                    {config.userDescription}
                  </p>
                </CardText>
                <UserLinks labeled config={config} />
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage2;
