const {remote}=require('electron')
document.querySelector('#min_win').onclick=function(){
	remote.getCurrentWindow().minimize();
}
document.querySelector('#max_win').onclick=function(){
	if(remote.getCurrentWindow().isMaximized())
	{
		remote.getCurrentWindow().unmaximize();
	}
	else
	{
		remote.getCurrentWindow().maximize()
	}
}
document.querySelector('#close_win').onclick=function(){
	remote.getCurrentWindow().close();
}