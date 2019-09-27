// check compatiability of browse
window.indexedDB=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;
//take permission of read and write
window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.mozIDBTransaction||window.msIDBTransaction;
//key permission
window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.mozIDBKeyRange||window.msIDBKeyRange;
if(!window.indexedDB)
{
	alert('not comp');
}
else
{
	$(document).ready(function(){
	$("#register-form").on('submit',function(){
		var school_name=$("#school-name").val();
	    var tag_line=$("#tag-line").val();
	    var email=$("#email").val();
	    var website=$("#website").val();
	    var address=$("#address").val();	
	    var database=window.indexedDB.open(school_name);
	    database.onupgradeneeded=function(){
	    	var idb=this.result;
	    	var data={
	    		school_name:school_name,
	    		tag_line:tag_line,
	    		email:email,
	    		website:website,
	    		address:address,
	    	};
	    	var object=idb.createObjectStore('about_school',{keyPath:'school_name'});
	    	object.add(data);
	    }
	    database.onsuccess=function(){
	    	$("#message").removeClass('d-none');
	    	$("#message").addClass('alert-success');
	    	$("#message").append('<b>Success !</> dear admin please login...');
	    }
	    database.onerror=function(){
	    	$("#message").removeClass('d-none');
	    	$("#message").addClass('alert-warning');
	    	$("#message").append('<b>Oops !</> something wrong please contact 9982761929...');
	    }
	  });
    });
}