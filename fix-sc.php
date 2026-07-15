<?php
/**
 * Correccion de contenido demo — ServiCleaning LLC
 * Ejecutar con: wp eval-file fix-sc.php
 * Reemplaza textos de demostracion del tema por contenido real del negocio.
 */

$replacements = array(
  '-91 123 456 789' => '(801) 382-7633',
  '+91 123 456 789' => '(801) 382-7633',
  'You Call Call Us Any Time' => 'You Can Call Us Any Time',
  'Professional Security Services You Can Trust' => 'Professional Cleaning Services You Can Trust',
  'Our clinic was created to make your smile beautiful, healthy and snow white. We offer a wide range of dental treatment and dental restoration services. We have gathered only qualified specialists with extensive experience in the dental field. We will help you with any problem!' => 'ServiCleaning LLC proudly serves Orem and Utah County with residential and commercial cleaning. Our trained team delivers spotless results, flexible scheduling, and eco-friendly options — so you can enjoy a healthier home or workplace.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' => 'Quality cleaning services for homes and businesses in Orem and Utah County.',
  'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl Proin porta est convallis lacus blandit pretium sed non enim.' => 'See how our team transforms homes and offices across Utah County.',
);

// Los 4 bullets identicos se reemplazan en secuencia por textos distintos.
$bullet_old = 'Lorem Ipsum is simply dummy text printing.';
$bullets_new = array(
  'Licensed and insured cleaning team',
  'Eco-friendly products available',
  'Flexible scheduling that fits your life',
  '100% satisfaction guarantee',
);

global $wpdb;
$updated = 0;

// --- 1) Base de datos: paginas y posts ---
foreach ($replacements as $old => $new) {
  $like = '%' . $wpdb->esc_like($old) . '%';
  $rows = $wpdb->get_results($wpdb->prepare(
    "SELECT ID, post_content FROM {$wpdb->posts} WHERE post_status IN ('publish','draft') AND post_content LIKE %s", $like
  ));
  foreach ($rows as $row) {
    $content = str_replace($old, $new, $row->post_content);
    if ($content !== $row->post_content) {
      $wpdb->update($wpdb->posts, array('post_content' => $content), array('ID' => $row->ID));
      clean_post_cache($row->ID);
      $updated++;
      echo 'DB post ' . $row->ID . ': [' . substr($old, 0, 40) . "...]\n";
    }
  }
}

// Bullets: uno por uno dentro de cada post que los contenga.
$like = '%' . $wpdb->esc_like($bullet_old) . '%';
$rows = $wpdb->get_results($wpdb->prepare(
  "SELECT ID, post_content FROM {$wpdb->posts} WHERE post_status IN ('publish','draft') AND post_content LIKE %s", $like
));
foreach ($rows as $row) {
  $content = $row->post_content;
  foreach ($bullets_new as $new_bullet) {
    $pos = strpos($content, $bullet_old);
    if ($pos === false) break;
    $content = substr_replace($content, $new_bullet, $pos, strlen($bullet_old));
  }
  // Si quedaran mas de 4, todos los restantes usan el ultimo texto.
  $content = str_replace($bullet_old, end($bullets_new), $content);
  if ($content !== $row->post_content) {
    $wpdb->update($wpdb->posts, array('post_content' => $content), array('ID' => $row->ID));
    clean_post_cache($row->ID);
    $updated++;
    echo 'DB post ' . $row->ID . ": bullets reemplazados\n";
  }
}

// --- 2) Archivos de patrones del tema (si el texto vive en PHP, con respaldo .bak) ---
$all = $replacements;
$all[$bullet_old] = $bullets_new[0];
$dirs = array(
  get_template_directory() . '/includes/patterns/',
  get_stylesheet_directory() . '/includes/patterns/',
);
foreach ($dirs as $dir) {
  if (!is_dir($dir)) continue;
  foreach (glob($dir . '*.php') as $file) {
    $src = file_get_contents($file);
    $out = $src;
    foreach ($all as $old => $new) {
      if (strpos($out, $old) !== false) $out = str_replace($old, $new, $out);
    }
    if ($out !== $src) {
      copy($file, $file . '.bak-claude');
      file_put_contents($file, $out);
      $updated++;
      echo 'FILE: ' . basename($file) . "\n";
    }
  }
}

// --- 3) Purgar caches ---
if (function_exists('wp_cache_flush')) wp_cache_flush();
do_action('litespeed_purge_all');

echo "TOTAL CAMBIOS: {$updated}\n";
