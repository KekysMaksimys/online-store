// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { newTag } from './create-element';
import { Modal } from './modal';
import { Cart } from './cart';

interface SourcesCatalogCard {
    className?: string;
    innerText?: string;
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
class CatalogCard {
    title: string;
    thumbnail: string;
    price: string | Node;
    rating: string;
    description: string;
    productPrice: string;
    stock: string;
    cardContainer;
    card;
    cardImg;
    cardBody;
    cardTitle;
    btnOpenModal;
    priceWrapper;
    priceText;
    cardButtons;
    imageContainer
    btnBin: HTMLElement & SourcesCatalogCard;
    
    constructor({ title, images, price, description, rating, stock}: any, index: number) {
        this.title = title;
        this.thumbnail = images[0];
        this.price = price;
        this.productPrice = price;
        this.stock = stock;
        this.description = description;
        this.rating = rating;
        this.cardContainer = newTag('li', {
            className: 'product-card',
        });
        this.cardContainer.setAttribute('data-id', `${index + 1}`);
        this.card = newTag('div', { className: 'card' });
        //image container
        this.imageContainer = newTag('div', { className: 'card__img-container' });
        // img
        this.cardImg = newTag('img', {
            className: 'card__img',
            src: this.thumbnail,
            alt: this.title,
        });
        // card body
        this.cardBody = newTag('div', { className: 'card-body' });
        this.cardTitle = newTag('h3', {
            className: 'item-title',
            innerText: this.title,
        });
        // price
        this.priceWrapper = newTag('div', { className: 'price-wrapper' });
        this.priceText = newTag('span', { innerText: ' $' });
        this.price = newTag('span', { className: 'price', innerText: this.price });
        //card buttons 
        this.cardButtons = newTag('div', {
            className: 'card-buttons'
        });
        // btn open modal
        this.btnOpenModal = newTag('button', {
            className: 'more-card-info-btn',
            innerHTML: 'Show more',
        });
        // button add to cart
        this.btnBin = newTag('button', {
            className: 'add-item-to-cart-btn',
            innerHTML: 'Add to cart',
            id: `${index + 1}`
        });
        this.listenEvents();
    }
    renderCard() {
        this.cardContainer.append(this.card);
        this.card.append(this.imageContainer);
        this.imageContainer.append(this.cardImg)
        this.card.append(this.cardBody);
        this.cardBody.append(this.cardTitle);
        this.cardBody.append(this.priceWrapper);
        this.priceWrapper.append(this.price);
        this.priceWrapper.append(this.priceText);
        this.cardBody.append(this.cardButtons);
        this.cardButtons.append(this.btnOpenModal);
        this.cardButtons.append(this.btnBin);

        return this.cardContainer;
    }
    listenEvents() {
        this.btnOpenModal.addEventListener('click', () => {
            this.openModal(this.title,
                this.description,
                this.thumbnail,
                this.rating,
                this.productPrice,
                this.stock);
        });
        this.btnBin.addEventListener('click', (event: any) => {
            // this.addToBin(event);
            // this.setToLocalStorage();

            new Cart().addsToCart(event.target.id); //index of card
        });
    }
    openModal(
        title: string,
        description: string,
        thumbnail: string,
        rating: string,
        price: string,
        stock: string) {
        new Modal(title,
            description,
            thumbnail,
            rating,
            price,
            stock).openModal();
    }
}

export { CatalogCard };
