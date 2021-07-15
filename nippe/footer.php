  <!-- footer -->
  <footer>
      <p class="copyright">Copyright 2017. 日ぺフレンドセンターAll Rights Reserved.</span>

  </footer>



  <!-- jsファイル -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/slick.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/common.js"></script>
<?php wp_footer(); ?>
</body>
</html>




<!-- バーガーメニュー(jquery) -->
<script type="text/javascript">

$(function() {
  $('#toggle').on('click', function() {
    $('body').toggleClass('is-open');
  });
});
</script>
