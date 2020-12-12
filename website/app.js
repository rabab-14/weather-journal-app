

/* Global Variables */


let btt = document.querySelector('#sub');

// api key

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&units=imperial&appid=(your-key)';

// event
btt.addEventListener('click',performMyAction);

function performMyAction(e){

    let zCode = document.getElementById('zipC').value;
    let feeling = document.getElementById('feelings').value;

    getApiData(apiUrl,zCode,key)
    .then((data)=>{
        console.log(data);
        postData('/',{date:date,temp:data.main.temp,content:feeling});

    })
    .then(function(){
     (getData())
    })
}

// Fetching Api Data

let getApiData = async (apiUrl,zCode,key)=> {

    const api = await fetch(apiUrl+zCode+key)

    try {

        const dataApi = await api.json()
        return dataApi;

    } catch (error) {
        console.error("Error!");
    }

};


// POST Request

    let postData = async (url = '/',data= {})=>{
        let res = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        try {
            let nData = await res.json();
            console.log(nData);
            return nData;
        } catch (error) {
            console.error("Error there is no data!");
        }
    }


    // Create a new date instance dynamically with JS
    let date = new Date();
    let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();


    //update Ul
    let getData = async (url= '/weather')=> {
     const res = await fetch(url);

     try {
         let allD = await res.json();
         let date = document.getElementById('date');
         let temp = document.getElementById('temp');
         let content = document.getElementById('content');


         date.innerHTML = `Date is: ${allD.date}`;
         temp.innerHTML =`temperature is: ${allD.temp}° C`;
         content.innerHTML = `The Feelinngs is: ${allD.content}`;


     } catch(error){
        console.log("error");
      }
    };
