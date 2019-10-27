let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        let users = response.users;

        let output = '';
        for(let i = 0; i < users.length; i++){
            output += '<li>'+ users[i].demo +'</li>';
        }
        document.getElementById('demos').innerHTML = output;
    }
};

xhttp.open("GET", "demos.json", true);
xhttp.send();