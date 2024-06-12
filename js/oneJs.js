
let loder = document.getElementById('loder');


let finalData;
let isLoading = false;

function dataOnScrol() {
    var scrPosition = window.scrollY;
    if (scrPosition >700 && !isLoading) {
        isLoading = true;

        axios.get('https://fakestoreapi.com/products')
            .then((resolve) => {
                finalData = dataHandler(resolve.data);
                finalDisplay(finalData);
                isLoading = false;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                isLoading = false;
            });
    }
}

function dataHandler(data) {
    finalData = data.map(element => {

        return {
            id: element.id,
            title: element.title,
            img: element.image,
            category: element.category,
            price: element.price,
        }

    });
    return finalData;
}

function finalDisplay(el) {
    let mainDiv = document.getElementById('productContainer');
    mainDiv.innerHTML = '';
    loder.style.display='none';

    el.forEach(element => {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');

        let dataCatg = document.createElement('h3');
        let dataPrice = document.createElement('h4');
        let productImgDiv = document.createElement('div');
        let nameAndBtnDiv = document.createElement('div');

        let priceDollerDiv = document.createElement('div');
        let dollerSign = document.createElement('h4');

        nameAndBtnDiv.classList.add('nameAndBtn');
        nameAndBtnDiv.classList.add('varela-round-regular');

        let dataImg = document.createElement('img');
        let dataTitle = document.createElement('p');
        let btn = document.createElement('button');
        dollerSign.innerText = "$";
        btn.innerText = "Add to Cart";

        dataCatg.innerText = element.category;
        dataImg.src = element.img;
        dataTitle.innerText = element.title;
        dataPrice.innerText = element.price;

        productImgDiv.appendChild(dataImg);

        priceDollerDiv.appendChild(dollerSign);
        priceDollerDiv.appendChild(dataPrice);
        nameAndBtnDiv.appendChild(priceDollerDiv);

        nameAndBtnDiv.appendChild(dataTitle);
        nameAndBtnDiv.appendChild(btn);

        gridItem.appendChild(dataCatg);
        gridItem.appendChild(productImgDiv);
        gridItem.appendChild(nameAndBtnDiv);

        mainDiv.appendChild(gridItem);
    });
}


window.addEventListener('scroll', () => {
    loder.style.display='block';
    dataOnScrol();
});




