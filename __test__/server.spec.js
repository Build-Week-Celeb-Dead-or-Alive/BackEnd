// describe("server", () => {
//   beforeEach(async () => { //BEFOREEACH says "before each block" ASYNC gives access to "await" or other async options
//     await db('users').truncate() //AWAIT responds to a promise with "I hear you, but I'll wait until you're done" TRUNCATE - resets to a clean slate
//   })

//   //testing environments

//   it('tests are running with DB_ENV set as "testing', () => {
//     expect(process.env.DB_ENV).toBe('testing')
//   })

//   describe('GET / returns 200 ok', async () => {
//     const res = await request(server).get("/")
//     expect(res.status).toBe(200)
//   })

//   describe('User Router', () => {
//     describe('GET /api/users/', () => {
//       it('returns an array of users', () => {
//         return request(server)
//         .get("/api/users/")
//         .set(
//           "Authorization",
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6ImxhdXJhMSIsImlhdCI6MTU2NjUzNjY5MiwiZXhwIjoxNTY2NTY1NDkyfQ.e8cz2R8a3ZJLjpmpKPxV01j5tH60xQEXhJacK3Tb028"
//         )
//         .then(res => {
//           expect(res.status).toBe(200)
//         })
//       })
//     })

//     describe('POST /api/users/', () => {
//       return request(server)
//       .post("/api/auth/register")
//       .send({
//         "username" : "laura5",
//         "password" : "laura5",
//         "department_id" : "1",
//         "position_id" : "2"
//       })
//       .then(res => {
//         expect(res.status).toBe(201)
//       })
//     })
//   })
// })