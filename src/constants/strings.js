export default {
    screens : {
        auth : {
            login : 'Login',
            signup : 'Signup'
        },
        app : {
            projects : 'Projects',
            feed : 'Feed'
        }
    },
    loginScreen : {
        title : 'Welcome Back',
        subtitle : 'Log in to continue',
        inputTypes : {
            email : 'email',
            password : 'password'
        },
        formFields : {
            username : 'Username',
            password : 'Password'
        },
        formPlaceholders : {
            username : 'Enter Username',
            password : 'Enter Your Password'
        },
        forgotPassLink : 'Forgot Password?',
        loginButtonLabel : 'Log In',
        isNewUser : 'New User? ',
        signup : 'SignUp',
        errors : {
            require : 'This field is required',
            invalidEmail : 'Invalid Email',
            invalidPassLength : 'Password should be minimum 6 characters'
        }
    }
}