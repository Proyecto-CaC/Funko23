const session = require('cookie-session');

require('dotenv').config();

function initSession() {
    return session({
        secret: "user_secret_session"

    });
};

module.exports = {initSession}; 