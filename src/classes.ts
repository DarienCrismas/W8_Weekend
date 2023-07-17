// EXTERNAL IMPORTS
import { v4 as uuidv4 } from "uuid"

export class User{
    
    private _cart: Item[] = [];
    private _id = uuidv4();
    constructor(private _name: string | undefined , private _age : string | undefined){};

    // begin getter/setter montage
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }

    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }

    public get name(): string | undefined {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get age(): string | undefined {
        return this._age;
    }
    public set age(value: string) {
        this._age = value;
    }
    // end montage

    addToCart(item:Item):void{
        if (this.cart.includes(item)){
            item.quantity++
            this.updateCart()
        }else{
            this.cart = this.cart.concat(item)
            this.updateCart()
        };
    };  
    

    removeFromCart(item:Item):void{
        this.cart.forEach((name, i) => {
            if(name === item) this.cart.splice(i,1);
          });
    };

    removeQuantityFromCart(item:Item, remove:number):void{
        if (remove <= item.quantity){
            item.quantity -= remove;
        }else{
            console.log("That's more than you have!");
        };
    };
    
    cartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        };
        return total
    };

    updateCart():void{
        if (this.cart.length > 0){
            this.cart.forEach(element => {
                this.cartHTMLElement(element);
            });
            let html = `<div id = "total">Cart total: ${this.cartTotal()}</div>`
            document.querySelector(".cart")?.insertAdjacentHTML("beforeend", html)
        }else{
            const html = `<div id = "nada">
            <h2 id="nothing">Your cart is empty.</h2>
            </div>`
            document.querySelector(".cart")?.insertAdjacentHTML("beforeend", html)
        };
    };

    cartHTMLElement(item: Item):void{
        const html = `<div id = ${item.id} class="card"
        <ul class="list-group">
            <li class="grid-item">${item.name}</li>
            <li class="grid-item">${item.quantity}</li>
            <li class="grid-item">${item.price}</li>>
        </ul>
        </div>`
        document.querySelector(".cart")?.insertAdjacentHTML("beforeend", html)
    };
};


export class Item{
    
    private _id = uuidv4()
    constructor(private _name:string, private _price: number, private _description: string, private _quantity: number){};

    public get id():string{
        return this._id;
    };

    public get name():string{
        return this._name;
    };
    public set name(newName:string){
        this.name = newName;
    };
    
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

};

export class Shop{

    private _allItems: Item[] = []
    constructor(private _item1: Item, private _item2: Item, private _item3: Item, private _item4: Item, private _item5: Item, private _item6: Item){
        this._allItems = [this._item1, this._item2, this._item3, this._item4, this._item5, this._item6]
    };

    public set item1(newItem:Item){
        this._item1 = newItem;
    };
    public set item2(newItem:Item){
        this._item1 = newItem;
    };
    public set item3(newItem:Item){
        this._item1 = newItem;
    };

    public set item4(newItem:Item){
        this._item1 = newItem;
    };
    public set item5(newItem:Item){
        this._item1 = newItem;
    };
    public set item6(newItem:Item){
        this._item1 = newItem;
    };

    public get allItems():Item[]{
        return this._allItems;
    };


    showItems():void{
        this.allItems.forEach(element => {
                 this.itemElement(element)
            });
    };

    itemElement(item:Item): void {
        const html = `<div id = ${item.id} class="card"
            <ul class="list-group">
                <li class="grid-item">${item.name}</li>
                <li class="grid-item">${item.description}</li>
                <li class="grid-item">${item.price}</li>
                <button class="button" onclick="addtoCart(${item})">Add To Cart</button>
            </ul>
            </div>`;
        document.querySelector(".shop")?.insertAdjacentHTML("beforeend", html);
    };
};