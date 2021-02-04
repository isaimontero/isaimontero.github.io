var i;
var btn=document.getElementById("btn")
window.onscroll=function(){
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
    document.getElementById("btn").style.display = "block"
    }
    else {
    document.getElementById("btn").style.display = "none"
    }
}
menu="a"
function c(){
    if(menu=="a"){
        document.getElementsByClassName("a")[1].style="transform:rotate(45deg)"
        document.getElementsByClassName("b")[1].style="opacity:0"
        document.getElementsByClassName("c")[1].style="transform:rotate(-45deg);margin-top:-15px"
        document.getElementById("menun").style="opacity:1;z-index:1"
        var x=document.getElementsByTagName("a")
        x[1].setAttribute("href","#top")
        x[2].setAttribute("href","#sec1")
        x[3].setAttribute("href","#sec2")
        x[4].setAttribute("href","#sec3")
        x[4].setAttribute("href","#sec4")
        x[4].setAttribute("href","#sec5")
        x[4].setAttribute("href","#sec6")
        x[4].setAttribute("href","#sec7")
        menu="b"
    }
    else{
        document.getElementsByClassName("a")[1].style="transform:rotate(0deg)"
        document.getElementsByClassName("b")[1].style="opacity:1"
        document.getElementsByClassName("c")[1].style="transform:rotate(0deg);margin-top:0px"
        document.getElementById("menun").style="opacity:0;z-index:-1"
        var x=document.getElementsByTagName("a")
        for(i=0;i<x.length;i++){
            x[i].removeAttribute("href")
        }
        x[0].setAttribute("href","#top")
        menu="a"
    }
}