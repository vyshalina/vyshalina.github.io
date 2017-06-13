$(document).ready(function(){  
	/*Передаем на сервер числа*/
	$.post('a1.php', {'num1':'7', 'num2' : '9'},
		function(res) {
			$('#result').html(res);
	});

	/*Передаем год рождения и высчитываем возраст*/        
	$('#formAge').submit(function(){  
	    $.ajax({  
	        type: "POST",  
	        url: "a2.php",  
	        data: "year="+$("#myYear").val(),  
	        success: function(html){  
	            $("#myAge").html(html);  
	        }  
	    });  
	    return false;  
	});  


	//Высчитываем идеальный вес
	$('#weight').submit(function(){  
	    $.ajax({  
	        type: "POST",  
	        url: "a3.php",  
	        data: {sex: $("input:radio[name='sex1']:checked").val(), height:+$("#height1").val() },  
	        success: function(we){  
	            $("#myWeight").html(we);  
	        }  
	    });  
	    return false;  
	});

	$('#weightRange').submit(function(){  
	    $.ajax({  
	        type: "POST",  
	        url: "a3.php",  
	        data: {sex: $("input:radio[name='sex2']:checked").val(), height:+$("#height2").val() },  
	        success: function(w){  
	            $("#myWeightR").html(w);  
	        }  
	    });  
	    return false;  
	});

	//Выводим значения ползунка
	$(function() {
		var el;
		$("#height2").change(function() {
		el = $(this);
		el
		.next("#output")
		.text(el.val());
		})
		.trigger('change');
		});

	//FeedBack
	$("#feedBack").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: str,
			success: function(mess){  
	            $("#feedBackMes").html(mess);  
	        } 
				
		});
		return false;
	});


	//Получение JSON строки
	$("#showList").click(function() {
		$.ajax({
			url: "goods.php",
			data: {art:($("input:radio[name='list']:checked").val())},
			success: function(listData){  
	            var object = jQuery.parseJSON(listData); 
	            $("#jsonLine").html(
	            '<li>' + 'name' + ' - ' + object.name + '</li>' +
	            '<li>' + 'weight' + ' - ' + object.weight + '</li>' +
	            '<li>' + 'cost' + ' - ' + object.cost + '</li>' +
	            '<li>' + 'img' + ' - ' + '<img' + ' src' + '=' + '"' + object.img + '"' + '>' + '</li>'
	            );   	
	        } 
		});
		return false;
	});
           
});// $(document).ready(function()

