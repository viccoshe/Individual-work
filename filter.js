const filter = function(selector) {
    const tabContainer = document.querySelectorAll(selector);
    const btnContainer = document.querySelectorAll('.filter');
    const newTab = document.querySelector('.plus');

    const tabHandler = function(buttons, contents) {
        buttons.forEach(function(btn) {
            btn.addEventListener('click', function(){
                buttons.forEach(function(elem) {
                    elem.classList.remove('active');
                    btn.classList.add('active');
                });

                const indexTab = btn.dataset.filter;

                contents.forEach(function(elem){
                    if(indexTab === 'plus'){
                       elem.classList.remove('active');
                       const newLi = document.createElement('li');
                        newLi.classList.add('tab');
                        newLi.textContent = 'New Tab';
                        btnContainer.append(newLi);
                    }

                    if(indexTab === 'all'){
                        contents.forEach(function (allTabs){
                            allTabs.classList.add('active');
                        });
                    }
                    if (elem.dataset.filter === indexTab){
                        elem.classList.add('active')
                    }else {
                    elem.classList.remove('active');
                    }
                });

                
            });
        });
    }


    tabContainer.forEach(function(tab) {
        const tabButtons = tab.querySelectorAll('.tab');
        const contents = tab.querySelectorAll('.content');

        tabHandler(tabButtons, contents);
    });

}

filter('.portfolio'); // id