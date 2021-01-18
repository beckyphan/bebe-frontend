# Bebe Frontend

Bebe Frontend is a react/redux project that allows a user to track data for a human, pet, or plant.
It works in conjunction with a rails API backend to store information in a Postgres database.

The gist:
A user can create an account and add bebes. Bebes have many days, and each day has many "trackings" or datapoints.

See backend for full list of attributes for each model in schema section.

This application uses redux-persist to retain the store across page refreshes, so to clear your user info, be sure to log out after each session.

## Installation

This react application can run locally on your computer, so fork the repo to get started.
Make sure you also have the backend copied as well and run the rails server on localhost:3000
run ```npm start``` after starting your rails server. The requests to the rails API backend are currently set to localhost:3000, so be sure to update the code accordingly if you are running the backend in a different location.

## Usage

This application can be used to track various data points for your human, pet, or plant!
Current features:
- Register Users/Authenticate Users (Log In)
- Users can create Bebes, edit Bebe attributes, and delete Bebes
- Users can add days to Bebes
- Users can add/delete tracking data belonging to each day
- Users can delete their accounts

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
