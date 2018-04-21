# CBPGEC Website

This is the website of the Ch. Bramh Prakash Govt. Engineering College.

:boom: :boom: [Visit the site Here.](https://cbpgec.ga) :boom: :boom:

> More Data Will be added as things get built.

**For team members and people working on this.**

Run the following command opening terminal in the directory root directory of this project.

`npm install`

## Follow the code style by using these tools -

1. ESLint
2. Prettier

To setup, you only have to do few this because every package and configuration is included in repository.

Set Up ESLint -

1. Download plugin of ES lint for your code editor.
   * [Download ES lint for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Change some settings to these.(I will teach only for VSCode. You have to go in settings and search for the following things.) -

   * Set up tab spacing to 2.
     * `"editor.tabSize": 2`
   * Set up snippets to the top in suggestions.
     * `snippetSuggestions": "top"`
   * Turn on the word wrap.
     * `"editor.wordWrap": "on"`

Set Up Prettier -

1. Download plugin of Prettier for you code editor.

   * [Download Prettier for Visual Studio code.](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

2. Change some settings to these. -
   * Turn on single quotes wrapping.
     * `"prettier.singleQuote": true`
   * Turn on auto format on saving the file.
     * `"editor.formatOnSave": true`
   * Default formatting of the editor should be off.
     * `"javascript.format.enable": false`
   * Integrate ES lint with Prettier.
     * `"prettier.eslintIntegration": true`

If you run into any problem while setting up or in the function of the app, open the issue in this repository. I will try to get back to issue ASAP.

## Set up the environment variables -

You need to set up the environment variables for the OAuth and Mongo DB to work.

1. Create a file in root directory and name it `.env` .
   * Which should look like this.
     ```
     DATABASE=yourdatabaselink
     GITHUB_CLIENT_ID=githubclientid
     GITHUB_CLIENT_SECRET=githubclientsecret
     GOOGLE_CLIENT_ID=googleclientid
     GOOGLE_CLIENT_SECRET=googleclientsecret
     LINKEDIN_CLIENT_ID=linkedinclientid
     LINKEDIN_CLIENT_SECRET=linkedinclientsecret
     JWT_SECRET=jwtsecret
     JWT_SECRET_2=anotherjwtsecret
     ```
2. Make another file in root directory and name it `.env.test` . And and put the same variables and make it test related.
