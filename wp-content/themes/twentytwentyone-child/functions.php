<?php
function admin_style() {
  wp_enqueue_style('admin_css', get_stylesheet_directory_uri().'/admin.css');
}
add_action('admin_enqueue_scripts', 'admin_style');
?>