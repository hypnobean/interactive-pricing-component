const pageViewsSpan = document.querySelectorAll('span')[1];
const dollarsSpan = document.querySelectorAll('span')[2];
const yearBilling = 0.25;
const slider = document.getElementById('slider');
const radio = document.querySelectorAll('input[type="radio"]');
let sliderValue;
let cost;
let pageViews;

getPageViews();
getCost();

function getPageViews(sliderValue) {
    sliderValue = slider.value;
    switch (sliderValue) {
        case '0':
            cost = 8;
            pageViews = '10K ';
            break;
        case '1':
            cost = 12;
            pageViews = '50K ';
            break; 
        case '2':
            cost = 16;
            pageViews = '100K ';
            break;
        case '3':
            cost = 24;
            pageViews = '500K ';
            break;
        case '4':
            cost = 36;
            pageViews = '1M ';
            break;
        default:
            break;
    }
}

function getCost() {
    pageViewsSpan.innerText = pageViews;
    if (radio[1].checked) {
        dollarsSpan.innerText = cost - cost * 0.25 + '.00';
    } else {
        dollarsSpan.innerText = cost + '.00';
    }
}

slider.addEventListener('input', function() {
    getPageViews();
    getCost();
});


radio.forEach(radioButton => {
    radioButton.addEventListener('input', function() {
        getPageViews();
        getCost();
    })
});