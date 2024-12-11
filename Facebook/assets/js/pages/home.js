

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    e.preventDefault() 
    window.location = "./../../index.html"
})



let data = {
    name: "Nicat",
    surname: "Huseynov",
    date: "2",
    month: "7",
    year: "2007",
    gender: "male",
    mail:"nicat.huseynov@icloud.com",
    password:"Baku2024"
}

const postApi = () => {
    try {
        axios.post("https://655f2b37879575426b44b8f7.mockapi.io/person", data)
    } catch (error) {
        console.log(error);
    }
}
postApi()