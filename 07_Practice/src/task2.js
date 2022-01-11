class Validator{

    isEmail(str){
        const mailFormat = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
        if (mailFormat.test(str)){
            return true;
        }
        return false;
    }

    isDomain(str){
        const domainFormat = /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/;
        if (domainFormat.test(str)){
            return true;
        }
        return false;
    }

    isDate(str){
        const dateFormat = /^(0[1-9]|1[0-2])\.(0[1-9]|1\d|2\d|3[01])\.(19|20)\d{2}$/;
        if (dateFormat.test(str)){
            return true;
        }
        return false;
    }

    isPhone(str){
        const phoneFormat = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/
        if (phoneFormat.test(str)){
            return true;
        }
        return false;
    }
}

module.exports.Validator = Validator;