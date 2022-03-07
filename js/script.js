'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //heart
    const heart = document.querySelectorAll('.item__heart');
    heart.forEach( function( item ) {
        item.addEventListener('click', function(e) {
            item.parentNode.classList.toggle('item__heartwrap_active');
        });
    });
});