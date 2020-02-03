<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-language" content="${pageContext.request.locale.language}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.metatavu.io/fonts/tt_norms/stylesheet.css" />
<link rel="icon" type="image/png" href="<?php bloginfo('template_url') ?>/inc/favicon.png" sizes="512x512" />
<title>Muisti</title>
<script>
  window.THEME_PATH = "<?php bloginfo('template_url');?>";
</script>
<style>
  .loader {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    transition: opacity 0.5s ease-out;
  }
  #svgloader {
    width: 80px;
    height: 80px;
    margin: 20px;
  }
</style>
