const head = document.createElement("header");
head.innerHTML = "Users list";
document.body.append(head);

const sect = document.createElement("section");
async function userslist(){
    try{
        const result = fetch("https://jsonplaceholder.typicode.com/users")
        result.then((data)=>data.json()).then((data1)=>{
            for(let i=0; i<data1.length; i++){
                const div = document.createElement("div")
                div.innerHTML=`<div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">Name : ${data1[i].name}</h5>
                          <p class="card-text">Email : ${data1[i].email}</P>
                          <p class="card-text">Street : ${data1[i].address.street}</P>
                          <p class="card-text">City : ${data1[i].address.city}</P>
                      </div>
                  </div>
                </div>
                </div>`;
                sect.append(div);
                document.body.append(sect);
            }
        })
    }
    catch(error){
        console.log(error);
    }
}

userslist();