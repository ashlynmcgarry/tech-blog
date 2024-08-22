# Tech Blog

## Description

This Tech Blog utilises MVC, Handlebars.js and a variety of packages to create an interactive, simple blog. Within this application users are able to view blog posts without logging in, once they've signed up and logged in, they're able to add new blog posts and comment on existing posts. This blog utilises API routes in the back end and renders the front end using handlebars. Creating this application has continued to challenge me and has allowed me to learn about utilising MVC architecture, and combining routes with Handlebars to render a front end.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Features](#features)
- [Future Development](#future-development)
- [Questions](#questions)

## Installation

To utilise the Tech Blog, users must first clone the repository. Once cloned, with VS Code's terminal the user must copy the .env.example file and enter their PostgresSQL details. Within VS Code's terminal, run 'npm i' to install any required packages and npm start to test the server is working. Once users see the 'App listening' message on their terminal, exit the server.

To start the open the shell and run the database, run 'psql -U postgres' in the terminal and enter a password. Enter '\i schema.sql' to initialise the database and once successful, exit the shell.

To seed the database with data, enter 'npm run seeds' in the VS Code's terminal.

## Usage

This generator can be used by entering 'npm start' within VS Code's terminal and then making API calls within Insomnia

[Visit the live site here.]()

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under [MIT License](https://opensource.org/licenses/MIT).

## Credits

Assistance for this project was provided by the AI Xpert Learning Assistant within Bootcamp Spot. This assistance included answering questions, explaining concepts, debugging code and providing code examples. Assistance was also provided via the class Instructor in Office Hours, who helped in providing direction and explaining concepts related to the project, and via several Bootcamp Tutors who assisted in debugging code errors and providing guidance.

## Contributing

If you would like to contribute to the project and make it better, please feel free.

## Features

- Utilise MVC architecture
- Utilise Handlebars.js
- Users can signup, login and logout
- Users can post and comment on blogs

## Future development

Future development goals for this application include completeing the acceptance criteria and upgrading the styling of the site.

## Questions

For any additional questions, please reach out to me on GitHub [here](https://github.com/ashlynmcgarry) or via email at ashlynjanexx@gmail.com.
