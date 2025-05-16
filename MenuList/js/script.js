const menu = document.querySelector('#menu');

// const strawberry = {
//     name:'いちご',
//     img:'strawberry.jpg',
//     price:450,
// };

// console.log(strawberry.name);
// console.log(strawberry['img']);



const lists = [
    {
        name:'イチゴ',
        img:'strawberry.jpg',
        price:450,
    },
    {
        name:'ライム',
        img:'lime.jpg',
        price:400,
    },
    {
        name:'マンゴー',
        img:'mango.jpg',
        price:500,
    },
    {
        name:'レモン',
        img:'lemon.jpg',
        price:400,
    },
    {
        name:'イチジク',
        img:'fig.jpg',
        price:500,
    },
    {
        name:'リンゴ',
        img:'apple.jpg',
        price:400,
    },

];
// console.log(lists[2].img);

const obj1 = {
    key1:'value1',
    key2:'value2',
    key3:'value3',
}

const { key1,key2,key3 } = obj1;

// console.log(key1);


for (let i = 0; i < lists.length; i++) {

    const { name, img, price } = lists[i];
    // const img = lists[i].img;
    // const price = lists[i].price;

    const content = `
    <div>
    <img src="images/${img}" alt="">
    <h2>${name}</h2>
    <p>${price}円</p>
    </div>
    `;
    menu.insertAdjacentHTML('beforeend',content);
}

// const content =`
// <div><img src="images/${lists[1]}" alt=""></div>
// <div><img src="images/${lists[2]}" alt=""></div>
// <div><img src="images/${lists[3]}" alt=""></div>
// <div><img src="images/${lists[4]}" alt=""></div>
// <div><img src="images/${lists[5]}" alt=""></div>
// `;

// menu.textContent = content;
// menu.insertAdjacentHTML('beforeend',content);