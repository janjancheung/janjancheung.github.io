// define our variables
let toggleMenu = document.querySelector(".mobile-menu");
let headerStatus = document.querySelector(".header");

// when user clicks on "menu", open and close the mobile navigation
toggleMenu.addEventListener( "click", () => {
    if (headerStatus.classList.contains("open")) {
        headerStatus.classList.remove("open");
    }
    else{
        headerStatus.classList.add("open");
    }
},
false,
);


// what i tried here didn't work but keeping these to know what i didn't do right / just as a record

fetch('kaigo.json')
    .then(response => response.json())
    .then(data => {
        const section = document.querySelector('section');

        for (const person of people){
            const myArticle = document.createElement('article')
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');
            const myPara5 = document.createElement('p');
            const myPara6 = document.createElement('p');


            myPara1.textContent = `gender: ${person.gender}`;
            myPara2.textContent = `appearance: ${person.appearance}`;
            myPara3.textContent = `img: ${person.img}`;
            myPara4.textContent = `name: ${person.name}`;
            myPara5.textContent = `order: ${person.order}`;
            myPara6.textContent = notes;

            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myPara6);
        
            section.appendChild(myArticle);
        }
    })

/* function populatePeople(obj){
        const section = document.querySelector('section');
        const people = obj.members;

        for (const person of people){
            const myArticle = document.createElement('article')
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');
            const myPara5 = document.createElement('p');
            const myPara6 = document.createElement('p');


            myPara1.textContent = `gender: ${person.gender}`;
            myPara2.textContent = `appearance: ${person.appearance}`;
            myPara3.textContent = `img: ${person.img}`;
            myPara4.textContent = `name: ${person.name}`;
            myPara5.textContent = `order: ${person.order}`;
            myPara6.textContent = notes;

            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myPara6);
        
            section.appendChild(myArticle);
        }
} */




/* reference from: https://github.com/core-interaction-s23/collection */


/* (didn't work :/)

// function to render your items
const renderItems = (collection) => {
    // the `ul` where the items will be inserted
    const collectionList = document.getElementByClass('collection')

    // loop throuhg each item in the colelction array
    collection.forEach(item => {
        const listItem = document.createElement('li'); // make the `li`

        // you can make eachg element inside of that
        const itemImage = document.createElement('img') // add an image
        itemImage.src = item.img // set the `src` attribute from the JSON
        listItem.appendChild(itemImage) // and add that too

        // this can get annoying, so we can use “template literals” instead
        const itemDetails = 
            `
                <p>gender: ${item.gender}</p>
                <p>appearance: ${item.appearance}</p>
                <p>name: ${item.name}</p>
                <p>order: ${item.order}</p>
                <p>${item.notes}</p>
            `
        listItem.insertAdjacentHTML('beforeend', itemDetails) // which can we then insert

        // you can build logic from your data, too
        if (!item.alsoWriter){ // if this is `false`
            listItem.classList.add('faded') // add this class to the whole `li`
        }
        
        collectionList.appendChild(listItem) // then add the whole `li` into the `ul`
    })
}

// fetch gets your JSON file
fetch('kaigon.json')
    .then(response => response.json())
    .then(collection => {
        // and passes the data to the function, above!
        renderItems(collection.reverse()) // in reverse order
    })

*/ 











fetch('cafeinfo.json')
    .then(response => response.json())
    .then(data => {
        // Access the div element
        const cafedata = document.getElementById('cafedata');
                
        // Loop through the data and add each item to the div
        data.forEach(item => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');
        const p7 = document.createElement('p');
        const p8 = document.createElement('p');
        const p9 = document.createElement('p');
        const img = document.createElement('img');
        /* const audio = document.createElement('audio'); */

        // Set the text content and href attributes for the link
        p.textContent = item.shop;
        p2.textContent = 'date visited: ' + item.datevisited;
        p3.textContent = 'address: ' + item.address;
        p4.textContent = 'open hours: ' + item.openhours;
        p5.textContent = 'phone no.: ' + item.phonenumber;
        p6.textContent = 'what we aim to do: ' + item.description;
        p7.textContent = 'is there a bathroom? ' + item.bathroom;
        p8.textContent = 'what did i do and order? ' + item.whatididandorder;
        p9.textContent = 'my notes of the space: ' + item.notes;
        img.src = "./img/" + item.img;
        /* audio.src = "audio/" + item.audio; */

        /* 
        * Onclick function
        * whenever a image is clicked
        * associated audio will be played
        */
        /* img.onclick = function() {
            audio.play();
        } */
        
        // Add the HTML tags to webpage
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(p3);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p4);
        div.appendChild(p5);
        div.appendChild(p6);
        div.appendChild(p7);
        div.appendChild(p8);
        div.appendChild(p9);

        /* div.appendChild(audio); */
        cafedata.appendChild(div);
        });
    })
    .catch(error => console.error(error));

