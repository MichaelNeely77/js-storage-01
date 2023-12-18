const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


const userId = 'u123';
const user = {
    name: 'Michael',
    age: 57,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('uid', userId);
});
retrBtn.addEventListener('click', () => {
    const extractedId = localStorage.getItem('uid');

    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the id: ' + extractedId);
    } else {
        console.log('Could not find ID');
    }
});

