// Smooth scrolling to the menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    // Display confirmation
    const confirmationMessage = `Thank you, ${name}! Your table for ${people} has been booked on ${date} at ${time}.`;
    const confirmationDiv = document.getElementById('booking-confirmation');
    confirmationDiv.innerHTML = confirmationMessage;
    confirmationDiv.classList.remove('hidden');

    // Reset the form
    this.reset();
});

// Handle order form submission
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get order values
    const orderName = document.getElementById('order-name').value;
    const orderItem = document.getElementById('order-item').value;
    const orderQuantity = document.getElementById('order-quantity').value;

    // Display confirmation
    const orderMessage = `Thank you, ${orderName}! Your order for ${orderQuantity} ${orderItem}(s) has been placed.`;
    const orderDiv = document.getElementById('order-confirmation');
    orderDiv.innerHTML = orderMessage;
    orderDiv.classList.remove('hidden');

    // Reset the form
    this.reset();
});
