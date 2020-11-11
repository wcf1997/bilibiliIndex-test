window.onload = function (){
    var banner = document.querySelector('.adv-area>.img');
    var spanBox = document.getElementsByClassName('circleSelect')[0];
    var span = spanBox.getElementsByTagName('span');
    var zBnav = document.getElementById('tab');
    var zBli = zBnav.getElementsByTagName('li')
    var zBcontainer = document.getElementById('rightContainer');
    var zBul = zBcontainer.getElementsByTagName('ul');
    var asideBtn = document.querySelectorAll('aside ul>li')
    var week = document.getElementsByClassName('week')[0];
    var weekSpan = week.getElementsByTagName('span') ;
    var animList = document.getElementsByClassName('animList');
    var morenClass = asideBtn[0].className;
    var index;
    var offset;
    //轮播图
    banner.style.marginLeft = 0
    var timer;
    lunbo()
    function lunbo(){
        timer = setInterval(function(){
            offset = 1;
            banner.style.marginLeft = parseInt(banner.style.marginLeft) - offset +'px';
            if(parseInt(banner.style.marginLeft) <= -2750){
                banner.style.marginLeft = 0;
            }
            if(banner.offsetLeft % 550 === 0){
               
            }
            index = parseInt(0-banner.offsetLeft/550)
            for(var i = 0; i<span.length;i++){
                span[i].className = '';
            }
            span[index].className = 'select';
    
        },10)   
       
    }
    banner.onmouseenter = function(){
        clearInterval(timer);
    }
    banner.onmouseleave = function(){
        lunbo()
    }
    for(var i = 0; i<span.length;i++){
        (function(n){
            span[n].onmouseenter = function(){
                clearInterval(timer);
                for(var i = 0; i<span.length;i++){
                    span[i].className = ''
                }   
                span[n].className = 'select';
                banner.style.marginLeft = 0 - 550 * n + 'px';
            }
            span[n].onmouseleave = function(){
                lunbo();
            }
        })(i)
    }


  var div = document.getElementsByTagName('div')[0]
// 添加类
  function addClass(ele,cs){
    var css =  ele.className || '';
    var newC = cs.split()
    if(css.indexOf(cs) == -1){
          for(var i = 0; i<newC.length;i++){
          css = css + ' ' + newC[i] + ' ';
      }
    }
    return ele.className = css;

 
}

// 移除class
function removeClass(ele,css){
    var allClass = ele.className;
    if(allClass.indexOf(css) != -1){
        allClass = allClass.replace(css,'');

    }
    return ele.className = allClass;
    
}
//  直播右侧选项卡
for(var i = 0;i < zBli.length; i++){
    (function(n){
        
       zBli[i].onclick = function(){
           for(var j = 0; j < zBul.length;j++){
               zBli[j].className = '';
               addClass(zBul[j],'hide')
           }   
            this.className='select';   //为当前选项卡添加样式
            removeClass(zBul[n],'hide')
           
       }
    }(i))
 
   }
// 番剧选项卡
for(var i = 0; i<weekSpan.length; i++){
    (function(n){
        weekSpan[n].onclick = function(){
            for(var j = 0; j<weekSpan.length ; j++){
                weekSpan[j].className = '';
                addClass(animList[j],'hide');
            }
            addClass(weekSpan[n],'select');
            removeClass(animList[n],'hide');
            console.log(animList[n].className)
        }
    })(i)
}

let anchor = document.querySelector('.anchor')
let animation = document.querySelector('.animation')
let animationType = document.querySelector('.animationType')
let navidistanceArr = [anchor.offsetTop,
    animation.offsetTop, animationType.offsetTop,
   Number.MAX_SAFE_INTEGER]
   console.log(navidistanceArr);
window.onscroll = function() {
   let distanceTop = window.pageYOffset;
   for (let i = 0; i < navidistanceArr.length; i++) {
       if (distanceTop != 0 && distanceTop>=navidistanceArr[i] &&
        distanceTop<navidistanceArr[i+1]) {
             for (let i = 0; i < asideBtn.length; i++) {
                 asideBtn[i].classList.remove('asideActive')
             }
             asideBtn[i].classList.add('asideActive')
             console.log(navidistanceArr[i]);
       }
       if (distanceTop < navidistanceArr[0]) {
        asideBtn[0].classList.remove('asideActive')
       }
   }
}
}