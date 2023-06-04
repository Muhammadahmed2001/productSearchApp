


var onlineStotre = {
    bakery: {
        breadAndBuns: {
            burgerBun: {
                name: "Bake Parlor Burger Bun 4's",
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
        biscuits: {},
        cake: {},
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
                mainPage.innerHTML += `
                <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
        <div class="card h-100">
            <img src="${onlineStotre[main][cat][item].img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
</div>`

            }
    }
}
allItems()