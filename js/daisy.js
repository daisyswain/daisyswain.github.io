$(function() {
 
    var pages = [
        'scotlandontap.html',
        'royalhighlandshow.html',
        'aberdeenairport.html',
        'edf.html',
        'spartansolutions.html',
        'bdlselecthotels.html',
        'chilterntraining.html',
        'assemblyrooms.html',
        'rhinopinch.html',
        'tenhillplace.html'
    ];
 
    var currentPageIndex;
 
 
    for ( var i=0, len=pages.length; i<len; i++ ) {
        if ( window.location.pathname.indexOf( pages[i] ) > 0 ) {
            currentPageIndex = i;
            break;
        }
    }
 
    var prevBtn = $('.js-prev-page');
    var nextBtn = $('.js-next-page');
 
    prevBtn.attr('href', pages[ ((currentPageIndex-1) >= 0) ? currentPageIndex-1 : pages.length-1 ] );
    nextBtn.attr('href', pages[ (currentPageIndex+1) % pages.length ] );
 
});