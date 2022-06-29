// global context
const ctx = {
    "accounts": [
        {
            "name": "Kaynan",
            "email": "kaynan@uic.edu",
            "password": "secret",
            "balance": 0
        }
    ]
}

function create(){
    const name      = document.getElementById('name');
    const email     = document.getElementById('email');
    const password  = document.getElementById('password');
    const status    = document.getElementById('status');
    // extract value and add to accounts
    ctx.accounts.push({
        name:     name.value,
        email:    email.value,
        password: password.value,
        balance:  0,
    });
    //update account & clear form
    name.value       = '';
    email.value      = '';
    password.value   = '';
    createStatus.innerHTML = 'Account successfully created!';
};
function allData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}