directoryDepth = "../".repeat(window.location.href.replace(/[^/A]/g, "").length-3)

var menuStr =
    `<li class="menu-bar__button">
    <a href="`+directoryDepth+`">Home</a>
    </li>
    <li class="menu-bar__button">
    <a href="`+directoryDepth+`aboutme/index.html">About Me</a>
    </li>
    <li class="menu-bar__button">
    <a href="`+directoryDepth+`resume/index.html">Resume</a>
    </li>
    <li class="menu-bar__dropdown">
    <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Classes</a>
    <div class="menu-bar__dropdown__content">
        <a href="`+directoryDepth+`webdesign/index.html" class="menu-bar__dropdown__content--link">Web Page Design</a>
        <a href="`+directoryDepth+`" class="menu-bar__dropdown__content--link">Animation</a>
        <a href="`+directoryDepth+`" class="menu-bar__dropdown__content--link">Architecture</a>
    </div>
    </li>`

var menuList = document.getElementById("menu-bar");
console.log(menuList);
menuList.innerHTML = menuStr;