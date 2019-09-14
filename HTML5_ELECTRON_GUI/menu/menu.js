const {Menu,BrowserWindow}=require('electron');
var menu_list=[{label:'homepage',submenu:[{label:'youtube',accelerator:'Ctrl+Shift+o',click:function(){youtube_window()}},
              {label:'video'}]},
              {label:'about us',submenu:[{label:'menu-1'},{type:'separator'},{label:'menu-2'},{type:'separator'},{label:'menu-3'}]}];
var design_menu=Menu.buildFromTemplate(menu_list);
Menu.setApplicationMenu(design_menu);

// youtube
function youtube_window(){
	var youtube_page=new BrowserWindow({
		width:480,
		height:480,
	});
	youtube_page.loadURL('https://m.youtube.com');
}