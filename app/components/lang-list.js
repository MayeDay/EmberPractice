import Component from '@glimmer/component';


export default class LangListComponent extends Component {

    
    showSelection(){

         
        var radios = document.querySelectorAll("li .radios");
        var choice = "";
        
        for(var i = 0; i < radios.length; i++){
            
            if(radios[i].checked == true){
                choice = radios[i].value;
            }
        }

        return alert("You have selected " + choice);

    }
}
