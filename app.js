var dire_izquierda = false;
var dire_derecha = false; 
var preventivas = false; 
var faros = false;

$(document).ready(function(){ 
    boot();
});

function boot(){

    var url = "https://api.particle.io/v1/devices/340045000d47363330353437/led?access_token=7eef0bfa715ce44e067d9d9601124210fd3354a3"
    

    $('#del').click(function(){
        var engine = {state : "adelante"}
        send_data(engine, function(data){

        });
    });

    $('#izq').click(function(){
        var engine = {state : "izquierda"}
        send_data(engine, function(data) {
            
        });
    });

    $('#det').click(function(){
        var engine = {state : "detener"}
        send_data(engine, function(data) {
            
        });
    });

    $('#der').click(function(){
        var engine = {state : "derecha"}
        send_data(engine, function(data) {
            
        });
    });

    $('#rev').click(function(){
        var engine = {state : "reversa"}
        send_data(engine, function(data) {
            
        });
    }); 

    $('#faros').click(function(){
        var light;
        if(faros){
            faros = false;
            var light = {state: "faros_off"}
        }else{
            var light = {state: "faros_on"}
            faros = true;
        }

        send_data(light, function(){

        });
    })

    $('#dire_izquierda').click(function(){
        var light;
        if(dire_izquierda){
            dire_izquierda = false;
            var light = {state: "dire_izquierda_off"}
        }else{
            var light = {state: "dire_izquierda_on"}
            dire_izquierda = true;
        }

        send_data(light, function(){

        });
    }) 

    $('#dire_derecha').click(function(){
        var light;
        if(dire_derecha){
            dire_derecha = false;
            light = {state: "dire_derecha_off"}
        }else{
            light = {state: "dire_derecha_on"}
            dire_derecha = true;
        }

        send_data(light, function(){

        });
    }) 

    $('#preventivas').click(function(){
        var light;
        if(preventivas){
            preventivas = false;
            light = {state: "preventivas_off"}
        }else{
            light = {state: "preventivas_on"}
            preventivas = true;
        }

        send_data(light, function(){

        });
    })


}

function send_data(data, result) {
    var url = "https://api.particle.io/v1/devices/3e003d000247343339373536/engine?access_token=7eef0bfa715ce44e067d9d9601124210fd3354a3";
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: result,
        dataType: "application/json"
      });
}

