// image, username, age, description
function generateUsers(){
    result = [];
    for (let i = 0; i<100; i++){
        result[i] = {
            image : "https://picsum.photos/180/170?random="+i.toString(),
            username: randomString(8),
            age: randomAge(18, 80),
            description: randomString(50)
        }

        var temp = document.createElement('div');
        var username_p = document.createElement('p')
        var age_p = document.createElement('p')
        var description_p = document.createElement('p')

        var img = document.createElement('img');
        img.src = result[i].image;
        var username = document.createTextNode("Username: " + result[i].username)
        var age = document.createTextNode("Age: " + result[i].age)
        var description = document.createTextNode("Description: " + result[i].description)
        temp.appendChild(img)

        username_p.appendChild(username);
        temp.appendChild(username_p)

        age_p.appendChild(age);
        temp.appendChild(age_p)

        description_p.appendChild(description);
        temp.appendChild(description_p)


        document.getElementById('master').appendChild(temp);
    }
    console.log(result)
    return result
}

function randomAge(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomString(length){
    return Math.random().toString(36).substring(2,length)
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           generateUsers();
    }
});