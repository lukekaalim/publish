import {
    buildPropertyTypes,
    buildPropertyActions,
} from '../redux/property';

export const bucketNameTypes = buildPropertyTypes('bucket name');

export const {
  edit: editBucketName,
} = buildPropertyActions(bucketNameTypes, { saveLocal: true });

export const {
  EDIT: EDIT_BUCKET_NAME,
  RESET: RESET_BUCKET_NAME,
} = bucketNameTypes;
