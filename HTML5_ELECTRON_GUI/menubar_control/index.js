const {app,BrowserWindow}=require("electron")
app.on("ready",function(){
  app_page=new BrowserWindow({
     width:720,
     height:480,
     webPreferences:{
     	nodeIntegration:true,
     },
     frame:false,
  });
  app_page.loadFile("index.html")
  //app_page.loadURL("https://keshavsingh.ml")
})
