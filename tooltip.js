const tooltip = function(selector) {
    const ttContainer = document.querySelectorAll(selector);


    const createTT = function(tooltip, event) {
        const text = tooltip.title;
        let x = event.target.offsetLeft;
        let y = event.target.offsetTop - (event.target.offsetHeight + 5);
        
        
        let div = document.createElement('div');
        div.classList.add('tooltip');
        
        div.innerText = text;
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        return div;
    }

    const findTooltip = function(container) {
        const tooltips = container.querySelectorAll('.tooltip_element');
        tooltips.forEach((tooltip) => {
            let div = null;
            tooltip.addEventListener('mouseover', function (event) {
                        div = createTT(tooltip, event, container);
                        container.append(div);
                    });
                    tooltip.addEventListener('mouseout', function(event) {
                        div.remove();
                    });
        });
    }
    ttContainer.forEach((container) => {
        findTooltip(container);
    });
}
tooltip('.tooltip-container');