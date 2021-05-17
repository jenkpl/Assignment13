//HELPER FUNCTION
const $ = (id) => {
    return document.getElementById(id);
}
    ($('name')).addEventListener('click', () => {
    let ownerName = prompt('Enter your name');
    console.log('Name:', ownerName);
    });

    ($('deposit')).addEventListener('click', () => {
        let depositAmount = prompt('Enter your deposit');
        console.log('deposit amount:', depositAmount);
    });

    ($('withdraw')).addEventListener('click', () => {
        let withdrawalAmount = prompt('Enter amount to withdraw');
        console.log('withdrawal amount:', withdrawalAmount);
        });
    

//When the user clicks the Name button, a prompt should appear that allows the user to enter their name.When the user clicks the Withdrawal button, a prompt should appear that allows the user to enter an amount to withdrawal.