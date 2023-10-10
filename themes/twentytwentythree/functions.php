<?php
// load css into the website's front-end
function load_external_files() {
  wp_enqueue_style( 'status-bar', get_template_directory_uri() . '/css/status-bar.css' ); 
  wp_enqueue_style( 'app-login', get_template_directory_uri() . '/css/app-login.css' );
  wp_enqueue_style( 'app-content', get_template_directory_uri() . '/css/app-content.css' );
  wp_enqueue_script( 'app-classes', get_template_directory_uri() . '/js/app-classes.js' );
  wp_enqueue_script( 'call-compass', get_template_directory_uri() . '/js/call-compass.js' );
  wp_enqueue_script( 'app-build', get_template_directory_uri() . '/js/app-build.js' );
  wp_enqueue_script( 'app-control', get_template_directory_uri() . '/js/app-control.js' );
}
add_action( 'wp_enqueue_scripts', 'load_external_files' );
?>