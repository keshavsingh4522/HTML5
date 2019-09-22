const {app,BrowserWindow}=require("electron")
app.on('ready',create_window)
function create_window(){
	var page=new BrowserWindow({
		frame:false,
		width:300,
		height:480,
		borderRadius:15,
	});
	page.loadFile('index.html')
}