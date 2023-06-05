


var onlineStotre = {
    bakery: {
        breadAndBuns: {
            burgerBun: {
                name: "Burger Bun 4's",
                company: "Bake Parlor",
                price: 95,
                img: "pic/breadandbun/EDG190002089.webp",

            },
            breadBrad: {
                name: "Bake Parlor Bread Bran",
                company: "Bake Parlor",
                price: 145,
                img: "pic/breadandbun/bran.webp",

            },
            fruitBun: {
                name: "Bake Parlor Fruit Bun",
                company: "Bake Parlor",
                price: 47,
                img: "pic/breadandbun/fruit.webp",
            },
            pitaBread: {
                name: "Dawn Pita Bread 5's",
                company: "Dawn",
                price: 85,
                img: "pic/breadandbun/pita.webp",
            },
            breadMilky: {
                name: "Dawn Bread Milky",
                company: "Dawn",
                price: 105,
                img: "pic/breadandbun/milky.webp",
            }
        },
        biscuits: {
            cocomo : {
                name : "Bisconni Cocomo Pouch 130g",
                company : "Bisconni",
                price : 59,
                ime : "",
            },
            innovative : {
                name : "Innovative Butter Crunch H/R Rs.20/- 6's Box",
                company : "Innovative",
                price : 105,
                img : "",
            },
            gala : {
                name : "LU Gala Egg S/P 6's Box",
                company : "LU",
                price : 159,
                img : "",

            },
            Wheatable : {
                name : "LU Wheatable Sugar Free F/P",
                company : "LU",
                price : 80,
                img : "",
            },
            Wispy : {
                name : "Hilal Wispy Wafer Rolls ChocoVanilla 12's Box",
                company : "Hilal",
                price : 179,
                img : "",
            },
        },
        cake: {
            marbleCake : {},
            bakeTimePlain : {},
            

        },
        rusks: {},
    },
    fresh: {},
    beverages: {},
    frozen: {},
    pharmacy: {},


}


var mainPage = document.getElementById("mainPage");

function allItems() {
    for (var main in onlineStotre) {
        main.innerHTML = main
        for (var cat in onlineStotre[main])
            for (var item in onlineStotre[main][cat]) {
                console.log(item)
                mainPage.innerHTML += `
                <div class="col">
                <div class="card h-100 main-card">
                    <img src="${ onlineStotre[main][cat][item].img }" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${onlineStotre[main][cat][item].name}</h5>
                        <p class="card-text">${onlineStotre[main][cat][item].company}</p>
                    </div>
                    <div class="card-footer price-tag">
                        <small class="text-body-secondary price-color"><b> RS : ${onlineStotre[main][cat][item].price}</b></small>
                    </div>
                </div>
            </div>

              `

            }
    }
}
allItems()