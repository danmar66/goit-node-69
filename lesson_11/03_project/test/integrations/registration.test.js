require('dotenv').config()
const app = require('../../app')
const testReq = require('supertest')
const mongoose = require('mongoose')
const User = require('../../models/user')

const { DB_HOST_TEST, PORT } = process.env

describe('registration', () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST_TEST)
      .then(() => console.log('DB Connected'))
      .catch((err) => {
        console.log(err)
      })

    await User.deleteMany()
  })

  it('shoud registrate new user', async () => {
    const response = await testReq(app).post('/api/auth/registration').send({
      email: 'usertest@gmail.com',
      password: '123456',
    })
    expect(response.statusCode).toBe(201)
    expect(response.body.email).toBe('usertest@gmail.com')
  })

  it('shoud not registrate the same user 2 time', async () => {
    await testReq(app).post('/api/auth/registration').send({
      email: 'test@gmail.com',
      password: '123456',
    })

    const response = await testReq(app).post('/api/auth/registration').send({
      email: 'test@gmail.com',
      password: '123456',
    })
    expect(response.statusCode).toBe(409)
    expect(response.body.message).toBe('User with this email already exist')
  })

  afterAll(async () => {
    await mongoose
      .disconnect(DB_HOST_TEST)
      .then(() => console.log('DB Disconnected'))
      .catch((err) => {
        console.log(err)
      })
  })
})
