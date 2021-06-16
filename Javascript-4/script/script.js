function crUser()
{
    this.fName = prompt('Enter the first name:');           
    this.lName = prompt('Enter the last name:'); 
    this.getLogin = function()
    {
        let getLogin = (this.fName.substr(0, 1) + this.lName).toLowerCase();
        return getLogin;
    }
}
let newUser = new crUser();
console.log(`Your login is: ${newUser.getLogin()}`);