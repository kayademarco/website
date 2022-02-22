directoryDepth = "../".repeat(window.location.href.replace(/[^/A]/g, "").length-3)

var menuStr =
    `<li class="menu-bar__button">
    <a href="`+directoryDepth+`website">Home</a>
    </li>
    <li class="menu-bar__button">
    <a href="`+directoryDepth+`website/aboutme/index.html">About Me</a>
    </li>
    <li class="menu-bar__button">
    <a href="`+directoryDepth+`website/resume/index.html">Resume</a>
    </li>
    <li class="menu-bar__dropdown">
    <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Classes</a>
    <div class="menu-bar__dropdown__content">
    <a href="`+directoryDepth+`website/webdesign/headfirst/hfprogramming/Chapter 9" class="menu-bar__dropdown__content--link">Current Web Work</a>
        <a href="`+directoryDepth+`website/webdesign/index.html" class="menu-bar__dropdown__content--link">Web Page Design</a>
    </div>
    </li>`

   // <a href="`+directoryDepth+`" class="menu-bar__dropdown__content--link">Animation</a>
   // <a href="`+directoryDepth+`" class="menu-bar__dropdown__content--link">Architecture</a>

var menuList = document.getElementById("menu-bar");
console.log(menuList);
menuList.innerHTML = menuStr;