// _headerTop
document
  .getElementById("_headerTopButtonControl")
  .addEventListener("click", function () {
    _headerTopControl();
  });

function _headerTopControl() {
  var _headerToptext = document.getElementById("_headerTopContentShow");
  if (_headerToptext.style.height == "100%") {
    _headerToptext.style.height = "3px";
  } else {
    _headerToptext.style.height = "100%";
  }
}

// ----------------------------------------------------------------

// _menu
function opencity(eve, titlename) {
  eve.stopPropagation();

  var i, tablink, tabcontent;
  var modal = document.getElementsByClassName("innerPage");
  for (i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  }

  document.getElementById(titlename).style.display = "block";

  tablink = document.getElementsByClassName("_menuContentLiA");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" _menuActive", "");
  }
  eve.currentTarget.className += " _menuActive";
}

// _menu > 消除內容
window.addEventListener("click", function (e) {
  removeContent = document.getElementsByClassName("innerPage");
  for (i = 0; i < removeContent.length; i++) {
    removeContent[i].style.display = "none";
  }
});

// -----------------------------------------

// nexLevelContent
function nexLevelContent(e, titleContent) {
  e.stopPropagation();

  var i, title, titleContent;
  var innerPage = document.getElementsByClassName("innerPageLiNexLevelUl");
  for (i = 0; i < innerPage.length; i++) {
    innerPage[i].style.display = "none";
  }

  document.getElementById(titleContent).style.display = "block";

  title = document.getElementsByClassName("innerPageLiNexLevelA");
  for (i = 0; i < title.length; i++) {
    title[i].className = title[i].className.replace(
      " nexLevelContentActive",
      ""
    );
  }
  e.currentTarget.className += " nexLevelContentActive";
}

// nexLevelContent > 消除內容
window.addEventListener("click", function (e) {
  removenexLevel = document.getElementsByClassName("innerPageLiNexLevelUl");
  for (i = 0; i < removenexLevel.length; i++) {
    removenexLevel[i].style.display = "none";
  }
});

// --------------------------

// screen480
document
  .getElementById("screen480Restraint")
  .addEventListener("click", function () {
    screen480Region();
  });

function screen480Region() {
  var screen480Operation = document.getElementById("screen480Restraint_Goal");
  if (screen480Operation.style.opacity == "1") {
    screen480Operation.style.opacity = "0";
    screen480Operation.style.height = "0";
  } else {
    screen480Operation.style.opacity = "1";
    screen480Operation.style.height = "600px";
  }
}

// ----------------------------------------------------------------

// _banner
var play = 1;
playArea(play);

function _bannerDotControl() {
  playArea((play = n));
}

function playArea(n) {
  var i;
  var _bannerContent = document.getElementsByClassName("__bannerContentImg");
  var dot = document.getElementsByClassName("_bannerDot");
  if (n > _bannerContent.length) {
    play = 1;
  }
  if (n < 1) {
    play = _bannerContent.length;
  }
  for (i = 0; i < _bannerContent.length; i++) {
    _bannerContent[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" _bannerActive", "");
  }
  _bannerContent[play - 1].style.display = "block";
  dot[play - 1].className += " _bannerActive";
}

setInterval(function () {
  playArea((play += 1));
}, 4000);

// ----------------------------------------------------------------

// goToTheTop
topContent = function() {
  var topscroll = document.documentElement.scrollTop || document.body.scrollTop;
  var topBlock = document.getElementById("goToTheTop");
  if (topscroll >= 250) {
    topBlock.style.display = "inline";
  }
  else {
    topBlock.style.display = "none";
  }
}

// ----------------------------------------------------------------

window.onscroll = function() {
  topContent();
}