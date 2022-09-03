//Button listners
document.getElementById('popular_btn').addEventListener('click',getData)
document.getElementById('apps_btn').addEventListener('click',getData)
document.getElementById('calendars_btn').addEventListener('click',getData)
document.getElementById('crm_btn').addEventListener('click',getData)
document.getElementById('video_btn').addEventListener('click',getData)
document.getElementById('market_btn').addEventListener('click',getData)
document.getElementById('ats_btn').addEventListener('click',getData)
document.getElementById('payment_btn').addEventListener('click',getData)
document.getElementById('analyt_btn').addEventListener('click',getData)
document.getElementById('api_btn').addEventListener('click',getData)
document.getElementById('others_btn').addEventListener('click',getData)

document.getElementById('category_select').addEventListener('click',()=>{
    getData();
})
//Fetching data from json file
async function getData()
{
    var btn_value = event.target.value;
    var buttons = document.getElementsByClassName('image_btn');
    for(var i=0; i< buttons.length; i++){
        buttons[i].style.border = '1px solid transparent';
    }
    if(event.target.id == null){
        document.getElementById('popular_btn').style.border = '1px solid #00A2FF';
    }
    else{
        document.getElementById(event.target.id).style.border = '1px solid #00A2FF';
    }
    if(btn_value==null){
        btn_value = "Popular";
    }
    var data = fetch('./json/integrations_json.json')
    data = await data;
    data = await data.json();
    showData(data[btn_value],data.header[btn_value]);
}
//Loading 'Popular' data on page loading
window.addEventListener('load',getData)
//function for show the data as table
function showData(data,header){
    document.getElementById('top_img').src = header[0];
    document.getElementById('top_h1').textContent = header[1];
    document.getElementById('top_p').textContent = header[2];
    var html = "";
    len = data.length;
    for(let i=0;i<data.length;i++)
    {
        if(i%2==0)
        {
            html += `<tr>`
        }
        html +=`<td><div id="data_div${i}"><img src='${data[i].image}'/>
        <h1><strong>${data[i].title}</h1></strong>
        <p>${data[i].description}</p><a href="${data[i].link}" id="data_a${i}" class="a_seed">See Details</a></div>
        </td>`;
        if(i%2==1)
        {
            html += `</tr>`
        }
    }
    document.getElementById('show_data').innerHTML = html;
}
var id1;
var len;
//Show link when hovering
window.onmouseover = e =>{
    var id = e.target.id;
    var idno = (e.target.id).substring(8)
    if(id.substring(0,8) == 'data_div'){
        document.getElementById(`data_a${idno}`).style.display = 'block';
        for(let i=0;i<len;i++){
            if(Number(idno)!=i){
                document.getElementById(`data_a${i}`).style.display = 'none';
            }
        }
    }
}
//Clear the link when mouse out
window.onmouseout = e =>{
    var id = e.target.id;
    if(id.substring(0,8) != 'data_div'){
        for(let i=0;i<len;i++){
                document.getElementById(`data_a${i}`).style.display = 'none';
        }
    }
}