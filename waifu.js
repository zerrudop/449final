var rand_btn = document.getElementById("random");
var count = 0;
var betbtn = document.getElementById("betbtn");


const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = {
  included_tags: ['waifu'],
  height: '>=2000'
};

const queryParams = new URLSearchParams();

for (const key in params) {
  if (Array.isArray(params[key])) {
    params[key].forEach(value => {
      queryParams.append(key, value);
    });
  } else {
    queryParams.set(key, params[key]);
  }
}
const requestUrl = `${apiUrl}?${queryParams.toString()}`;


function randomize(){
  console.log("test")
  fetch(requestUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    })
    .then(data => {
      // Process the response data as needed
      console.log(data);
      const waifu = data.images[0].url
      console.log(waifu)
      var img = new Image(300);
      img.src = waifu;
      console.log(img)
      if(count % 2 == 0){
        console.log(count)
        document.body.appendChild(img);
        count++
      }
      else{
        const body = document.querySelector('body');
        removeChilds(body);
        document.body.appendChild(img);
      }
    
    })
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
}

const removeChilds = (parent) => {
      parent.removeChild(parent.lastChild);
  
};

// select target target 


// remove all child nodes

window.onload = randomize;
betbtn.addEventListener("click",randomize);