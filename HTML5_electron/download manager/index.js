const{app,BrowserWindow,Menu}=require('electron')
app.on('ready',create_window)
function create_window(){
	page=new BrowserWindow({
		webPreferences:{
			nodeIntegration:true,
			webviewTag:true,
		},
		icon:'asset/images/icon.png',
		title:'Internet Download Manager',
	})
	page.setMenuBarVisibility(false)
	// page.loadFile('./asset/index.html')
	page.loadFile('./asset/index.html')
}