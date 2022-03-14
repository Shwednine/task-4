'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //heart
    const heartWrap = document.querySelectorAll('.heartwrap');
    heartWrap.forEach( function( item ) {
        item.addEventListener('click', function(e) {
            item.classList.toggle('heartwrap_active');
        });
    });
});