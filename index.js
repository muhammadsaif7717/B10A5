// donation handler 
document.getElementById('donation-btn').addEventListener('click', function () {
    const donation = document.getElementById('donation-card-container');
    const history = document.getElementById('history-card-container');
    donation.classList.remove('hidden');
    donation.classList.add('block');

    history.classList.remove('block');
    history.classList.add('hidden');
})

// history handler 
document.getElementById('history-btn').addEventListener('click', function () {
    const donation = document.getElementById('donation-card-container');
    const history = document.getElementById('history-card-container');
    donation.classList.remove('block');
    donation.classList.add('hidden');

    history.classList.remove('hidden');
    history.classList.add('block');
})

// handler for card 1 donation
document.getElementById('donate-btn-1').addEventListener('click', function (event) {
    event.preventDefault()

    const amount = document.getElementById('input-1').value;
    const historyConatiner = document.getElementById('history-card-container');

    // Create a new section for the history card
    const newSection = document.createElement('section');
    newSection.classList.add('p-5', 'border-2', 'rounded-xl', 'mt-8', 'rounded-lg');

    // Create an h1 element to show the donated amount
    const h1 = document.createElement('h1');
    h1.textContent = `Donated Amount: ${amount} BDT`;
    h1.classList.add('font-bold', 'text-xl');

    // Append the h1 to the new section
    newSection.appendChild(h1);

    // Append the new section to the history container
    historyConatiner.appendChild(newSection);

    // Clear the input field
    document.getElementById('input-1').value = '';

    // Show the modal
    const modal = document.getElementById('congrats-modal');
    const donationAmountSpan = document.getElementById('donation-amount');
    donationAmountSpan.textContent = amount;

    // Remove 'hidden' class and add 'flex' to make the modal visible
    modal.classList.remove('none');
    modal.classList.add('flex');

    // Close the modal when clicking the close button
    document.getElementById('close-modal').addEventListener('click', function () {
        modal.classList.remove('flex'); // Remove 'flex'
        modal.classList.add('none');  // Add 'hidden' to hide the modal
    });
})