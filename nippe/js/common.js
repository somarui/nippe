// スクロールでクラス付与
$(window).scroll(function () {
  if($(window).scrollTop() > $(window).height()) {
    $('#toggle').addClass('togglefix');
    $('#toggle').addClass('fadein_a');
  } else {
    $('#toggle').removeClass('togglefix');
    $('#toggle').removeClass('fadein_a');
  }
  });

  // スマートフォンでアドレスバー省いた全画面表示
$(document).ready(function(){
  var hSize = $(window).height();
    $('.height_cover').height(hSize); // アドレスバーを除いたサイズを付与
  });
  $(window).resize(function(){ // ページをリサイズした時の処理
  var hSize = $(window).height();
    $('.height_cover').height(hSize); // アドレスバーを除いたサイズを付与
  });
  
  
  // .fadeUpTrigger到達時、別クラスに.fadein_を付与
  function fadeAnime(){
  
  $('.fadeUpTrigger_a').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadein_a');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadein_a');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
  
  $('.fadeUpTrigger_b').each(function(){
  var elemPos = $(this).offset().top-50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadein_b');
  }else{
  $(this).removeClass('fadein_b');
  }
  });
  $('.fadeUpTrigger_c').each(function(){
  var elemPos = $(this).offset().top-50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadein_c');
  }else{
  $(this).removeClass('fadein_c');
  }
  });
  
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
  
  // ページトップリンク
  $(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });


  //jQuery アドレスバー除く高さ取得
$('.bar_100vh').css('height',$(window).height());