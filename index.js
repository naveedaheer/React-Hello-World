
var helloworld = React.createClass({
   render: function(){
       return React.DOM.h1({
           style: {
               color: "blue"
       }}, 
           "Hello World in React"
       );
    }
});

ReactDOM.render(
        React.createElement(helloworld),
        document.getElementById("div1")
);

//created by NaveedAheer.com