const history=[];

const buttons = document.getElementsByClassName("hrt");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const p = parseInt(document.getElementById("value").innerText);
        const q = p + 1;
        document.getElementById("value").innerText = q;
    });
}

function calling(button, id1, id2, coinId, dataa, fj) {
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
}

const aa = document.getElementById("cl");
const ff = document.getElementById("his");

const data = {
  name: "National Emergency Number",
  numb: "999",
  date: new Date().toLocaleTimeString()
};

calling(aa, "1", "2", "cn", data, ff);  

const fata = {
      name: "Police Helpline Number",
  numb: "999",
  date: new Date().toLocaleTimeString()
}
const bb=document.getElementById("pl")
calling(bb,"1p","2p","cn",fata,ff);

const aata={
    name: "Fire Service Number",
  numb: "999",
  date: new Date().toLocaleTimeString()
}
const cc=document.getElementById("fi");
calling(cc,"1f","2f","cn",aata,ff) 

const bata={
    name: "Ambulance Service",
  numb: "1994-999999",
  date: new Date().toLocaleTimeString()
}
const dd=document.getElementById("amb");
calling(dd,"1amb","2amb","cn",bata,ff)

const cata={
    name: "Women & Child Helpline",
  numb: "109",
  date: new Date().toLocaleTimeString()
}
const ef=document.getElementById("w");
calling(ef,"1w","2w","cn",cata,ff)



