window.onload=function(){
	responsive_height();
	open_url();
	loader_run()
	backward()
	forward()
}
window.onresize=function(){
	responsive_height();
}
//responsive height
function responsive_height(){
	var header_height=document.querySelector('header').offsetHeight;
	var page_height=document.querySelector('html').clientHeight;
	var rest_height=page_height-header_height;
	document.querySelector('webview').style.height=rest_height+"px";
}
// open url
function open_url(){
	document.querySelector("form").onsubmit=function(){
		var url_value=document.querySelector(".search").value;
		document.querySelector('webview').src=url_value;
		return false;
	}
}
// loader coading
function loader_run(){
	var webview=document.querySelector("webview")
	webview.addEventListener("did-start-loading",function(){
		$('.load').addClass('loader')
	})
	webview.addEventListener("did-finish-load",function(){
		$('.load').removeClass('loader')
		display_url()
	})
}
// display url
function display_url(){
	var webview=document.querySelector('webview');
	document.querySelector('.search').value=webview.getURL();
}
// backward URL
function backward()
{
	var webview=document.querySelector('webview');
	document.querySelector('.back').onclick=function(){
		webview.goBack();
	}
}
// forward URL
function forward()
{
	var webview=document.querySelector('webview');
	document.querySelector('.forward').onclick=function(){
		webview.goForward();
	}
}