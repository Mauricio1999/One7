$(document).ready(function() {
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");   
    });
	$(".telapessoa").click(function () {
  
        window.location.href="file:///C:/Users/usuario/Desktop/Hackathon/One7/tela-pessoa.html"; 
  
    });
});

