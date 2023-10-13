const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const axios = require('axios');
const { register, getUser, authorizeLogin } = require('./userController');

sinon.stub(axios, 'post');

describe('Authentication Tests', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('shold register an user', async () => {
    const request = {
      body: {
        username: '',
        email: '',
        pwd: '',
      },
    };
    const response = {
      status: function (stat) {
        this.stat = stat;
        return this;
      },
      json: function (data) {
        this.data = data;
      },
    };

    await register(request, response);
    expect(response.stat).to.equal(201);
    expect(response.data.message).to.equal('User created successfully');
  });

  it('should get user', async () => {
    const request = {
      session: {
        user: {
          id: '',
        },
      },
    };
    const response = {
      json: function (data) {
        this.data = data;
      },
    };

    await getUser(request, response);
    expect(response.data).to.be.an('array');
  });

  it('should authorize login ', async () => {
    const request = {
      body: {
        email: '',
        pwd: '',
      },
    };
    const response = {
      status: function (stat) {
        this.stat = stat;
        return this;
      },
      json: function (data) {
        this.data = data;
      },
    };

    await authorizeLogin(request, response);
    expect(response.stat).to.equal(100);
    expect(response.data.message).to.equal('Login successfull');
  });
});