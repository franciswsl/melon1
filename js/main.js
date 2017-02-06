


// 鼠标移动切换
window.onload=function(){
	var infoLi1=document.getElementById('infoli1');
	var infoLi2=document.getElementById('infoli2');
	var infoLi3=document.getElementById('infoli3');
	var info1=document.getElementById('info1');
	var info2=document.getElementById('info2');
	var info3=document.getElementById('info3');
	infoLi1.onmouseenter=function(){
		info1.style.display='block';
		info2.style.display='none';
		info3.style.display='none';
	}
	infoLi2.onmouseenter=function(){
		info2.style.display='block';
		info1.style.display='none';
		info3.style.display='none';
	}
	infoLi3.onmouseenter=function(){
		info3.style.display='block';
		info2.style.display='none';
		info1.style.display='none';
	}
}

// 点击收藏分享
function chose(){
	var oImg1=document.getElementById('old1');
	var nImg1=document.getElementById('new1');
	var oImg2=document.getElementById('old2');
	var nImg2=document.getElementById('new2');
	var oImg3=document.getElementById('old3');
	var nImg3=document.getElementById('new3');
	oImg1.onclick=function(){
		oImg1.style.display='none';
		nImg1.style.display='block';
	}
	oImg2.onclick=function(){
		oImg2.style.display='none';
		nImg2.style.display='block';
	}
	oImg3.onclick=function(){
		oImg3.style.display='none';
		nImg3.style.display='block';
	}
}
chose();