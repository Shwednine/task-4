'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //heart
    const heartWrap = document.querySelectorAll('.item__heartwrap');
    heartWrap.forEach( function( item ) {
        item.addEventListener('click', function(e) {
            item.classList.toggle('item__heartwrap_active');
        });
    });
});