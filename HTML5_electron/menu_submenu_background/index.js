const {app,BrowserWindow,Menu,MenuItem,Tray}=require('electron')
app.on('ready',create_window)
function create_window(){
	var page=new BrowserWindow({
		// width:400,
		// height:400,
		// frame:false,
		// fullscreen:true,
		webPreferences:{
			nodeIntegration:true,
		},
		icon:'k.png'
	});
	page.loadFile('index.html');
	require('./menu.js')

	// right click menu(context-menu)
	var menu_box=new Menu()//box created
	menu_box.append(new MenuItem({label:'new folder'}))
	menu_box.append(new MenuItem({label:'open'}))
	menu_box.append(new MenuItem({label:'open with'}))
	page.webContents.on('context-menu',function(event,cursor){
		menu_box.popup(page,cursor.x,cursor.y)
	})

	//run in background
	page.on('close',function(event){
		event.preventDefault();// close stop on click
		page.hide()//onclick it hide
		var tray=new Tray('k_01.png') //place in tray with icon onclick
		tray.on('click',function(){   //from tray onclick it show
			page.show()
		})
		var close=Menu.buildFromTemplate([{label:'close',click:function(){
			app.quit()
		}}])
		tray.setContextMenu(close)
	}) 
}