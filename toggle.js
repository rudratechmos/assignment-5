document.getElementById('show-donation').addEventListener('click', function(){
    const donationColor = document.getElementById('show-donation')
    donationColor.classList.add('bg-primary-color')
    donationColor.classList.remove('border')
    const historyColor = document.getElementById('show-history')
    historyColor.classList.remove('bg-primary-color')
    historyColor.classList.add('border')
    showSectionById('card')
})

document.getElementById('show-history').addEventListener('click', function(){
    const historyColor = document.getElementById('show-history')
    historyColor.classList.add('bg-primary-color')
    historyColor.classList.remove('border')
    const donationColor = document.getElementById('show-donation')
    donationColor.classList.remove('bg-primary-color')
    donationColor.classList.add('border')
    showSectionById('transaction-section')
})