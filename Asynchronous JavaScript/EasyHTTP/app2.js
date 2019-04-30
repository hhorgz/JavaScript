const http = new EasyHTTP();

// Get Users
// const users = http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
};

// Create Post
// const users = http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Create Put
// const users = http.put('http://jsonplaceholder.typicode.com/users/3', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Create Delete
const users = http.delete('http://jsonplaceholder.typicode.com/users/3', data)
.then(data => console.log(data))
.catch(err => console.log(err));