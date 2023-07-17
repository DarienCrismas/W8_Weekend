// INTERNAL IMPORTS
import {User, Item, Shop} from "./classes"
 

function createItem(name:string, price:number, description:string, quantity:number):Item{
    let newItem = new Item(name, price, description, quantity)
    return newItem
};




let itema = createItem("pear", 1.99, "descriptive text", 1);
let itemb = createItem("bread", 5.99, "descriptive text", 1);
let itemc = createItem("corn", 0.50, "descriptive text", 1);
let itemd = createItem("pasta", 5.99, "descriptive text", 1);
let iteme = createItem("pasta sauce", 3.75, "descriptive text", 1);
let itemf = createItem("cheese", 0.99, "descriptive text", 1);
const thisShop = new Shop(itema, itemb, itemc, itemd, iteme,itemf)


// Log in
const form = document.getElementById("logform")

form?.addEventListener("submit", (event)=>{
    event.preventDefault()
    const name: HTMLInputElement | null = document.querySelector("#userName")
    const age: HTMLInputElement | null = document.querySelector("#userAge")

    const user: User = new User(name?.value, age?.value)

    document.querySelector("#user")?.insertAdjacentHTML("beforeend", `<h2>Hello ${user.name}!</h2>`)

    if(user){
        thisShop.showItems()
        user.updateCart()
    };
});

