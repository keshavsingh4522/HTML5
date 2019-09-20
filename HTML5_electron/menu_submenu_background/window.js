const {remote}=require('electron')
document.querySelector('#max').onclick=function(){
	if(remote.getCurrentWindow().isMaximized())
	{
		remote.getCurrentWindow().unmaximize()
	}
	else
	{
		remote.getCurrentWindow().maximize()
	}
}
document.querySelector('#min').onclick=function(){
	remote.getCurrentWindow().minimize()
}
document.querySelector('#close').onclick=function(){
	remote.getCurrentWindow().close()
}
console.log('hello')