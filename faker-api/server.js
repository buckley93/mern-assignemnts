// import express from './node_modules/express'
// import faker from './node_modules/faker';

const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
    randomName = faker.name.firstName();
}

class Company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json( new User );
});

app.get("/api/company/new", (req, res) => {
    res.json( new Company );
});

app.get("/api/company", (req, res) => {
    const new_user = new User(), new_company = new Company();
    res.json({new_user, new_company})
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
