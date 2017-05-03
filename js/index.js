    var info='{
      "estudiantes":[
        {"codigo":1,"nombre":"Carlos Lemus", "nota":10},
        {"codigo":2,"nombre":"Mario Ramirez", "nota":4.9},
        {"codigo":3,"nombre":"Julio Lopez", "nota":3.4},
        {"codigo":4,"nombre":"Danila Rosales", "nota":8.5},
        {"codigo":5,"nombre":"Salvador Peña", "nota":7.5},
        {"codigo":6,"nombre":"Ulises Magaña", "nota":8.0},
        {"codigo":7,"nombre":"Jose Guzman", "nota":5.9},
        {"codigo":8,"nombre":"Maria Aguilar", "nota":6.4},
        {"codigo":9,"nombre":"Danilo Zazu", "nota":7.5},
        {"codigo":10,"nombre":"Marlo Perez", "nota":7.5},
      ]
    }';
    var obj=JSON.parse(info);
    function mostrarTodo(){
       for(i=0; i<obj.estudiantes.length; i++){
          codigo=obj.estudiantes[i].codigo;
          nombre=obj.estudiantes[i].nombre;
          nota=obj.estudiantes[i].nota;
          resultado+=dibujarHtml(codigo,nombre,nota);
       }
       document.getElementById('contenido').innerHTML=resultado;
     }

     function dibujarHtml(codigo,nombre,nota){
        var $retorno= '<div class="resultado row">
               <div class="colImagen col s12 m6 l6">
                 <img src="img/estudiante.jpg" id="imgHome" alt="estudiante">
               </div>
               <div class="col-data col s12 m6 l6">
                 <table class="tabla_sin">
                   <tr>
                     <td class="celda_sin1"><strong>Id</strong></td>
                     <td class="celda_sin2">'+codigo+'</td>
                   </tr>
                   <tr>
                     <td class="celda_sin1"><strong>Direccion</strong></td>
                     <td class="celda_sin2">'+nombre+'</td>
                   </tr>
                   <tr>
                     <td class="celda_sin1"><strong>Ciudad</strong></td>
                     <td class="celda_sin2">'+nota+'</td>
                   </tr>
                 </table>
               </div>
             </div>';
             return $retorno;
     }
