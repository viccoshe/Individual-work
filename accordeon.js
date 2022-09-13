const accordeon = (selector) => {
    const container = document.querySelector(selector);
    const buttons = document.querySelectorAll('.acc-button');
    const contents = document.querySelectorAll('.acc_content');

    const show = (event) => {
        
            let nextEllem = event.target.nextElementSibling;
            let button = event.target;
            contents.forEach(element => {
                if(nextEllem != element) element.classList.remove('active');
            })
            buttons.forEach(element => {
                if(button != element) element.classList.remove('active');
            });
            button.classList.toggle('active');
            nextEllem.classList.toggle('active');

    }

    buttons.forEach(button => {
        button.addEventListener('click', show);
    });

}

accordeon('.container-accordeon');