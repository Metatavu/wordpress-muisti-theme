<html>
  <head>
    <?php require get_template_directory() . '/inc/template-head-generic.php'; ?>
  </head>
  <body>
    <?php
      $preview = $_GET["preview"];
      $nonce = $_GET["nonce"];
      $pageId = $_GET["page_id"];
      $p = $_GET["p"];
      $previewId = $_GET["preview_id"];


      if ($preview && !$nonce) {
        $nonce = wp_create_nonce('wp_rest');
        wp_redirect("/?page_id=$pageId&p=$p&preview_id=$previewId&preview=true&nonce=$nonce");
        exit;
      }
    ?>

    <?php if (preg_match('~MSIE|Internet Explorer~i', $_SERVER['HTTP_USER_AGENT']) || preg_match('~Trident/7.0(; Touch)?; rv:11.0~',$_SERVER['HTTP_USER_AGENT']) === 0) { ?>
      <?php require get_template_directory() . '/inc/template-loader.php'; ?>
      <div id="root"></div>
      <script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/dist/bundle.js"></script>
    <?php } else { ?>
      <?php require get_template_directory() . '/inc/template-deprecation-warning.php' ?>
    <?php } ?>
  </body>
</html>