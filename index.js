var messages = true;
var mensajes1 = "";
$(document).ready(function(){
	$('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
	});
	function cambiar(esto)
	{
	vista=document.getElementById(esto).style.display;
	if (vista=='none')
		vista='block';
	else
		vista='none';

	document.getElementById(esto).style.display = vista;
	}
	
	$.getJSON("timelinemio.json")
	.done(function(data) {
			for(var i = 0; i< data.length ;i++){
				var Autor = data[i].Autor;
				$("#content").html(Autor);
				var Titulo = data[i].Titulo;
				var Contenido = data[i].Contenido;
				var Fecha = data[i].Fecha;
				var FirstLine = "<img src="+ data[i].Avatar+" style='width: 100px; height: 100px;'>"+ " " + Autor + ": " +  Titulo;
				mensajes1 += "<h3>"+FirstLine+"</h3><div><p>"+Contenido+"<br>"+Fecha+"</p></div> ";
				
			}
			$("#tab1").html(mensajes1);
	});
	
	$.getJSON("myline.json")
	.done(function(data) {
			var mensajes2 = "";
			for(var i = 0; i< data.length ;i++){
				var Autor = data[i].Autor;
				$("#content").html(Autor);
				var Titulo = data[i].Titulo;
				var Contenido = data[i].Contenido;
				var Fecha = data[i].Fecha;
				var FirstLine = "<img src="+ data[i].Avatar+" style='width: 100px; height: 100px;'>"+ " " + Autor + ": " +  Titulo;
				mensajes2 += "<h3>"+FirstLine+"</h3><div><p>"+Contenido+"<br>"+Fecha+"</p></div> ";
				
			}
			$("#tab2").html(mensajes2);
	});
	
	$.getJSON("update.json")
	.done(function(data){
		var mensajes3 = "";
		$("#botonmsg").click(function(){
			if (messages){
				messages = false;
				for(var i = 0; i< data.length ;i++){
					var Autor = data[i].Autor;
					$("#content").html(Autor);
					var Titulo = data[i].Titulo;
					var Contenido = data[i].Contenido;
					var Fecha = data[i].Fecha;
					var FirstLine = "<img src="+ data[i].Avatar+" style='width: 100px; height: 100px;'>"+ " " + Autor + ": " +  Titulo;
					mensajes3 += "<h3>"+FirstLine+"</h3><div><p>"+Contenido+"<br>"+Fecha+"</p></div> ";
				
				}
				var mensajes4 = mensajes3 + mensajes1;
				$("#tab1").html(mensajes4);
			}else{
				alert("No hay mensajes nuevos");
			}
			
		});
		
	});
	
	

	
	
	
});