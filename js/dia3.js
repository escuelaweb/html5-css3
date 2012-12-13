// dia3.js

$(document).ready(function() {

  // Aqui debe ir nuestro contenido
  // $(":range").rangeinput();
  // $(":date").dateinput(); 
  // $("#formualariohtml5").validator();

  $('#formualariohtml5').html5form({
    
        messages : 'es', // Options 'en', 'es', 'it', 'de', 'fr', 'nl', 'be', 'br'
        responseDiv : '.errores'
    
    })

  /* 

  $(":date").dateinput.localize("es", {
  months: 'January,February,March,April,May,June,July,August,September,October,November,December',
  shortMonths:  'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
  days:         'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
  shortDays:    'Sun,Mon,Tue,Wed,Thu,Fri,Sat'
  });

  */


});