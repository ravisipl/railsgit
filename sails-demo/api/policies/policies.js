module.exports.policies = {
  '*': "authenticated",
    UserController: {
        "create": true,
    },
    AuthController: {
        '*': true,
    }

};