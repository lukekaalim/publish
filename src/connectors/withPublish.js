import { connect } from 'react-redux';

import { uploadToBucket } from '../lib/aws';
import { dirty } from '../reducers/dirty';

const mapStateToProps = (state) => ({
  id: state.auth.id,
  secret: state.auth.secret,
  region: state.auth.region,
  game: state.game,
});

const mapDispatchToProps = {
  clearEdits: dirty.reset,
};

const BUCKET = 'ardentgirls.dating';
const KEY = 'game.json';

const WithPublish = ({ render, id, secret, region, game, clearEdits }) => (
  render(() =>
    uploadToBucket(secret, id, region, BUCKET, KEY, JSON.stringify(game))
    .then(clearEdits)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(WithPublish)
