export default {
    noDataFound : 'No data found!',
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
        alertBoxTitle : 'An Error Occurred!!',
        alertBoxButton : 'Okay',
        errors : {
            require : 'This field is required',
            invalidEmail : 'Invalid Email',
            invalidPassLength : 'Password should be minimum 6 characters and atleast contains one number and letter'
        }
    },
    projectsScreen : {
        title : 'Projects',
        addProjectLink : '+ Add Project',
        searchPlaceholder : 'Search project/task',
        projectListTitle : 'Project List',
        completedButtonLabel : 'Completed',
        addProjectModal : {
            title : '+ Add New Project',
            namePlaceholder : 'Enter Project Name',
            descriptionPlaceholder : 'Describe here...',
            tagsPlaceholder : 'Enter tags',
            addButton : '+ Add Project'
        },
        compProjectModal : {
            title : 'Completed Projects'
        }
    }
}