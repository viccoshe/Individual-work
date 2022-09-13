const popup = function(selector) {
    const elems = document.querySelectorAll(selector);

    const close = (e) => {
        if(!e.target.classList.contains('popup') && !e.target.classList.contains('popup_close')) return;
        let popup = document.querySelector('.popup');
        if(!popup) return;
        popup.remove();
    }

    //не работает
    const show = function(content) {
        let popupContainer = document.createElement('div');
        let popupModal = document.createElement('div');
        let popupClose = document.createElement('div');
        let popupContent = document.createElement('div');

        popupContainer.classList.add('popup');
        popupModal.classList.add('popup_modal');
        popupClose.classList.add('popup_close');
        popupContent.classList.add('popup_content');

        popupClose.innerHTML = '&#215;';

        //content.style.width = '100%';
        popupContent.append(content);

        popupModal.append(popupClose, popupContent);
        popupContainer.append(popupModal);
        popupContainer.addEventListener('click', close);
        console.log(popupContainer);

        document.body.append(popupContainer);
    }

    const clickHandler = (e) => {
        e.preventDefault();

        let elem = e.target;
        let type = elem.dataset.type;

        if(!type) {
            let parent = elem.closest('[data-type]');
            if(!parent) return;

            type = parent.dataset.type;

            if(!type) return;
            elem = parent;
        }

        let content = '';

        if(type === 'img') {
            const href = elem.href;
            if(!href) return;

            let img = document.createElement('img');
            img.setAttribute('src', href);

            content = img;
        }

        show(content);
    }
    elems.forEach(elem => {
        elem.addEventListener('click', clickHandler);
    });
}

popup('[data-type]');