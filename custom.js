$(document).ready(function(){
	console.log("Inside");

	$(".add").click(function(){
		var data = {
			"name" : $("#name").val(),
			"age" : $("#age").val(),
			"designation" : $("#designation").val(),
			"salary" : $("#salary").val()
		}
		$('table tbody').append('<tr><td>'+data.name+'</td><td>'+data.age+'</td><td>'+data.designation+'</td><td>'+data.salary+'</td></tr>');
	});

	//To assign VAlue to form

	$("#assign").click(function(){
		$("#new_name").val("Brend");
		$("#new_age").val("32");
		$("#new_desig").val("Team Lead");
		$("#new_sal").val("43000");
	});		
});