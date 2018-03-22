/**
 * mian
 */

/**
 * click
 */
const HTML = document.documentElement
HTML.addEventListener('click', (e) => {
  const TOGGLE_NAV = document.getElementById('toggle-nav')
  if (e.target === TOGGLE_NAV) {
    __SheepNav__.toggleNav()
  } else if (!e.target.classList.contains('site-page')) {
    __SheepNav__.hideNav()
  }
},
false)

/**
 * scroll
 */
const NAV = document.getElementById('nav-bar')
window.onscroll = function () {
  let currentTop = HTML.scrollTop || document.body.scrollTop
  if (__SheepScroll__.isScrollDown(currentTop) && __SheepScroll__.isOverHeaderNav(currentTop)) {
    NAV.classList.add('fixed')
    NAV.classList.remove('visible')
  } else if (!__SheepScroll__.isScrollDown(currentTop) && NAV.classList.contains('fixed')) {
    NAV.classList.add('visible')
    if (currentTop === 0) {
      NAV.classList.remove('fixed')
    }
  }
}

// 添加复制文章内容自动增加作者信息
function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection;

    if( window.getSelection ) {//DOM,FF,Webkit,Chrome,IE10
        selection = window.getSelection();
    } else if( document.getSelection ) {//IE10
        selection= document.getSelection();

    } else if( document.selection ) {//IE6+10-
        selection= document.selection.createRange().text;
    } else {
        selection= "";
    }

    var pagelink = "<br /><br /> 作者：小bbbbbb<br />链接： <a href='"+document.location.href+"'>"+document.location.href+"</a><br />来源：佛性前端<br />生活不止眼前的枸杞。";
    var copy_text = selection + pagelink;
    var new_div = document.createElement('div');
    new_div.style.left = '-99999px';
    new_div.style.position = 'absolute';
    body_element.appendChild( new_div );
    new_div.innerHTML = copy_text ;
    selection.selectAllChildren( new_div );
    window.setTimeout(function() {
        body_element.removeChild( new_div );
    }, 0 );
}
document.body.oncopy = addLink;
