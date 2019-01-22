# Boardsss

A Trello clone with Google OAuth and MERN stack

## Installation:
`npm install`
## Running the dev environment:
In order to run the development environment you will need to create an app on the Google+ API console.

Then create a .env file at the project root and store your Google Client ID and Client Secret as `CLIENT_ID` and `CLIENT_SECRET`. You also need to use a remote MongoDB host such as MLab, and you should store your authentication URI as `DB_URI`.

Once you have completed the above configuration you can run the development environment with `npm run dev`. To view the app, navigate to [http://localhost:3000](http://localhost:3000)