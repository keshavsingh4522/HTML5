const{Menu,BrowserWindow}=require('electron')
var menu_list=[{label:'Homepage',submenu:[{label:'New File'},
               {label:'Save File'},{label:'Save As File'},{type:'separator'},{label:'open file'}]},
               {label:'Audio'},
               {label:'Video'},
               {label:'youtube',click:function(){youtube_window()},accelerator:'Ctrl+Shift+o'}]
var menu_design=Menu.buildFromTemplate(menu_list)
Menu.setApplicationMenu(menu_design)
function youtube_window(){
	var page=new BrowserWindow({
		width:400,
		height:400,
	})
	page.loadURL('https://m.youtube.com')
}