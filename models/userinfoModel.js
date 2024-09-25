const db = require('../config/db');
const userInfo ={
    add:(data, callback) => {
        const query = "INSERT INTO user_info (firstname, middlename, lastname, birthdate) VALUES(?,?,?,?)";
        db.query(query, [data.firstname, data.middlename, data.lastname, data.birthdate],callback);
    },
    getAllUser:(callback) =>{
        const query = ("SELECT * FROM user_info")
        db.query(query,callback);
    }

}
module.exports = userInfo;