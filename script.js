// Counter
async function updateCounter() {
    const counterEndpoint = `https://api.countapi.xyz/hit/littlepa.ge/visits`;

    try {

        await fetch(counterEndpoint, { mode: 'no-cors' });
        
        const getEndpoint = `https://api.countapi.xyz/get/littlepa.ge/visits`;
        const response = await fetch(getEndpoint);
        const data = await response.json();
        animateCounter(data.value, 'visitorCount');
    } catch (error) {
        console.error('Counter error:', error);
        document.getElementById('visitorCount').textContent = '0000ERR';
    }
}


// Counter animation
function animateCounter(target, elementId) {
    let current = 0;
    const counterElement = document.getElementById(elementId);
    const increment = Math.ceil(target / 50);
    
    const interval = setInterval(() => {
        current += increment;
        if(current >= target) {
            current = target;
            clearInterval(interval);
        }
        counterElement.textContent = current.toString().padStart(6, '0');
    }, 50);
}

// Marquee
function createMarquee(text) {
    const marqueeContent = document.getElementById('js-marquee');
    const continuousText = text + ' ••★•• ' + text + ' ••★•• ';
    marqueeContent.textContent = continuousText.repeat(3);
    
    const contentWidth = marqueeContent.offsetWidth;
    const barWidth = document.querySelector('.marquee-bar').offsetWidth;
    const duration = (contentWidth / 250) * 3;
    
    marqueeContent.style.animation = `marquee ${duration}s linear infinite`;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes marquee {
            0% { transform: translateX(${barWidth}px); }
            100% { transform: translateX(-${contentWidth}px); }
        }
    `;
    document.head.appendChild(style);
}

// Date formatting
function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    document.getElementById('lastUpdated').textContent = 
        lastModified.toLocaleDateString('en-US', options);
}

// Initialize everything
window.onload = function() {
    updateCounter();
    createMarquee('Under Construction ••★•• Best Viewed on a Computer');
    updateLastModified();
    
    // Update last modified time every minute
    setInterval(updateLastModified, 60000);
};
