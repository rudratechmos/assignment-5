document.getElementById('btn-donate-now').addEventListener('click', function(event){
    event.preventDefault();
    const donateNow = getInputFieldValueById('input-donate-now');
    const balance = getTextFieldValueById('account-balance');
    if(donateNow>0 || typeof donateNow !== 'number'){
        const newBalance = balance - donateNow;
        document.getElementById('account-balance').innerText = newBalance;
        const modal = document.getElementById("donationModal");
        modal.classList.remove("hidden");
    }
    else{
        alert('Invalid donation amount');
        return;
    }
})
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById("donationModal");
    modal.classList.add("hidden");
});
window.addEventListener('click', function(event) {
    const modal = document.getElementById("donationModal");
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
});

document.getElementById('btn-donate-now-2').addEventListener('click', function(event){
    event.preventDefault();
    const donateNow = getInputFieldValueById('input-donate-now-2');
    const balance = getTextFieldValueById('account-balance');
    if(donateNow>0 || typeof donateNow !== 'number'){
        const newBalance = balance - donateNow;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid donation amount');
        return;
    }
})

document.getElementById('btn-donate-now-3').addEventListener('click', function(event){
    event.preventDefault();
    const donateNow = getInputFieldValueById('input-donate-now-3');
    const balance = getTextFieldValueById('account-balance');
    if(donateNow>0 || typeof donateNow !== 'number'){
        const newBalance = balance - donateNow;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid donation amount');
        return;
    }
})