import Component from '@glimmer/component';

export default class GameButtonComponent extends Component {

    name = 'James';

    choices = [{

        name:'Java',
        image_path: '/assets/images/mug.png',
        logo_path: '/assets/images/Java_logo_icon.png',
    },{
        name:'Python',
        image_path: '/assets/images/snake.png',
        logo_path: '/assets/images/python_logo_icon.png',
    },{
        name:'C++',
        image_path: '/assets/images/c.png',
        logo_path: '/assets/images/c++_logo_icon.png',
    }];

    onPick(name){
       var items = document.querySelectorAll('.game-option h1');

       
       
       var result = ""; 

       var computerPicker = Math.floor(Math.random() * 3);
       var languages = ['Java', 'Python', 'C++'];
       var computerChoice = languages[computerPicker];

       if(name == computerChoice){
        result = 'DRAW';
       }else if(name == 'Java' && computerChoice == 'Python'){
        result = 'WIN';
       }else if(name == 'Java' && computerChoice == 'C++'){
        result = 'LOSE';
       }else if(name == 'Python' && computerChoice == 'Java'){
        result =  'LOSE';
       }else if(name == 'Python' && computerChoice == 'C++'){
        result =  'WIN';
       }else if(name == 'C++' && computerChoice == 'Java'){
        result =  'WIN';
       }else if(name == 'C++' && computerChoice == 'Python'){
        result =  'LOSE';
       };
        alert(`Computer has choosen ${computerChoice} so you ${result}`);


    }
}
