# dnd-publish

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app),
and functions as the content management system for the dnd-site project.

Admins and users can access this site to publish content into a s3 bucket,
which is then read by the dnd-site app.

It is intended to be hosted in parallel with the site application [wip].


Deploy with `npm run publish`,
test with `npm test`,
start with `npm start`,
and build with `npm build`.

## features
- aws s3 authentication for updating dnd-site
- creation of data.json
- dynamic data endpoint
