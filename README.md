# reParent API

This client was built for the ASU Hacks For Humanity 2018 hackathon.  It's part of a platform that provides an accessible a 'penpal' platform that allows elderly user to connect with others via email with speech to text email sending.

To be used with the [reParent API](https://github.com/jsullivan5/hack-for-humanity-2018_api)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
git
yarn
```

### Installing

A step by step series of examples that tell you how to get a development env running

1. Clone this repository

```
git clone git@github.com:jsullivan5/hack-for-humanity-2018_client.git
```

2. Navigate to project root

```
cd hack-for-humanity-2018_client
```

3. Install packages

```
yarn install
```

4. Start development server with hot reloading

```
yarn start
```

#### This project uses eslint
- If the packages were installed, eslint is already configured.
- Follow the instructions for your text editor to install eslint to use it. [Atom](https://atom.io/packages/linter-eslint)

Lint from the command line

```
npm run lint
```

## Git Flow

- Always branch off of `master`

- Always work on a branch

```
git branch my-branch
```

- update branch off master with `git rebase`.  This puts your commits on top of other's and creates a cleaner commit history
    
    * `git pull origin master --rebase`
        - There may be merge conflicts...
          1. If so, look in text editor and figure out what should be merged
          2. After fixing, add commits to staging with `git add .`
          3. Continue with rebase with `git rebase --continue`
          4. Repeat until your recent commits are applied
          5. Sometimes git is terrible and will not run the continue command.
              - If it's been tried a couple times and is not working, don't be afraid to `git rebase --skip`
          6. And if all `hell` breaks loose:  `git rebase --abort` and try again...


- Don't work on a branch for too long.  It's hard to review and incurs more merge conflicts

- Push branches up to Github and create pull requests

```
git push origin my-branch
```

- Pull requests can and should be reviewed by another developer before merging.  Tag someone in the `reviewers` section on the right.

## Running the tests

Coming soon...

### Break down into end to end tests

Coming soon...

## Deployment

Coming soon...

## Built With

* [React.js](https://reactjs.org/) - Framework used
* [Create React App Redux Boilerplate](https://github.com/notrab/create-react-app-redux) - Speech to Text API
* [Watson Speech](https://www.npmjs.com/package/watson-speech) - Watson Speech client


## Acknowledgments

* Arizona State University
* Hack for Humanity 2018

* Tutorial: [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
* [Demo](https://create-react-app-redux.now.sh) 🙌
