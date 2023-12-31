import { newTag } from './create-element';

class Header {
    header: HTMLElement & {
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
    };
    headerWrapper: HTMLElement & {
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
    };
    logo: HTMLElement & {
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
    };
    cartTotal: HTMLElement & {
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
    };
    cartButton: HTMLElement & {
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
    };
    cartCounter: HTMLElement & {
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
    };
    constructor() {
        this.header = newTag('header', { className: 'header' });
        this.headerWrapper = newTag('div', {
            className: 'header-wrapper',
        });
        this.logo = newTag('h1', {
            className: 'logo',
            textContent: 'Online Store',
        });
        this.cartTotal = newTag('div', {
            className: 'cart-total',
            textContent: 'Cart total: 0$',
        });
        this.cartButton = newTag('div', {
            className: 'cart-button',
        });
        this.cartCounter = newTag('div', {
            className: 'cart__counter',
            textContent: 0,
        });
        this.listenEvents();
    }
    render() {
        this.header.append(this.headerWrapper);
        this.headerWrapper.append(this.logo, this.cartTotal, this.cartButton);
        this.cartButton.append(this.cartCounter);

        return this.header;
    }
    listenEvents() {
        this.cartButton.addEventListener('click', () => {
            const cartSection = document.querySelector('.cart__section');
            const container = document.querySelector('.container');
            const orderForm = document.querySelector('.form__section');
            orderForm.classList.remove('open');
            cartSection.classList.add('open');
            container.classList.remove('open');
        });
        this.logo.addEventListener('click', () => {
            const cartSection = document.querySelector('.cart__section');
            const container = document.querySelector('.container');
            const orderForm = document.querySelector('.form__section');
            orderForm.classList.remove('open');
            cartSection.classList.remove('open');
            container.classList.add('open');
        });
    }
}

export { Header };
