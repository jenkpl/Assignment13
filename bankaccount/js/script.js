//HELPER FUNCTION
const $ = (id) => {
    return document.getElementById(id);
}
//
const bankAccount = function (ownerName) {
    let balance = 0;
    let owner = ownerName;
    const getBalance = function () {
        balance = balance + depositAmount - withdrawalAmount;
        return balance;
    };
    const getOwnerName = function () {
        return ownerName;
    };
}



window.addEventListener('load', () => {
    ($('name')).addEventListener('click', () => {
    ownerName = prompt('Enter your name');
    console.log('Name:', ownerName);
    });

    ($('deposit')).addEventListener('click', () => {
        depositAmount = prompt('Enter your deposit');
        console.log('deposit amount:', depositAmount);
        ($('showInfo')).innerHTML = `Name: ${owner} Balance: ${balance}`
    });

    ($('withdraw')).addEventListener('click', () => {
        withdrawalAmount = prompt('Enter amount to withdraw');
        console.log('withdrawal amount:', withdrawalAmount);
        });
    });
    

//