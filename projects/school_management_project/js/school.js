// checking indexedDB in browser
window.indexedDB=window.indexedDB||window.msIndexedDB||window.mozIndexedDB||window.webkitIndexedDB;
// permission for read and write in indexedDB
window.IDBTransaction=window.IDBTransaction||window.msIDBTransaction||window.mozIDBTransaction||window.webkitIDBTransaction;
// key permission
window.IDBKeyRange=window.IDBKeyRange||window.msIDBKeyRange||window.mozIDBKeyRange||window.webkitIDBKeyRange;
alert('before')
if(!window.indexedDB)
{
	alert('not present')
}
else
{
	alert('hi how are you')
}
alert('after')
/*
	//insert in databse
// $("form").submit(function(){
			school_name=$("#sname").val();
			slogan=$("#slogan").val();
			phone_num_1=$("#pnum1").val();
			phone_num_2=$("#pnum2").val();
			emailID=$("#email").val();
			website_URL=$("#website").val()};
	var database=window.indexedDB.open('Wap Institute');
	database.onsuccess=function(){
		var idb=this.result;
		var data={
			school_name:school_name,
			slogan:slogan,
			phone_num_1:phone_num_1,
			phone_num_2:phone_num_2,
			emailID:emailID,
			website_URL:website_URL;
		var object=idb.createObjectStore('about_school',{keyPath:'school_name'});
		object.add(data);
	}
	// return false
// };	
*/