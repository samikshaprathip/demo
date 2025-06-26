// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');

    // Example: selecting an element
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.color = 'blue';
    }

    // Example: click event listener
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});
