import Ember from 'ember';

export default Ember.Route.extend( {


  model() {

   

    return  $.ajax ({
      type: "POST",
      url: "http://localhost/backend_studienarbeit/db_todo.php",
      data:{},
        //data:"contact_id_choosen="+ choosen_id,
      }).done(function(data) {
    
      data_formated = '<div class="formated_data">'+data+'</div>';
      $(".dialog-window").html(data_formated);
        //return result
      }).fail(function(x,s,e) {
        alert(s+": "+e);
        alert('detail button failed!');
        //alert(result);
      });
  }

});

