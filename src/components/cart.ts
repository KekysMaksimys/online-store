import { newTag } from './create-element';
import json from '../data.json';

interface SourcesCart {
    className?: string;
    innerText?: string | Node;
    id?: string | number;
    textContent?: string | number;
    type?: string;
    size?: string;
    src?: string;
    action?: string;
    innerHTML?: string;
    pattern?: string;
    required?: boolean;
    min?: string;
    name?: string;
    for?: string;
    checked?: boolean;
    width?: number;
    alt?: string;
}

class Cart {
    cartContainer;
    productsCart;
    productsPage;
    productsList;
    productItem;
    productImg;
    productInfo;
    productName;
    productRating;
    productDiscount;
    productBuyInfo;
    productCounting;
    productStock;
    productAdd;
    productCount;
    productTakeAway;
    productPrice;
    summaryContainer;
    summaryContent;
    summaryProducts;
    summaryTotalPrice;
    summaryPromoCode;
    summaryBuy;
    orderButton: HTMLElement & SourcesCart;
    constructor() {
        this.cartContainer = newTag('section', { className: 'cart__section' });
        this.productsCart = newTag('div', { className: 'products__container' });
        this.productsPage = newTag('div', { className: 'products-page' });
        this.productsList = newTag('div', { className: 'products-list' });
        this.productItem = newTag('div', { className: 'product-item' });

        this.productImg = newTag('div', { className: 'product__img-container' });
        this.productInfo = newTag('div', { className: 'product-info' });
        this.productName = newTag('div', { className: 'product-name' });
        this.productRating = newTag('div', { className: 'product-rating' });
        this.productDiscount = newTag('div', { className: 'product-discount' });

        this.productBuyInfo = newTag('div', { className: 'product-buy-info' });
        this.productStock = newTag('div', { className: 'product-stock' });
        this.productCounting = newTag('div', { className: 'product__counting-container' });
        this.productAdd = newTag('button', {
            className: 'product-add',
        });
        this.productCount = newTag('h3', {
            className: 'product-count',
            textContent: '0',
        });
        this.productTakeAway = newTag('button', {
            className: 'product-take-away',
        });
        this.productPrice = newTag('h4', {
            className: 'product-price',
            textContent: '$0',
        });

        this.summaryContainer = newTag('div', { className: 'summary__container' });
        this.summaryContent = newTag('div', { className: 'summary__content' });
        this.summaryProducts = newTag('h3', {
            className: 'summary-products',
            textContent: 'Products: 0',
        });
        this.summaryTotalPrice = newTag('h3', {
            className: 'summary-total',
            textContent: 'Total: $0',
        });
        this.summaryPromoCode = newTag('input', {
            id: 'summary-promo-code',
            type: 'text',
            size: '5',
        });
        this.summaryBuy = newTag('button', {
            id: 'summary-buy',
            textContent: 'BUY NOW',
        });
        this.orderButton = newTag('button', {
            id: 'order-button',
            textContent: 'ORDER',
        });
        this.cartListenEvents();
    }

    renderCart() {
        this.cartContainer.append(this.productsCart);
        this.cartContainer.append(this.summaryContainer);

        this.productsCart.append(this.productsPage);
        this.productsPage.append(this.productsList);

        this.summaryContainer.append(this.summaryContent);
        this.summaryContent.append(this.summaryProducts);
        this.summaryContent.append(this.summaryTotalPrice);
        this.summaryContent.append(this.summaryPromoCode);
        this.summaryContent.append(this.summaryBuy);
        this.summaryContent.append(this.orderButton);

        localStorage.clear();
        return this.cartContainer;
    }

