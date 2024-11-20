function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❅';
    
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    
    const animationDuration = Math.random() * 3 + 2;
    snowflake.style.animation = `fall ${animationDuration}s linear forwards`;
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000);
}

function startSnowfall() {
    setInterval(createSnowflake, 100);
}

window.addEventListener('load', startSnowfall);
