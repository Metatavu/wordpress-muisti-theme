<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-language" content="<?php echo get_locale();?>">
<meta property="og:locale" content="<?php echo get_locale();?>" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.metatavu.io/fonts/tt_norms/stylesheet.css" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url') ?>/inc/loader.css">
<link rel="icon" type="image/png" href="<?php bloginfo('template_url') ?>/inc/favicon.png" sizes="512x512" />
<meta property="og:description" content='<?php $excerpt = strip_tags(get_the_excerpt()); echo $excerpt; ?>'/>
<?php
  $postId = get_the_ID();
  if (has_post_thumbnail($postId)) {
    $image = wp_get_attachment_image_src(get_post_thumbnail_id($postId), 'single-post-thumbnail')[0];
    echo sprintf('<meta property="og:image" content="%s"/>', $image);
  } else {
    // no featured image
  }
?>
<title>Muisti</title>
<script>
  window.THEME_PATH = "<?php bloginfo('template_url');?>";
</script>
