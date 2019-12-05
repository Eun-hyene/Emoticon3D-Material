import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import './BottomNav.scss';

class BottomNav extends Component {
  render() {
    return (
      <footer className='footer footer-fixed'>
        <div className='boxes-container'>
          <Button
            className='user-button'
            icon='fa-home'
            secondary
            key='about'
            iconClassName='fa fa-home'
            href='/Emoticon3D-Material/'
          >
            <p>반갑다</p>
          </Button>
          <Button
            className='user-button'
            icon='fa-beer'
            secondary
            key='menu1'
            iconClassName='fa fa-heart'
            href='/Emoticon3D-Material/about'
          >
            <p>친구야</p>
          </Button>

          <Button
            className='user-button'
            icon='faHome' // ??
            secondary
            key='variable-md-colors-warn'
            iconClassName='fa fa-comment'
            href='/Emoticon3D-Material/ThisIsNotAbout/about2'
          >
            <p>일요일은</p>
          </Button>
          <Button
            className='user-button'
            icon='faHome' // ??
            secondary
            key='menu3'
            iconClassName='fa fa-book'
            href='/Emoticon3D-Material/the-butterfly-of-the-edge'
          >
            <p>제발좀</p>
          </Button>
          <Button
            className='user-button'
            icon='faHome' // ???
            secondary
            key='menu4'
            iconClassName='fa fa-tag'
            href='/Emoticon3D-Material/-gatsby-material-starter'
          >
            <p>쉬게해줘</p>
          </Button>
        </div>
      </footer>
    );
  }
}

export default BottomNav;
