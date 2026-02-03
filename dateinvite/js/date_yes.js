// date_yes.js

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const locationIcons = document.querySelectorAll('.location-icon');
    const locationDetails = document.getElementById('locationDetails');
    const defaultMessage = document.querySelector('.default-message');
    const countdownElement = document.getElementById('countdown');
    
    //loc data
    const locationData = {
        'central': {
            title: 'Central Terminal',
            icon: 'fas fa-train',
            description: 'Straight to Central Terminal after I pick you up after your NSTP.',
            details: 'Time: 4:00 PM<br>Outfit: Any chic outfit you feel comfortable in.<br>What to bring: Just your pretty self baby! 😙',
            tips: 'Let\'s get a taxi para mas mabilis if sobrang haba ng LRT just in case.'
        },
        'intramuros': {
            title: 'Intramuros Walk',
            icon: 'fas fa-landmark',
            description: 'Walking around Intramuros. We\'ll also rent a bike if possible and ako na bahala sa path natin (Unless you have something in mind na).',
            details: 'Time: 4:15PM<br>Duration: 1 hour 15 minutes<br> Photographer: Me 😏',
            tips: 'Don\' forget to take your digicam for pictures!'
        },
        'esplanade': {
            title: 'Sunset at Esplanade',
            icon: 'fas fa-sun',
            description: 'More walk, more pictures, and a lot of food',
            details: 'Time: 5:30 PM<br>Food: Nothing in particular, we will just big back hehe<br>',
            tips: 'Skip a meal and we won\'t eat too much so we can try most of the foods before getting too full.'
        },

        'binondo': {
            title: 'Binondo',
            icon: 'fas fa-torii-gate',
            description: 'Dinner\'s on me and more pictures at binondo.',
            details: 'We\'ll take photos at different sites and tourist spots. <br>Duration: 1 hour<br>Emotion: Prepare to be amazed!',
            tips: 'Maging kaladkarin ka lang but also be aware of your surroundings ako bahala sayo and sa route natin!!'
        },
    };
    
    //countdown to feb 14
    function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentinesDay = new Date(currentYear, 1, 14); // February 14
    
    // apply for next year if feb 14 already passed
    if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14);
    }
    
    //timer
    const timeDifference = valentinesDay - now;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Update the individual span elements
    document.getElementById('Days').textContent = days;
    document.getElementById('Hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('Minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('Seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    //update countdown by the second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    
    //location icon clicks
    locationIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const locationId = this.getAttribute('data-location');
            const location = locationData[locationId];
            
            //hide default message
            defaultMessage.style.display = 'none';
            
            //show location details
            locationDetails.innerHTML = `
                <div class="location-header">
                    <div class="location-icon-preview">
                        <i class="${location.icon}"></i>
                    </div>
                    <h3>${location.title}</h3>
                </div>
                
                <div class="location-info">
                    <h4><i class="fas fa-map-marker-alt"></i> About This Stop</h4>
                    <p>${location.description}</p>
                </div>
                
                <div class="location-info">
                    <h4><i class="fas fa-calendar-alt"></i> Details</h4>
                    <p>${location.details}</p>
                </div>
                
                <div class="location-tips">
                    <h5><i class="fas fa-lightbulb"></i> Pro Tip</h5>
                    <p>${location.tips}</p>
                </div>
            `;
            
            //add animation with active class
            locationDetails.classList.add('active');
            
            //normal
            locationIcons.forEach(i => {
                i.style.transform = 'scale(1)';
                const iconImg = i.querySelector('.custom-icon');
                if (iconImg) {
                    iconImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                }
            });
            
            //highlight clicked icon (scale only, no translate)
            this.style.transform = 'scale(1.15)';
            const clickedIcon = this.querySelector('.custom-icon');
            if (clickedIcon) {
                clickedIcon.style.boxShadow = '0 10px 30px rgba(255, 107, 139, 0.4)';
            }
            
            //add heartbeat animation to clicked icon
            if (clickedIcon) {
                clickedIcon.style.animation = 'none';
                setTimeout(() => {
                    clickedIcon.style.animation = 'heartbeat 0.5s ease-in-out';
                }, 10);
            }
            
            //css for heartbeat animation
            if (!document.getElementById('heartbeat-style')) {
                const style = document.createElement('style');
                style.id = 'heartbeat-style';
                style.textContent = `
                    @keyframes heartbeat {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                    }
                `;
                document.head.appendChild(style);
            }
        });
    });
    
    //hover sound effect (add later on)
    
    //confetti
    const Icons = document.querySelectorAll('[data-location*="central"]');
    Icons.forEach(icon => {
        icon.addEventListener('click', function() {
            createConfetti();
        });
    });
    
    //confetti effect (ts was vibe coded)
    function createConfetti() {
        const colors = ['#ff6b8b', '#ff8e53', '#4CAF50', '#2196F3', '#9C27B0'];
        const confettiCount = 30;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                top: 50%;
                left: 50%;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.querySelector('.map-image').appendChild(confetti);
            
            //animate confetti (don't ask me abt this, i just looked this up and vibecoded)
            const animation = confetti.animate([
                { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }
    }
});