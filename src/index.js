const init = () => {
    const inputForm = document.querySelector("form");                                         //create a variable for the HTML "form" element
    inputForm.addEventListener("submit",(event)=> {                                             //create an Event listener for when you click on the form button. Create an event callback function
        event.preventDefault();                                                                         //use the preventDefault function to override that events behavior (in this case, the submit button refreshing the page)
        console.log(`${event.target.children[1].value} - getting value from event listener  `)             //in this case, the event target is "form" but we need to  access teh value of one of it's "child" elements.
        
        const input = document.querySelector("#searchByID");
        console.log(`${input.value} - getting value directly`)

        fetch(`http://localhost:3000/movies/${input.value}`)                                                  //creat a local server of db.json file by using "npm install -g json-server" & "json-server --watch db.json"
        .then((resp) => resp.json())
        .then((data)=> {
            console.log(data)
            const title = document.querySelector("section#movieDetails h4");                            //We need to create varibles for title and summary in the HTML. This will allow us to assign values from server later
            const summary = document.querySelector("section#movieDetails p");

            title.textContent = data.title                                           //use dot notatio  to assign the html element the values from "Data", which was retrieved fromt he server
            summary.textContent = data.summary


        })
    });
};

document.addEventListener('DOMContentLoaded', init);``