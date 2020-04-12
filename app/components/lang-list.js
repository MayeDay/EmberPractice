import Component from '@glimmer/component';


export default class LangListComponent extends Component {

    
    showSelection(){
  
        var radios = document.querySelectorAll("li .radios");
        var choice = "";
        
        for(var i = 0; i < radios.length; i++){
            
            if(radios[i].checked == true){
                choice = radios[i].value;
            }else{

            }
        }

        return alert("You have selected to learn " + choice);

    }

    selected(){
        var radios = document.querySelectorAll("li .radios");
        var choice = "";
        
        for(var i = 0; i < radios.length; i++){
            
            if(radios[i].checked == true){
                choice = radios[i].value;
                radios[i].parentNode.style.color = "rgb(229, 255, 0)";
                radios[i].parentNode.style.backgroundColor ="rgb(129, 129, 129)"
            }else{
                radios[i].parentNode.style.color = "black";

                radios[i].parentNode.style.backgroundColor ="#333"


            }
        }

    }
}
