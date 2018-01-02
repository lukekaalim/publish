import { connect } from 'react-redux';

import { uploadToBucket } from '../../lib/aws-utils';

const mapStateToProps = (state) => ({
  id: state.auth.id,
  secret: state.auth.secret,
  region: state.auth.region,
  game: state.game,
});

const BUCKET = 'ardentgirls.dating';
const KEY = 'game.json';

const WithPublish = ({ render, id, secret, region, game }) => (
  render(
    () => uploadToBucket(secret, id, region, BUCKET, KEY, JSON.stringify(game))
  )
);

export default connect(mapStateToProps)(WithPublish)