    addsToCart(index: number) {
        const product = json[index - 1];
        if (localStorage.getItem(product.title) !== null) {
            const productNames = document.querySelectorAll('.product-name');
            const productCounts = document.querySelectorAll('.product-count');
            const productPrices = document.querySelectorAll('.product-price');
            let prdIndex = 0;
            for (let i = 0; i < productNames.length; i++) {
                if (productNames[i].textContent === product.title) {
                    prdIndex = i;
                }
            }
            const currentProductCount = +productCounts[prdIndex].textContent;
            if (currentProductCount === product.stock) {
                alert('Out of stock');
                return;
            }
            productCounts[prdIndex].textContent = `${currentProductCount + 1}`;
            const currentProductPrice = +productPrices[prdIndex].textContent.replace(/\D/g, '');
            productPrices[prdIndex].textContent = `$${currentProductPrice + product.price}`;
            this.summaryUpdate();
            return;
        }
        const image = newTag('img', {
            className: 'product__image',
            src: `${product.images[0]}`,
        });
        this.productImg.append(image);
        this.productName.textContent = product.title;
        this.productRating.textContent = `Rating: ${product.rating}`;
        this.productDiscount.textContent = `Discount: ${product.discountPercentage}`;
        this.productStock.textContent = `Stock: ${product.stock}`;
        this.productCount.textContent = '1';
        this.productPrice.textContent = `$${product.price}`;

        localStorage.setItem(product.title, product.stock.toString());
        const productList = document.querySelector('.products-list');

        productList.append(this.productItem);
        this.productItem.append(this.productImg);
        this.productItem.append(this.productInfo);
        this.productInfo.append(this.productName);
        this.productInfo.append(this.productRating);
        this.productInfo.append(this.productDiscount);
        this.productItem.append(this.productBuyInfo);
        this.productBuyInfo.append(this.productStock);
        this.productAdd.id = product.title;
        this.productCounting.append(this.productAdd);
        this.productCounting.append(this.productCount);
        this.productCounting.append(this.productTakeAway);
        this.productTakeAway.id = product.title;
        this.productBuyInfo.append(this.productCounting)
        this.productBuyInfo.append(this.productPrice);

        this.summaryUpdate();
    }

    cartHeaderUpdate(price: number, count: number) {
        const cartTotal = document.querySelector('.cart-total');
        cartTotal.textContent = `Cart total: ${price}$`;
        const cartCounter = document.querySelector('.cart__counter');
        cartCounter.textContent = count.toString();
    }

    summaryUpdate() {
        const productPrice = document.querySelectorAll('.product-price');
        let productNumberPrice = [];
        for (let i = 0; i < productPrice.length; i++) {
            productNumberPrice.push(+productPrice[i].textContent.replace(/\D/g, ''));
        }
        productNumberPrice = [productNumberPrice.reduce((a, b) => a + b, 0)];
        const summaryTotal = document.querySelector('.summary-total');
        summaryTotal.textContent = `Total: $${productNumberPrice[0]}`;

        const productCount = document.querySelectorAll('.product-count');
        let productNumber = [];
        for (let i = 0; i < productCount.length; i++) {
            productNumber.push(+productCount[i].textContent);
        }
        productNumber = [productNumber.reduce((a, b) => a + b, 0)];
        const summaryCount = document.querySelector('.summary-products');
        summaryCount.textContent = `Products: ${productNumber[0]}`;

        this.cartHeaderUpdate(productNumberPrice[0], productNumber[0]);
    }

    cartListenEvents() {
        this.productAdd.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            this.addingToCart(target.id);
        });
        this.productTakeAway.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            this.takeAwayCart(target.id);
        });
        this.orderButton.addEventListener('click', () => {
            this.cartContainer.classList.remove('open');
            const orderForm = document.querySelector('.form__section');
            orderForm.classList.add('open');
        });
    }

    addingToCart(productName: string) {
        const count = +this.productCount.textContent;
        const checkLocal = localStorage.getItem(productName);
        if (count === +checkLocal) {
            alert('Out of stock');
            return;
        }
        const price = +this.productPrice.textContent.replace(/\D/g, '') / count;
        const sumPrice = +this.productPrice.textContent.replace(/\D/g, '');
        this.productCount.textContent = (count + 1).toString();
        this.productPrice.textContent = `$${price + sumPrice}`;
        this.summaryUpdate();
    }

    takeAwayCart(productName: string) {
        const count = +this.productCount.textContent;
        if (count === 1) {
            this.productItem.remove();
            localStorage.removeItem(productName);
            this.summaryUpdate();
            return;
        }
        const price = +this.productPrice.textContent.replace(/\D/g, '') / count;
        const sumPrice = +this.productPrice.textContent.replace(/\D/g, '');
        this.productCount.textContent = (count - 1).toString();
        this.productPrice.textContent = `$${sumPrice - price}`;
        this.summaryUpdate();
    }
}

export { Cart };
