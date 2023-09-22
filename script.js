console.log('loaded')

let rootElement = document.querySelector('#root')
/* console.log(rootElement) */

let htmlContent = "<h2>Hello world, my name is Agota</h2>"

/* rootElement.insertAdjacentHTML('beforeend', htmlContent) */

/* let counter = 0;

while (counter < 10) {
    rootElement.insertAdjacentHTML('beforeend', htmlContent);
    counter++;
} */

let array = ["alma", "körte", "szilva", "eper", "birs", "vegyes", "törköly"]

for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML('beforeend', `<h2> ${array[index]} </h2>`)
}

