import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
--------------------

Step-1: Initial Setup
1.Firebase: create project
2.Create web app
3.get configuration
4.initialize firebase
5.Enable auth method
----------------------

Step-2:Setup Component
1.Create Login Component
2.Create Register Component
3.Create Route for login and register
-----------------------

setp-3: Set auth system
1.Setup sing in method
2.setup sign out method
3.user state
4. special observer method
5. return necessary methods and states from firebase
-------------------------

step-4:Create auth context(useAuth)
1.Create a auth context
2.Create conterxt provider
3.set context provider context value
4.Use Auth provider
5.Create useAuth Hook
------------------------

step-5:create Private route
1.Create private Route
2.set Private route
-------------------------

step-6:Redirect after Login
1.After login redirect user to their destination

*/