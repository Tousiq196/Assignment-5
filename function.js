const history=[];

const buttons = document.getElementsByClassName("hrt");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const p = parseInt(document.getElementById("value").innerText);
        const q = p + 1;
        document.getElementById("value").innerText = q;
    });
}

function calling(button, id1, id2, coinId, dataa, fj,jontu,sp) {
  button.addEventListener("click", function () {
    const b = document.getElementById(id1).innerText;
    const c = document.getElementById(id2).innerText;
    let d = parseInt(document.getElementById(coinId).innerText);

    alert("calling " + b + " " + c);

    if (d < 20) {
      alert("insufficient coin");
      return;
    }

    const e = d - 20;
    document.getElementById(coinId).innerText = e;
    const bdataa = {
      name: dataa.name,
      numb: dataa.numb,
      date: new Date().toLocaleTimeString()
    };
    history.push(bdataa);
    
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center mt-[20px] bg-[#fafafa] p-[16px] rounded-2xl">
        <div>
          <h1 class="font-semibold text-[20px]">${dataa.name}</h1>
          <p class="text-gray-500">${dataa.numb}</p>
        </div>
        <div>
          <p>${dataa.date}</p>
        </div>
      </div>
    `;
    fj.appendChild(div);
  });
document.getElementById(jontu).addEventListener("click", function () {
    const number = document.getElementById(id2).innerText;
    navigator.clipboard.writeText(number);
    alert(number + " is copied");

    const n = parseInt(document.getElementById(sp).innerText);
    let m = n + 1;
    document.getElementById(sp).innerText = m+" Copy";
})
}

const aa = document.getElementById("cl");
const ff = document.getElementById("his");

document.getElementById("md").addEventListener("click",function(){
  
   ff.innerHTML=""
})

const data = {
  name: "National Emergency Number",
  numb: "999",
  date: new Date().toLocaleTimeString()
};

calling(aa, "1", "2", "cn", data, ff , "cpy1","cp");  


const fata = {
      name: "Police Helpline Number",
  numb: "999",
  date: new Date().toLocaleTimeString()
}
const bb=document.getElementById("pl")
calling(bb,"1p","2p","cn",fata,ff,"cpy2","cp");


const aata={
    name: "Fire Service Number",
  numb: "999",
  date: new Date().toLocaleTimeString()
}
const cc=document.getElementById("fi");
calling(cc,"1f","2f","cn",aata,ff,"cpy3","cp") 


const bata={
    name: "Ambulance Service",
  numb: "1994-999999",
  date: new Date().toLocaleTimeString()
}
const dd=document.getElementById("amb");
calling(dd,"1amb","2amb","cn",bata,ff,"cpy4","cp")

const cata={
    name: "Women & Child Helpline",
  numb: "109",
  date: new Date().toLocaleTimeString()
}
const ef=document.getElementById("w");
calling(ef,"1w","2w","cn",cata,ff,"cpy5","cp")

const gata={
    name: "Anti-Corruption Helpline",
  numb: "106",
  date: new Date().toLocaleTimeString()
}
const fg=document.getElementById("anti");
calling(fg,"anti1","anti2","cn",gata,ff,"cpy6","cp")

const hata={
    name: "Electricity Helpline",
  numb: "16216",
  date: new Date().toLocaleTimeString()
}
const hh=document.getElementById("el");
calling(hh,"el1","el2","cn",hata,ff,"cpy7","cp")

const mata={
    name: "Brac Helpline",
  numb: "16445",
  date: new Date().toLocaleTimeString()
}
const ii=document.getElementById("br");
calling(ii,"br1","br2","cn",mata,ff,"cpy8","cp")
 
const nata={
    name: "Bangladesh Railway Helpline",
  numb: "163",
  date: new Date().toLocaleTimeString()
}
const jj=document.getElementById("bng");
calling(jj,"bng1","bng2","cn",nata,ff,"cpy9","cp")


