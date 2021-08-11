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

        var temp = document.createElement('div')
        var br = document.createElement('br')

        var img = document.createElement('img');
        img.src = result[i].image;
        var username = document.createTextNode(result[i].username)
        var age = document.createTextNode(result[i].age)
        var description = document.createTextNode(result[i].description)
        temp.appendChild(img)
        // img.appendChild(document.createElement('br'))
        temp.appendChild(username)
        // username.appendChild(document.createElement('br'))
        temp.appendChild(age)
        // age.appendChild(document.createElement('br'))
        temp.appendChild(description)
        // description.appendChild(document.createElement('br'))


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

function add_img() { 
    
}