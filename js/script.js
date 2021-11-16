// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list 
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full 
const guestFull = document.querySelector(".alert");
//assign button
const assignButton = document.querySelector(".assign");
//list with guest name and dish
const assignedItems = document.querySelector(".assigned-items")

addGuestButton.addEventListener("click", function(){
    const guest = guestInput.value;
    //console.log(guest);
    if (guest !== ""){
        addToList(guest);
    }

    clearInput();
    updateGuestCount();

});

const clearInput = function(){
    guestInput.value="";
};

const addToList = function (guest){
    const listItem=document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
}

const updateGuestCount = function (){
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText=guests.length;
    if (guests.length == 8){
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
        }
};

const assignItems = function(){
    const potluckItems = ["cheese", "olives", "fresh tomatoes and basil", "mozzarella", "prosciutto", "melon", "bread", "hummus and veggies", "pasta", "pesto", "wine", "fruit", "chocolate cake"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests){
        const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        const randomPotluckItem = potluckItems[randomPotluckIndex];
        const listItem = document.createElement("li");
        listItem.innerText=`${guest.innerText} is bringing ${randomPotluckItem}`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex,1);
    }
};

    assignButton.addEventListener("click", function(){
        assignItems();
        assignButton.disabled = true;
    });
