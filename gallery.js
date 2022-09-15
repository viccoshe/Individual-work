const popup = function(selector) {
    const elems = document.querySelectorAll(selector);
    const previewBcg = document.querySelector('.preview');

    const close = function(e) {
       if (!e.target.classList.contains('preview') && !e.target.classList.contains('close')) return;
            const previewBcg = document.querySelector('.preview');
            if(!previewBcg) return;    
            let previewImg = document.querySelector('.pr-img');
            previewImg.remove();
            previewBcg.style.display = 'none';
    }

    const show = function(content) {
        const previewImg = content;
        previewBcg.append(previewImg);
        previewBcg.style.display = 'block';
        previewBcg.addEventListener('click', close);
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
            img.classList.add('pr-img');
            content = img;
        }

        show(content);
    }
    elems.forEach(elem => {
        elem.addEventListener('click', clickHandler);
    });
}

popup('[data-type]');