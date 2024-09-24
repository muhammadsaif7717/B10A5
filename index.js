
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


let currentBalance = parseFloat(document.getElementById('current-balance').innerText);

// Function to handle donation
function handleDonation(inputId, donateBtnId, donatedBalanceId, reason) {
    document.getElementById(donateBtnId).addEventListener('click', function (event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById(inputId).value);
        const historyContainer = document.getElementById('history-card-container');

        // Input validation
        if (!amount || isNaN(amount) || amount <= 0 || currentBalance <= amount) {
            alert('Please enter a valid amount');
            return;
        }

        else {
            // Create new history section
            const newSection = document.createElement('section');
            newSection.classList.add('p-5', 'border-2', 'rounded-xl', 'mt-8', 'rounded-lg');



            newSection.innerHTML = `
                  <p class="text-lg font-semibold">Donated Amount: ${amount} BDT to ${reason}</p>
       <p class="text-sm text-gray-500">Date: ${new Date().toLocaleString()}</p>
            `
            historyContainer.appendChild(newSection);

            // Increase donation balance and decrease current balance
            const donatedBalance = parseFloat(document.getElementById(donatedBalanceId).innerText);
            const increase = donatedBalance + amount;
            document.getElementById(donatedBalanceId).innerText = `${increase}`;
            const decrease = currentBalance - amount;
            document.getElementById('current-balance').innerText = `${decrease}`;
            currentBalance = decrease; // Update the global current balance

            // Clear the input field
            document.getElementById(inputId).value = '';

            // Show modal
            const modal = document.getElementById('congrats-modal');
            const donationAmountSpan = document.getElementById('donation-amount');
            donationAmountSpan.textContent = amount;
            modal.classList.remove('none');
            modal.classList.add('flex');

            // Close modal
            document.getElementById('close-modal').addEventListener('click', function () {
                modal.classList.remove('flex');
                modal.classList.add('none');
            });
        }
    });
}

// Call the reusable function for each card
handleDonation('input-1', 'donate-btn-1', 'donated-balance-1', 'flood in Noakhali');
handleDonation('input-2', 'donate-btn-2', 'donated-balance-2', 'flood in Feni');
handleDonation('input-3', 'donate-btn-3', 'donated-balance-3', 'flood in xyz');