
const filter = function(selector) {
    const tabContainer = document.querySelectorAll(selector);
    const btnContainer = document.querySelectorAll('.filter');
    const newTab = document.querySelector('.plus');

    const createTab = function(count) {
        let li = document.createElement('li');
        li.setAttribute('data-filter', `tab${count}`);
        li.classList.add('tab', 'plus');
        li.innerText = `tab ${count}`;
        return li;
    }

    const createContent = function (text, count) {
        let li = document.createElement('li');
        li.setAttribute('data-filter', `tab${count}`); 
        li.classList.add('content', 'plus');
        li.innerText = text;
        return li;
    }

    const tabHandler = function(buttons, contents) {
        buttons.forEach(function(btn) {

               btn.addEventListener('click', function(){
                const indexTab = btn.dataset.filter;

                    if(indexTab === 'plus'){
                        let text = 'prompt(.............)';
                        const tabsCont = document.querySelector('.filter'); 
                        let count = tabsCont.children.length;
                        let tab = createTab(count);
                        btn.before(tab);
                        let content = createContent(text, count);
                        let list = document.querySelector('.list');
                        list.append(content); 
                        buttons.forEach(function(elem) {
                            elem.classList.remove('active');
                            btn.classList.add('active');
                        });
                        
                        
                        
                    }
                    
                    buttons.forEach(function(elem) {
                        elem.classList.remove('active');
                        btn.classList.add('active');

                     
                    
                }); 

                contents.forEach(function(elem){                    
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
        const contentContainer = tab.querySelector('.list');
        const  portfolioContainer = tab.querySelector('.filter');

        tabHandler(tabButtons, contents);
    });

}

filter('.portfolio'); // id


