$(function() {
  
  //laetud
    
  getTweets();
  
  
}); 


function getTweets(){
	
	//ajax

	$.ajax({
		url: "getfeed.php",
		success: function(data){
			
			//stringi teen massiiviks
			var array = JSON.parse(data).statuses;
			
			console.log(array);
			printTweets(array);
			
		},
		error: function(error){
			console.log(error);
		}
	});
	
}

function printTweets(newTweets){
	
	var html = '';
	
	$(newTweets).each(function(i, tweet){
		
		html += '<div class="item">'+
			
			'<div class="profile-image" style="background-image:url('+tweet.user.profile_image_url+')"></div>'+
			'<p>'+tweet.user.name+'</p>'+
			'<p>'+tweet.text+'</p>'+

		'</div>';
		
	});
	
	$("#content").append( $(html) );
	
}