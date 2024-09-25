document.getElementById('btn-donate-now').addEventListener('click', function(event){
    event.preventDefault();
    const donateNow = getInputFieldValueById('input-donate-now');
    const collectedAmount = getTextFieldValueById('collected-amount');
    if(donateNow>0 || typeof donateNow !== 'number'){
        const newCollectedAmount = collectedAmount + donateNow;
        document.getElementById('collected-amount').innerText = newCollectedAmount;
        // transaction history 
        const p = document.createElement('p');
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        p.innerHTML = `<p>${donateNow} Taka is donated for Donate for Flood at Noakhali, Bangladesh<br> <span class="text-base font-light">Date: ${currentDateTime}</span></p>`;
        p.classList.add('border', 'rounded-2xl', 'border-color-3', 'p-8');
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        return;
    }
})

document.getElementById('btn-donate-now-2').addEventListener('click', function(event){
    event.preventDefault();
    const donateNow = getInputFieldValueById('input-donate-now-2');
    const collectedAmount = getTextFieldValueById('collected-amount-2');
    if(donateNow>0 || typeof donateNow !== 'number'){
        const newCollectedAmount = collectedAmount + donateNow;
        document.getElementById('collected-amount-2').innerText = newCollectedAmount;
        // transaction history 
        const p = document.createElement('p');
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        p.innerHTML = `<p>${donateNow} Taka is donated for Donate for Flood Relief in Feni, Bangladesh<br> <span class="text-base font-light">Date: ${currentDateTime}</span></p>`;
        p.classList.add('border', 'rounded-2xl', 'border-color-3', 'p-8');
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        return;
    }
})

document.getElementById('btn-donate-now-3').addEventListener('click', function(event){
    event.preventDefault();
    const donateNow = getInputFieldValueById('input-donate-now-3');
    const collectedAmount = getTextFieldValueById('collected-amount-3');
    if(donateNow>0 || typeof donateNow !== 'number'){
        const newCollectedAmount = collectedAmount + donateNow;
        document.getElementById('collected-amount-3').innerText = newCollectedAmount;
        // transaction history 
        const p = document.createElement('p');
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        p.innerHTML = `<p>${donateNow} Taka is donated for Aid for Injured in the Quota Movement<br> <span class="text-base font-light">Date: ${currentDateTime}</span></p>`;
        p.classList.add('border', 'rounded-2xl', 'border-color-3', 'p-8');
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        return;
    }
})