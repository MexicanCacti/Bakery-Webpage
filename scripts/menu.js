document.addEventListener("DOMContentLoaded", function() {
    const buttonLeft = document.getElementById('arrow-left');
    const buttonRight = document.getElementById('arrow-right');
    
    const menus = [
        "drink",
        "dessert"
    ];

    let index = 0;
    updateMenu(index, menus);

    buttonLeft.addEventListener('click', () => {
        console.log("left");
        index--;
        if (index < 0) index = 0;
        updateMenu(index, menus);
    });
  
    buttonRight.addEventListener('click', () => {
        console.log("right");
        index++;
        if (index >= menus.length) index = menus.length - 1;
        updateMenu(index, menus);
    });
 
  });

function updateMenu(index, menus){
    for(let i = 0; i < menus.length; i++){
        let element = document.getElementById(menus[i]);
        if(menus[i] === menus[index]){
            element.style.opacity = 1;
            element.style.zIndex = 1;
        }
        else{
            element.style.opacity = 0;
            element.style.zIndex = 0;
        }
    }
}