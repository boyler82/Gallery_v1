// Lader for page 3 sec
setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelectorAll('.item').forEach(el => el.style.opacity = '1');
}, 3000)


// Allow for selection of image to trigger modal view
const item = document.querySelectorAll('.item');

item.forEach(item => {
    item.title = 'Click to  Enlarge';
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        // Create modal div
        const modal = document.createElement('div');
        modal.classList.add('modal');
        // Create img element
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = 'Enlarge image';
        // Append img element to  modal div
        modal.appendChild(imgElement);
        // Add the modal to body
        document.body.appendChild(modal);
        setTimeout(() => {
            imgElement.classList.add('reveal');
        }, 10);
        // Remove modal when click
        modal.addEventListener('click', () => {
            imgElement.classList.remove('reveal');
            setTimeout(() => {
            modal.remove();
            }, 300);
        });
    });
});


















// Function to check if page is scroled and ajust LOGO
function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;
    console.log(scrollPosition)

    //  Add / Remove scroled class based on position
    if (scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Calculate new font size on scroll
    let newSize = 3 - (scrollPosition * 0.01);

    // Clamping the font size between 1.5 and 3 rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}
// Add event listener for scroll
window.addEventListener('scroll', checkScroll);