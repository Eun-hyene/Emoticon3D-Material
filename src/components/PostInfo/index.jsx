import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'gatsby';
import moment from 'moment';
import _ from 'lodash';
import config from '../../../data/SiteConfig';
import './PostInfo.scss';

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className='post-info'>
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName='fa fa-calendar' />} />}
          title={`Published on ${moment(postNode.fields.date).format(
            config.dateFormat
          )}`}
          subtitle={`출력예상시간 : ${postNode.timeToRead}시간 이내`}
        />
        <Link
          className='category-link'
          to={`/categories/${_.kebabCase(post.category)}`}
        >
          <CardTitle
            avatar={
              <Avatar icon={<FontIcon iconClassName='fa fa-folder-open' />} />
            }
            title='MY 콜렉션'
            subtitle={post.category}
          />
        </Link>
      </div>
    );
  }
}

export default PostInfo;
