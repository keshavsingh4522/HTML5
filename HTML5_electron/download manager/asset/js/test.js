$(document).ready(function(){
	var webview=document.querySelector('webview')
	webview.addEventListener('did-start-loading',function(){
		$('.load').addClass('loader')
	})
});