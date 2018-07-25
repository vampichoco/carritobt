$(document).ready(function(){
    window.alert('hello');
    boot();
});

function boot(){
    $('#devices-button').click(function(){
        $('#devicesList').empty();
        $('#devicesModal').modal('show');
        list_devices();

    });

    $('#del').click(function(){
        bluetoothSerial.write('6;');
    });

    $('#izq').click(function(){
        bluetoothSerial.write('3;');
    });

    $('#det').click(function(){
        bluetoothSerial.write('7;');
    });

    $('#der').click(function(){
        bluetoothSerial.write('4;');
    });

    $('#rev').click(function(){
        bluetoothSerial.write('5;');
    });
}

function list_devices(){
    bluetoothSerial.list(function(devices){

        $.each(devices, function(index, value){

            var item =
             $('<button></button>').attr("class", "list-group-item")
                .attr("type", "button")
                .text(value.name)
                .click(function(){

                 bluetoothSerial.connect(value.id, 
                 function(){
                     window.alert('Dispositivo conectado');
                 }, 
                 function(){
                     window.alert('Dispositivo desconectado');
                 });
             })

             $('#devicesList').append(item);

            //window.alert(JSON.stringify(value));

        });

    }, 

    function(){
        window.alert("algo falló :(");
    });
}