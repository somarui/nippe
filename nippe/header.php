<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- css -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/reset.css" type="text/css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/common.css" type="text/css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>css/add_style.css" type="text/css">
  
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!-- slick -->
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/slick.css"/>

  <title>nippeフレンドセンター</title>


<?php wp_head(); ?>
</head>




<body class="<?php echo esc_attr($post->post_name);?>">


<header>
  <div class="logo"><a href="<?php bloginfo('url') ;?>">日ペフレンドセンター</a></div>



  <div id="toggle">
      <div id="toggle-box">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>

    <div id="nav-content">
      <div class="nav_bgimg"></div>
      <nav>
        <ul>
          <li class="fadein_c"><a href="<?php bloginfo('url') ;?>">top</a></li>
          <li class="fadein_c"><a href="<?php bloginfo('url') ;?>/service">Service</a></li>
          <li class="fadein_c"><a href="<?php bloginfo('url') ;?>/price">Price</a></li>
          <li class="fadein_c"><a href="<?php bloginfo('url') ;?>/Contact">Contact</a></li>
        </ul>
      </nav>
    </div>



</header>

</body>
</html>