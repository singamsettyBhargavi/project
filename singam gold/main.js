// mainlogo
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "main.html";
});
//login
document.getElementById("user").addEventListener("click", function () {
    window.location.href = "login.html";
});

//validation for login
function validate() {
    let name = document.getElementById("namee").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if (name === "") {
        alert("please enter your name");
        return false
    }
    if (pass === "")
        alert("please enter your password")
    return false

}

//validation for register
function validates() {
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('emaill').value;
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    if (phone === "") {
        alert("please enter phonenumber")
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number (numbers only)");
        return false;
    }
    if (email === "") {
        alert("Enter email")
        return false;
    }
    if (pass1 === "" || pass2 === "") {
        alert("Please enter your password");
        return false;
    }
    if (pass1 !== pass2) {
        alert("Passwords do not match");
        return false;
    }

    document.querySelector("form").reset();
    return true;
}

// shopping cart
const cartIcon = document.querySelector("#cart");
const ccart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => ccart.classList.add("active"));// open the shopping cart
cartClose.addEventListener("click", () => ccart.classList.remove("active"));//hiding or remove the shopping cart

// menubar
const menuicon = document.querySelector("#menu");
const menuu = document.querySelector(".menubar");
const menuclose = document.querySelector("#menu-close");
menuicon.addEventListener("click", () => menuu.classList.add("active")); //open the menubar
menuclose.addEventListener("click", () => menuu.classList.remove("active"));//close the menubar

// searchbar
const searchicon = document.querySelector("#search");
const searchh = document.querySelector(".search");
const searchclose = document.querySelector("#search-close");
searchicon.addEventListener("click", () => searchh.classList.add("active"));
searchclose.addEventListener("click", () => searchh.classList.remove("active"));

// document.getElementById("search").addEventListener("click",function(){
//     let input = document.getElementById("searchbar");
//     if(input.style.display === "none" || input.style.display === ""){
//         input.style.display ="block";
//         input.focus();
//     }else{
//         input.style.display = "none";
//     }
// });

//image pagination
const imagewrapper = document.querySelector(".image-wrapper");
const images = document.querySelectorAll(".image-display")
const dotindicator = document.getElementById("dots");
const prebtn = document.getElementById("prevbtn");
const nexbtn = document.getElementById("nextbtn");

function checkelements() {
    if (!imagewrapper || !images.length || !dotindicator || !prebtn || !nexbtn) {
        console.error("One or more elements are missing. Check your HTML.");
        return false;
    }
    return true;
}
if (!checkelements()) {
    console.error("Stopping script due to missing elements.");
} else {

}

let currentIndex = 0;
const totalImages = images.length;


//function to update the image
function updateimage() {
    const offset = -currentIndex * 1099;
    imagewrapper.style.transform = `translateX(${offset}px)`;
    updatedots();
}

//function to update dot
function updatedots() {
    dotindicator.innerHTML = "";

    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentIndex) {
            dot.classList.add("active-dot");
        }
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateimage();
        });
        dotindicator.appendChild(dot);
    }
}

prebtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateimage();
});

nexbtn.addEventListener("click", () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateimage();
});

updateimage();


//wishlist
document.querySelectorAll(".bx.bx-heart").forEach((wish) => {
    wish.addEventListener("click", () => {
        wish.classList.toggle("bxs-heart");
        wish.classList.toggle("bx-heart");
        wish.style.color = wish.classList.contains("bxs-heart") ? "red" : "";

    });
});


//addtocart
let total = 0;

function addtocart() {
    console.log("Button clicked!");
    let clickedbtn = event.target;

    let overlay = clickedbtn.closest(".overlay");
    console.log("Overlay found:", overlay);
    let pricetxt = overlay.querySelector(".price").textContent;
    let price = parseInt(pricetxt.replace("₹", ''));
    console.log("Price as number:", price);

    let imgcon = clickedbtn.closest(".img-con");
    console.log("Image container found:", imgcon);
    let img = imgcon.querySelector("img")
    let imgsrc = img.src;
    console.log("Image source:", imgsrc);

    let cart = document.createElement('div');
    cart.innerHTML = `
        <img src="${imgsrc}" 
             style="width:60px; height:60px; margin-right:10px;transform:scale(1.5);margin-top:10px;">
             <i class='bx bx-trash' style="cursor:pointer;right:20px;position: absolute;font-size:20px;"></i>
        <div> 
            <p style="font-size:20px">₹${price}</p> 
        </div>
        
    `;

    let trash = cart.querySelector('.bx-trash')

    trash.addEventListener("click", function () {
        cart.remove()

        total -= price;
        document.querySelector(".total-price").textContent = "₹" + total;
    });

    cart.style.borderBottom = '1px solid black';
    cart.style.marginTop = '10px';


    document.querySelector(".cart-content").appendChild(cart);
    total += price;
    document.querySelector(".total-price").textContent = "₹" + total;

}










