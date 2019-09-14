const {app,BrowserWindow}=require('electron')
function createWindow(){
	let win=new BrowserWindow({
		width:700,
		height:500,
		webPreferences:{
			nodeIntegration:true,
		},
		// frame:false,
		// new property
		icon:'../camera.png'
	});
	// win.loadURL('https://keshavsingh.ml')
	win.loadFile('index.html');
	// link externel page
	require('./menu.js');
}
app.on('ready',createWindow)