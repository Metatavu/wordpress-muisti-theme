<?php
  $postId = get_the_ID();
  if (has_post_thumbnail($postId)) {
    $image = wp_get_attachment_image_src(get_post_thumbnail_id($postId), 'single-post-thumbnail')[0];
    echo sprintf('<meta property="og:image" content="%s"/>', $image);
  } else {
    echo sprintf('<meta property="og:image" content="%s"/>', get_bloginfo('template_url') .'/muisti-konsepti.png');
  }
?>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-language" content="<?php echo get_locale();?>">
<meta property="og:locale" content="<?php echo get_locale();?>" />
<meta property="og:url" content="<?php echo get_permalink();?>" />
<meta property="og:title" content="<?php echo get_the_title();?>" />
<meta property="og:description" content='<?php $excerpt = strip_tags(get_the_excerpt()); echo $excerpt; ?>'/>
<meta name="facebook-domain-verification" content="qesk28dscop3w9eooul46pp2rhpmns" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.metatavu.io/fonts/tt_norms/stylesheet.css" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url') ?>/inc/loader.css">
<link rel="icon" type="image/png" href="<?php bloginfo('template_url') ?>/inc/favicon.png" sizes="512x512" />
<title>Muisti</title>
<script>
  window.THEME_PATH = "<?php bloginfo('template_url');?>";
</script>

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '665410973866500');
  fbq('track', 'PageView');
</script>

<noscript>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=665410973866500&ev=PageView&noscript=1"/>
</noscript>

<!-- End Facebook Pixel Code -->