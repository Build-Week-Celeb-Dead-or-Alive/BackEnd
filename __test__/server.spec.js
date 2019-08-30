const request = require('supertest')

const db = require('../data/dbConfig')
const server = require('../server')

describe("server", () => {

  //testing environments

  it('tests are running with DB_ENV set as "testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  //testing initial server request

  it('GET / wrong path returns 404 server error', async () => {
    const res = await request(server).get("/fail")
    expect(res.status).toBe(404)
  })

  it('GET / returns 200 ok', async () => {
    const res = await request(server).get("/")
    expect(res.status).toBe(200)
  })


  it('GET /celebs returns 200 ok', async () => {
    const res = await request(server).get("/celebs")
    expect(res.status).toBe(200)
  })

  it('GET /users returns 400 not ok', async () => {
    const res = await request(server).get("/users")
    expect(res.status).toBe(400)
  })
})