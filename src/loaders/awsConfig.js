import { editBucketName } from '../actions/config';

export const loadAwsConfig = (dispatch) => (
  (process.env.NODE_ENV === 'production' ?
    fetch('./config.json').then(response => response.json())
    :
    import('../config').then(module => module.default)
  ).then(config => {
    dispatch(editBucketName(config.bucket));
  })
);
