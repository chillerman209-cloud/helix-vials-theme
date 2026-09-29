<?php
if (!defined('ABSPATH')) {
  exit;
}

function helix_vials_setup() {
  add_theme_support('title-tag');
  add_theme_support('html5', array('search-form', 'gallery', 'caption', 'style', 'script'));
}
add_action('after_setup_theme', 'helix_vials_setup');

function helix_vials_assets() {
  wp_enqueue_style('helix-vials', get_stylesheet_uri(), array(), '2026.09.29.1546');
  wp_enqueue_script('helix-vials', get_template_directory_uri() . '/assets/app.js', array(), '2026.09.29.1546', true);
  wp_localize_script('helix-vials', 'HELIX', array(
    'base' => get_template_directory_uri() . '/assets',
    'ajax' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('helix_order'),
  ));
}
add_action('wp_enqueue_scripts', 'helix_vials_assets');

function helix_vials_document_title($title) {
  return 'Helix Vials — Research peptides';
}
add_filter('pre_get_document_title', 'helix_vials_document_title');

function helix_send_order() {
  check_ajax_referer('helix_order', 'nonce');
  $invoice = isset($_POST['invoice']) ? sanitize_text_field(wp_unslash($_POST['invoice'])) : '';
  $order = isset($_POST['order']) ? sanitize_textarea_field(wp_unslash($_POST['order'])) : '';
  $reply = isset($_POST['reply']) ? sanitize_email(wp_unslash($_POST['reply'])) : '';
  if ($invoice === '' || $order === '') {
    wp_send_json(array('ok' => false, 'message' => 'The order was missing. Submit checkout again.'));
  }
  $to = 'cpeptidessales@gmail.com';
  $subject = 'Helix Vials invoice ' . $invoice;
  $from = sanitize_email(get_option('admin_email'));
  $headers = array('Content-Type: text/plain; charset=UTF-8');
  if ($from) {
    $headers[] = 'From: Helix Vials <' . $from . '>';
  }
  if ($reply) {
    $headers[] = 'Reply-To: ' . $reply;
  }
  $sent = wp_mail($to, $subject, $order, $headers);
  if (!$sent) {
    wp_send_json(array('ok' => false, 'message' => 'The site could not send the email. Tap the button again.'));
  }
  wp_send_json(array('ok' => true));
}
add_action('wp_ajax_helix_order', 'helix_send_order');
add_action('wp_ajax_nopriv_helix_order', 'helix_send_order');
