# Bank App Mini Project

The project is done using React for frontend and we used firebase for user Authentication.

## Project Structure

-   The app has the following pages,
    -   **Login** - First page of the application. Only logged in users can access other pages. Provided with option to sign up and sign in. During sign in, if wrong credentails are provided three times then the user needs to wait for 5 minutes before trying to login again.
    -   **Account** - To show user details and transaction history.
    -   **Deposit** - To show user details and deposit history along with option to add deposits to the account.
    -   **Withdraw** - To show user details and withdraw history along with option to withdraw amount from the account.
    -   **Loan** - To show user details and loan history along with option to get loan. Each user can get a maximum of 3 loans.
-   Reusable components like **Navbar, Header, Footer, AccountForm** components are used.
-   In this project we have used **React Router DOM** for routing, **firebase** for authentication and **React-Toastify** for notifications.
-   Feel free to replace credentials in **firebase.js** file present inside firebase folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
