// date_script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const heart = document.querySelector('.heart');
    const buttonsContainer = document.querySelector('.buttons-container');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const noText = document.querySelector('.no-text');
    const envelope = document.querySelector('.envelope');
    
    //array for no button
    const noButtonTexts = [
        "lah ano ba yan",
        "plsplspls just click yes honey :(",
        "if you click no again that just means you hate me and YOU will ask that dlsu kid to be your date 🙄",
        "😧",
        "last chance baby",
        "no choice ka na 😝"
    ];
    
    let currentTextIndex = 0;
    let envelopeOpened = false;
    
    //shaking animation to envelope wrapper
    envelopeWrapper.classList.add('shaking');
    
    //open envelope, click heart
    heart.addEventListener('click', function() {
        if (!envelopeOpened) {
            //open 
            envelopeWrapper.classList.add('flap');
            //stop shaking animation
            envelopeWrapper.classList.remove('shaking');
            //set flag
            envelopeOpened = true;
            
            //wait then show buttons | idfk why this isn't working
            setTimeout(() => {
                buttonsContainer.classList.add('visible');
            }, 3000);
        }
    });
    
    //yes button
    yesBtn.addEventListener('click', function() {
        //transition
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            //new page
            window.location.href = 'date_yes.html';
        }, 500);
    });
    
    //for no button
    noBtn.addEventListener('click', function() {
        //show text
        noText.textContent = noButtonTexts[currentTextIndex];
        noText.classList.add('show');
        
        //iterate from array
        currentTextIndex++;
        
        //remove no button afer going through all text
        if (currentTextIndex >= noButtonTexts.length) {
            //remove no btn
            setTimeout(() => {
                noBtn.style.display = 'none';
                noText.style.display = 'none';
                buttonsContainer.classList.add('centered');
            }, 1000);
        }
        
        //hide text after 3s
        setTimeout(() => {
            noText.classList.remove('show');
        }, 3000);
    });
});