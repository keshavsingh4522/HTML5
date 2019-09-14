const{remote}= require('electron')
document.querySelector('#min_btn').onclick=function(){
	remote.getCurrentWindow().minimize();
}
document.querySelector('#max_btn').onclick=function(){
	if(remote.getCurrentWindow().isMaximized())
	{
		remote.getCurrentWindow().unmaximize()
	}
	else
	{
		remote.getCurrentWindow().maximize()
	}
}
document.querySelector('#close_btn').onclick=function(){
	remote.getCurrentWindow().close();
}