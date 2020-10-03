<h3 align="center">
  School data - Visualize your students wherever you are
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/jhonpedro/school-data">

  <a href="https://github.com/jhonpedro">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-joao%20pedro-gree">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jhonpedro/school-data">

  <a href="https://github.com/jhonpedro/school-data/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jhonpedro/school-data">
  </a>

  <a href="https://github.com/jhonpedro/school-data/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jhonpedro/school-data">
  </a>

</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 About the project

- <p style="color: red;">Aplication developed only for learning porpouses. Understanding concepts about migrations with Sequelize and multipart/formdata handling</strong></p>

To see the **Web client**, click here: [school-data WEB](https://github.com/jhonpedro/school-data/tree/master/web)</br>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [cors](https://github.com/expressjs/cors)
- [Multer](https://www.npmjs.com/package/multer)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## 💻 Getting started

See below how you can start using the project

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/jhonpedro/school-data && cd school-data
```

**Follow the steps below**

```bash
# Install the dependencies
$ cd /backend
$ yarn

# You need to create a table in your Postgre called "school"
# Now we'll need to run our migrations
$ (yarn or npx) sequelize db:migrate

# To finish, run the api service
$ yarn dev

# You can, run the app in a production build with
$ yarn build; yarn start
# Well done, API is started!
```

> I'm using this template [here](https://github.com/EliasGcf/readme-template/tree/master/templates)
