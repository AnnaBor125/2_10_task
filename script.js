fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => {
// Преобразуйте данные в HTML-разметку и отобразите на странице
})
.catch(error => {
// Обработайте ошибку
});
