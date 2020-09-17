<?php 
  add_action('after_setup_theme', function() { 
    add_theme_support('post-thumbnails');
    register_nav_menus([
      'main' => __('Main Navigation', "muisti"),
      'locale' => __('Localization menu', "muisti"),
      'site' => __('Site Navigation', "muisti"),
      'quick' => __('Quick Links', "muisti"),
      'footer' => __('Footer Navigation', "muisti")
    ]);
  });

  function custom_preview_page_link($link, $post) {
    $id = get_the_ID();
    $nonce = wp_create_nonce('wp_rest');
    $modified_link = add_query_arg(['nonce' => $nonce], $link);
    return $modified_link;
  }
  add_filter('preview_post_link', 'custom_preview_page_link', 10, 2);

  function fix_preview_link_on_draft() {
    echo '<script type="text/javascript">
        jQuery(document).ready(function () {
            const checkPreviewInterval = setInterval(checkPreview, 1000);
            function checkPreview() {
                const editorPreviewButton = jQuery(".editor-post-preview");
                const editorPostSaveDraft = jQuery(".editor-post-save-draft");
                if (editorPostSaveDraft.length && editorPreviewButton.length && editorPreviewButton.attr("href") !== "' . get_preview_post_link() . '" ) {
                    editorPreviewButton.attr("href", "' . get_preview_post_link() . '");
                    editorPreviewButton.off();
                    editorPreviewButton.click(false);
                    editorPreviewButton.on("click", function() {
                        editorPostSaveDraft.click();
                        setTimeout(function() { 
                            const win = window.open("' . get_preview_post_link() . '", "_blank");
                            if (win) {
                                win.focus();
                            }
                        }, 1000);
                    });
                }
            }
        });
    </script>';
}
  add_action('admin_footer', 'fix_preview_link_on_draft');
?>
