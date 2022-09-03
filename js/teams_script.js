async function showData(){
    var data = fetch('./json/integrations_json.json');
    data = await data;
    data = await data.json();
    var html = "";
    for(key in data.teams){
        html += `<div class="datadiv" id="${key}"><img src="${data.teams[key][0]}"/><h1>${data.teams[key][1]}</h1><p>${data.teams[key][2]}</p></div>`
    }
    document.getElementById('grid_container').innerHTML = html;
}
showData()
document.getElementById('submit').addEventListener('click',()=>{
    event.preventDefault();
    var firstname = document.getElementById('first_name').value;
    var email = document.getElementById('email').value;
    var last_name = document.getElementById('last_name').value;
    var company = document.getElementById('company').value;
    var phone = document.getElementById('phone').value;
    var members = document.querySelector('input[name="members"]:checked').value;
    var role = document.querySelector('input[name="role"]:checked').value;
    var interest = document.querySelector('input[name="interest"]:checked').value;
    const arr = [firstname,email,last_name,company,phone,members,role,interest]
    if(arr.every(el => el.length >= 1)){
        var teams_data = {
            firstname: firstname,
            email: email,
            last_name:last_name,
            company:company,
            phone: phone,
            members: members,
            role: role,
            interest: interest
        }
        localStorage.setItem('teams_data',JSON.stringify(teams_data))
        window.location.href = './team_confirmation.html';
    }
    else{
        alert('Please type all Fields!')
    }
})