/**
 * Implements hook_image_path_alter().
 */
function amazons3_image_path_alter(src) {
  try {
    if (src.indexOf('s3://') != -1) {
      src = src.replace('s3://', drupalgap.settings.amazons3.file_public_path + '/');
    }
    else { src = false; }
    return src;
  }
  catch (error) { drupalgap_error(error); }
}

