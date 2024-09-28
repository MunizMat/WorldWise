WorldWise

WorldWise is a simple application that aggregates information about a set of countries. The application consists of a frontend Next.js application to display the countries and their data, and a backend express application.

## Table of Contents
- [How to Run Locally](#how-to-run-locally)
- [Technologies](#technologies)
- [Notes](#notes)

## How to Run Locally
### Prerequisites
To install and run the project on your local machine you will need to:
1. Install [Node.js](https://nodejs.org/en) on your local machine 

2. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) on your machine


### Running The Application
1. Clone this repository to your local machine:
```shell 
git clone https://github.com/MunizMat/WorldWise.git
```

2. Navigate to the 'backend' directory:
```shell 
cd backend
```

3. Install the dependencies, build the backend application, and run it:
```shell 
yarn install && yarn build && yarn start
```

4. Navigate to the frontend directory:
```shell 
cd ../frontend
```
 
5. Install the dependencies, build the frontend application, and run it:
```shell 
yarn install && yarn build && yarn start
```
The project will be accessible at http://localhost:3000

## Technologies
- Typescript
- ReactJS
- NextJS 
- Mantine
- NodeJS
- Express

## Notes
- I've committed the .env file to ease the installation process and because it does not contain sensitive data