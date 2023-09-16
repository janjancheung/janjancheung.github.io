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


// autoplay audio mute and unmute button 
/* const audio = document.getElementById("cafe-audio");
const mutebtn = document.getElementById("mute-btn");

mutebtn.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    mutebtn.textContent = "mute";
  }
  else {
    audio.muted = true;
    mutebtn.textContent = "unmute";
  }
}); */


// check if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// get the audio element
const audio = document.getElementById("cafe-audio");

// if the user is on mobile, remove the audio element from the DOM
if (isMobile) {
  audio.parentNode.removeChild(audio);
}

fetch('./kaigo.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const kaigodata = document.getElementById('kaigodata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');
    /* const audio = document.createElement('audio'); */

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
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
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    /* div.appendChild(audio); */
    kaigodata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./dreamers.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const dreamersdata = document.getElementById('dreamersdata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    dreamersdata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./haven.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const havendata = document.getElementById('havendata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    havendata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./baxterst.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const baxterstdata = document.getElementById('baxterstdata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    baxterstdata.appendChild(div);
    });
})
.catch(error => console.error(error));

    
fetch('./cafeinfo.json')
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
    const a = document.createElement('a');

    // Set the text content and href attributes for the link
    a.textContent = item.shop;
    a.href = item.link;
    a.target = '_blank';
    p2.textContent = 'date visited: ' + item.datevisited;
    p3.textContent = 'address: ' + item.address;
    p4.textContent = 'open hours: ' + item.openhours;
    p5.textContent = 'phone no.: ' + item.phonenumber;
    p6.textContent = 'what we aim to do: ' + item.description;
    p7.textContent = 'is there a bathroom? ' + item.bathroom;
    p8.textContent = 'what did i do and order? ' + item.whatididandorder;
    p9.textContent = 'my thoughts on the space: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(a);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(p7);
    div.appendChild(p8);
    div.appendChild(p9);
    cafedata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./alldata.json')
.then(response => response.json())
.then(data => {
    const alldata = document.getElementById('alldata');

    const btnAll = document.getElementById('all');
    const btnKaigo = document.getElementById('btnkaigo');
    const btnDreamers = document.getElementById('btndreamers');
    const btnHaven = document.getElementById('btnhaven');
    const btnBaxter = document.getElementById('btnbaxter');

    /*
    btn1.addEventListener('click', () => {
        filterData('all');
    });

    // Define filtering function
    function filterData(shop) {
        const filteredData = jsonData.filter(item => item.shop === shop);
        updatePage(filteredData);
    }
    */

    data.forEach(item => {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');
    
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;

    div2.style.display = "none";
    div2.style.fontSize = "1rem";
    div2.style.color = "white";

    p.onclick = function() {
        div2.appendChild(img);
        div2.appendChild(p4);
        div2.appendChild(p2);
        div2.appendChild(p3);
        div2.appendChild(p5);
        div2.appendChild(p6);
        div2.style.position = "relative";
        div2.style.backgroundColor = "#000000";
        div2.style.padding = "1em";
        div2.style.borderRadius = "1em";
        div2.style.zIndex = "-1"
        img.style.borderRadius = "0.5em";
        
        if (div2.style.display === "none"){
            div2.style.display = "block";
        }
        else{
            div2.style.display = "none";
        }
    }    

    // button to control filtering 
    btnAll.addEventListener('click', function(){
       div.style.opacity = 1;
    });
    btnKaigo.addEventListener('click', function(){
        if (item.shop == "kaigo coffee room") {
            div.style.opacity = 1;
        }
        else{
            div.style.opacity = 0;
        }
    });
    btnDreamers.addEventListener('click', function(){
        if (item.shop == "dreamers coffee house") {
            div.style.opacity = 1;
        }
        else{
            div.style.opacity = 0;
        }
    });
    btnHaven.addEventListener('click', function(){
        if (item.shop == "haven cafe") {
            div.style.opacity = 1;
        }
        else{
            div.style.opacity = 0;
        }
    });
    btnBaxter.addEventListener('click', function(){
        if (item.shop == "baxter st cafe") {
            div.style.opacity = 1;
        }
        else{
            div.style.opacity = 0;
        }
    });

    div.appendChild(p);
    alldata.appendChild(div);
    alldata.appendChild(div2);
    });
})
.catch(error => console.error(error));



// fetch('./alldata.json')
// .then(response => response.json())
// .then(data => {
//     const alldata = document.getElementById('alldata');
//     const locations = [];

//     // extract the unique locations from the data
//     data.forEach(item => {
//         if (!locations.includes(item.shop)){
//             locations.push(item.shop);
//         }
//     });

//     // populate the filter buttons with the unique locations
//     const filtersContainer = document.getElementById('filters');

//     locations.forEach(location => {
//         const button = document.createElement('button');
//         button.textContent = location;
//         button.addEventListener('click', () => filterData(data, location));
//         filtersContainer.appendChild(button);
//       });




//     const div = document.createElement('div');
//     const p = document.createElement('p');
    
//     p.textContent = item.emoji;

//     div.appendChild(p);
//     alldata.appendChild(div);
//     });
// })
// .catch(error => console.error(error));


    // fetch('./alldata.json')
    // .then(response => response.json())
    // .then(data => {
    //     // Access the div element
    //     const alldata = document.getElementById('alldata');

    //     // Loop through the data and add each item to the div
    //     alldata
    //     .forEach(item => {
    //         const div = document.createElement('div');
    //         const p = document.createElement('p');

    //         p.textContent = item.emoji;

    //         /* 
    //         * Onclick function
    //         * whenever a image is clicked
    //         * associated audio will be played
    //         */

    //         /* p.onclick = function () {
    //             let clickedItem = item;
    //             const modal = document.querySelector("#myModal");
    //             const modalContent = `
    //             <div class="modal-content">
    //             <span class="close">&times;</span>
    //             <p id="modalPlace">location: ${clickedItem.shop}</p>
    //             <p id="modalGender">gender: ${clickedItem.gender}</p>
    //             <p id="modalAppearance">appearance: ${clickedItem.appearance}</p>
    //             <p id="modalName">name: ${clickedItem.name}</p>
    //             <p id="modalOrder">order: ${clickedItem.order}</p>
    //             <p id="modalNotes">notes: ${clickedItem.notes}</p>
    //             </div>
    //             `;

    //             // Add modal content to modal popup
    //             modal.innerHTML = modalContent;
    //             modal.style.zIndex = "999"; 
            
    //                 // Add event listener to close button
    //                 const closeButton = modal.querySelector(".close");
    //                 closeButton.addEventListener("click", () => {
    //                 modal.innerHTML = "";
    //                 modal.style.zIndex = "-1";
    //             });
    //         }; */
    //         // Add the HTML tags to webpage
    //         div.appendChild(p);
    //         alldata.appendChild(div);
    //     });
    // })

    // .catch(error => console.error(error));