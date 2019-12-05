const config = {
  siteTitle: 'Emoticon - 3DYo', // Site title.
  siteTitleShort: '3DYo', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Emoticon - 3DYo', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://fliklab.github.io/Emoticon3D-Material/',
  pathPrefix: 'Emoticon3D-Material', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: 'A GatsbyJS stater with Material design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  siteGATrackingID: 'UA-47311644-4', // Tracking code ID for google analytics.
  disqusShortname: 'https-vagr9k-github-io-gatsby-material-starter', // Disqus shortname.
  postDefaultCategoryID: '추가하기', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'YYYY/MM/DD', // Date format for display.
  userName: 'Emoticon', // Username to display in the author segment.
  userEmail: 'Emoticon-HCI@emoticon.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'CAU, Seoul', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/fliklab/Emoticon3D-Material',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'jsh852@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'UI Design Project by Team Emoticon, 2019-2 HCI' // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
