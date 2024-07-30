const form=document.querySelector("form");
const video=document.querySelector("video");
const image=document.querySelector('img');
const result=document.querySelector(".result");
form.onsubmit=(e)=>{
e.preventDefault();
let input=document.querySelector(".search").value;
if(input=="a" || input=="A"){
    video.src="videos/a.mp4";
    image.src="images/a.jpg";
    result.innerHTML="A For Apple";
}
else if(input=="b" || input=="B"){
    video.src="videos/b.mp4";
    image.src="images/b.jpg";
    result.innerHTML="B For Ball";
}
else if(input=="c" || input=="C"){
    video.src="videos/c.mp4";
    image.src="images/c.jpg";
    result.innerHTML="C For Cat";
}
else if(input=="d" || input=="D"){
    video.src="videos/d.mp4";
    image.src="images/d.jpg";
    result.innerHTML="D For Dog";
}
else if(input=="e" || input=="E"){
    video.src="videos/e.mp4";
    image.src="images/e.jpg";
    result.innerHTML="E For Elephant";
}
else if(input=="f" || input=="F"){
    video.src="videos/f.mp4";
    image.src="images/f.jpg";
    result.innerHTML="F For Fish";
}
else if(input=="g" || input=="G"){
    video.src="videos/g.mp4";
    image.src="images/g.jpg";
    result.innerHTML="G For Grapes";
}
else if(input=="h" || input=="H"){
    video.src="videos/h.mp4";
    image.src="images/h.jpg";
    result.innerHTML="H For Hen";
}
else if(input=="i"  || input=="I"){
    video.src="videos/i.mp4";
    image.src="images/i.jpg";
    result.innerHTML="I For Ice";
}
else if(input=="j"  || input=="J"){
    video.src="videos/j.mp4";
    image.src="images/j.jpg";
    result.innerHTML="J For Jug";
}
else if(input=="k"  || input=="K"){
    video.src="videos/k.mp4";
    image.src="images/k.jpg";
    result.innerHTML="K For Kettel";
}
else if(input=="l"  || input=="L"){
    video.src="videos/l.mp4";
    image.src="images/l.jpg";
    result.innerHTML="L For Lion";
}
else if(input=="m"  || input=="M"){
    video.src="videos/m.mp4";
    image.src="images/m.jpg";
    result.innerHTML="M For Monkey";
}
else if(input=="n"  || input=="N"){
    video.src="videos/n.mp4";
    image.src="images/n.jpg";
    result.innerHTML="N For Night";
}
else if(input=="o" || input=="O"){
    video.src="videos/o.mp4";
    image.src="images/o.jpg";
    result.innerHTML="O For Orange";
}
else if(input=="p"  || input=="p"){
    video.src="videos/p.mp4";
    image.src="images/p.jpg";
    result.innerHTML="P For Parrot";
}
else if(input=="q"  || input=="Q"){
    video.src="videos/q.mp4";
    image.src="images/q.jpg";
    result.innerHTML="Q For Queen";
}
else if(input=="r"  || input=="R"){
    video.src="videos/r.mp4";
    image.src="images/r.jpg";
    result.innerHTML="R For Rose";
}
else if(input=="s"  || input=="S"){
    video.src="videos/s.mp4";
    image.src="images/s.jpg";
    result.innerHTML="S For Sun";
}
else if(input=="t"  || input=="T"){
    video.src="videos/t.mp4";
    image.src="images/t.jpg";
    result.innerHTML="T For Tiger";
}
else if(input=="u"  || input=="U"){
    video.src="videos/u.mp4";
    image.src="images/u.jpg";
    result.innerHTML="U For Umbrelaa";
}
else if(input=="v" || input=="V"){
    video.src="videos/v.mp4";
    image.src="images/v.jpg";
    result.innerHTML="V For Video Game";
}
else if(input=="w"  || input=="W"){
    video.src="videos/w.mp4";
    image.src="images/w.jpg";
    result.innerHTML="W For Watch";
}
else if(input=="x"  || input=="X"){
    video.src="videos/x.mp4";
    image.src="images/x.jpg";
    result.innerHTML="X For X-Mas Tree";
}
else if(input=="y"  || input=="Y"){
    video.src="videos/y.mp4";
    image.src="images/y.jpg";
    result.innerHTML="Y For Yak";
}
else if(input=="z"  || input=="Z"){
    video.src="videos/z.mp4";
    image.src="images/z.jpg";
    result.innerHTML="Z For Zebra";
}
else{
   result.innerHTML="Apphabet Not Found";
}
}