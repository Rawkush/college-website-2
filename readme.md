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

Set Up -

1. Download plugin for your code editor.
   * [Download ES lint for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
   * [Download Prettier for Visual Studio code.](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (optional).
2. Change some settings to these.(I will teach only for VSCode. You have to go in settings and search for the following things.) -

       ```json
       "prettier.singleQuote": true,
       "editor.formatOnSave": true,
       "[javascript]": { "editor.formatOnSave": false },
       "javascript.format.enable": false,
       "prettier.eslintIntegration": true,
       "eslint.autoFixOnSave": true ,
       "eslint.alwaysShowStatus": true,

> If you run into any problem while setting up or in the function of the app, open the issue in this repository. I will try to get back to issue ASAP.

## Set up the environment variables -

You need to set up the environment variables for the OAuth and Mongo DB to work.

1. Create a file in root directory and name it `.env` .

   * Which should look like this.


    ```bash
      DATABASE=yourdatabaselink
      GITHUB_CLIENT_ID=githubclientid
      GITHUB_CLIENT_SECRET=githubclientsecret
      GOOGLE_CLIENT_ID=googleclientid
      GOOGLE_CLIENT_SECRET=googleclientsecret
      LINKEDIN_CLIENT_ID=linkedinclientid
      LINKEDIN_CLIENT_SECRET=linkedinclientsecret
      JWT_SECRET=jwtsecret
      JWT_SECRET_2=anotherjwtsecret

2. Make another file in root directory and name it `.env.test` . And and put the same variables and make it test related.
