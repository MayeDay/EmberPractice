import Component from '@glimmer/component';

export default class MainHomeCompComponent extends Component {

    homeObjects =[{

        name: 'Java',
        image_path: '/assets/images/rock0.png',
        logo_path: '/assets/images/Java_logo_icon.png',
        type: 'Rock',
        information: `Java was created at Sun Microsystems, Inc., where James Gosling led a team of researchers in an effort to create a new language that would allow consumer electronic devices to communicate with each other. Work on the language began in 1991, and before long the team's focus changed to a new niche, the World Wide Web.`
    },{

        name: 'Python',
        image_path: '/assets/images/scissors0.png',
        logo_path: '/assets/images/python_logo_icon.png',
        type: 'Scissors',
        information: `Python was created by Guido van Rossum in the year 1991. Python language facilitates the development of small and large scale dynamic websites. This language provides developers with easy code readability and enables lesser coding. It is an object-oriented language used for development, scripting, and testing.`
    },{
        name: 'C++',
        image_path: '/assets/images/paper.png',
        logo_path: '/assets/images/c++_logo_icon.png',
        type: 'Paper',
        information: `In the 1990s, C++ became one of the most used programming languages in the world. The C++ programming language was developed by Bjarne Stroustrup at Bell Labs in the 1980s, and was originally named "C with classes".`
    }];

}
