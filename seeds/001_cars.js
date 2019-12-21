
exports.seed = async function(knex) {
  await knex('cars').insert([
    { make: 'bmw', model: '335i', vin:'4dfsdklfjsdkj3kl4j24', mileage:33222, transmission: 'manual', status: 'clean' },
    { make: 'audi', model: 'rs5', vin:'fasdfjdsklj3lk42j4lk23', mileage:2000, transmission: 'automatic', status: 'clean' },
    { make: 'mercedes', model: 's63', vin:'23kl3j4lk32j4kljlkj3', mileage:100, transmission: 'automatic', status: 'salvage' },
    { make: 'land rover', model: 'velar', vin:'5345kljlkjkljklj', mileage:13, transmission: 'automatic', status: 'clean' }
  ])
}