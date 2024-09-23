let currentBalance=document.getElementById('current-balance').innerHTML;
console.log(parseFloat(currentBalance)+10)

//! donation handler 
document.getElementById('donation-btn').addEventListener('click', function () {
    const donation = document.getElementById('donation-card-container');
    const history = document.getElementById('history-card-container');
    donation.classList.remove('hidden');
    donation.classList.add('block');

    history.classList.remove('block');
    history.classList.add('hidden');
})


//! history handler 
document.getElementById('history-btn').addEventListener('click', function () {
    const donation = document.getElementById('donation-card-container');
    const history = document.getElementById('history-card-container');
    donation.classList.remove('block');
    donation.classList.add('hidden');

    history.classList.remove('hidden');
    history.classList.add('block');
})


//! handler for card 1 donation
document.getElementById('donate-btn-1').addEventListener('click', function (event) {
    event.preventDefault()

    const amount = document.getElementById('input-1').value;
    const historyConatiner = document.getElementById('history-card-container');

    // Input validation
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

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


//! handler for card 2 donation
document.getElementById('donate-btn-2').addEventListener('click', function (event) {
    event.preventDefault()

    const amount = document.getElementById('input-2').value;
    const historyConatiner = document.getElementById('history-card-container');

    // Input validation
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

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




//! handler for card 3 donation
document.getElementById('donate-btn-3').addEventListener('click', function (event) {
    event.preventDefault()

    const amount = document.getElementById('input-3').value;
    const historyConatiner = document.getElementById('history-card-container');

    // Input validation
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

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




























// function handleDonation(inputId, donateBtnId, donateBtnHandler) {
//     document.getElementById(donateBtnId).addEventListener('click', function (event) {
//         event.preventDefault();
        
//         const amount = document.getElementById(inputId).value;
//         const historyContainer = document.getElementById('history-card-container');
        
//         // Input validation
//         if (!amount || isNaN(amount) || amount <= 0) {
//             alert('Please enter a valid amount');
//             return;
//         }

//         // Create new history section
//         const newSection = document.createElement('section');
//         newSection.classList.add('p-5', 'border-2', 'rounded-xl', 'mt-8', 'rounded-lg');
        
//         const h1 = document.createElement('h1');
//         h1.textContent = `Donated Amount: ${amount} BDT`;
//         h1.classList.add('font-bold', 'text-xl');
        
//         newSection.appendChild(h1);
//         historyContainer.appendChild(newSection);
        
//         document.getElementById(inputId).value = '';

//         // Show modal
//         const modal = document.getElementById('congrats-modal');
//         const donationAmountSpan = document.getElementById('donation-amount');
//         donationAmountSpan.textContent = amount;
//         modal.classList.remove('none');
//         modal.classList.add('flex');

//         // Close modal
//         document.getElementById('close-modal').addEventListener('click', function () {
//             modal.classList.remove('flex');
//             modal.classList.add('none');
//         });

//         // Custom donate button handler
//         if (donateBtnHandler) donateBtnHandler(amount);
//     });
// }

// // Call the reusable function for each card
// handleDonation('input-1', 'donate-btn-1');
// handleDonation('input-2', 'donate-btn-2');
// handleDonation('input-3', 'donate-btn-3');
