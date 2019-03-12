var passwordHash = require ('password-hash');
 class Hash {
    constructor(password){
        this.password = password;
    }

    createHash(){
        var hashedPassword = passwordHash.generate (this.password);
        //console.log (hashedPassword);
        return hashedPassword;
    }
}

module.exports = Hash;