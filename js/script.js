

// スクロールしたらヘッダーの色変化
$(window).scroll(function () {
  if ($(window).scrollTop() > 1) {
    $('.header_inner').addClass('in_scroll');
  } else {
    $('.header_inner').removeClass('in_scroll');
  }
});


// ハンバーガーメニュー
const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});


// フォームモーダル
MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
});

//   flatpickr
flatpickr('#js-flatpickr', {
  // 選択日時の最小を指定
  minDate: "today",
  // 選択日時の最大を指定
  maxDate: new Date().fp_incr(365),
  // 日本語に変更
  'locale': 'ja',
  // 日付の期間選択が可能になります。
  mode: 'range'
});

// タブ切り替え
// タブ
const tabList = document.querySelectorAll('.tab-list-item');
// タブコンテンツ
const tabContent = document.querySelectorAll('.tab-contents-item');

//DOMが読み込み終わったら
document.addEventListener('DOMContentLoaded', function () {
  // タブに対してクリックイベントを適用
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', tabSwitch);
  }
  // タブをクリックすると実行する関数
  function tabSwitch() {
    // activeクラスを削除
    document.querySelectorAll('.active')[0].classList.remove('active');
    // クリックしたタブにactiveクラスを付与    
    this.classList.add('active');
    // showクラスを削除
    document.querySelectorAll('.show')[0].classList.remove('show');
    // タブを配列風オブジェクトとして定義
    const aryTabs = Array.prototype.slice.call(tabList);
    // クリックしたタブの配列番号を取得     
    const index = aryTabs.indexOf(this);
    // クリックしたタブと同じ配列番号のタブコンテンツにshowクラスを付与    
    tabContent[index].classList.add('show');
  };
});

// ふわっと表示させるaos.js
AOS.init({
  offset: 200,
  duration: 1000,
  easing: "ease-in-out-quad",
  delay: 300
});
