

let h2 = document.querySelectorAll(".fruit");
let sub = document.querySelectorAll(".sub1");
let del = document.querySelectorAll(".del1");
let can = document.querySelector(".can")
let modal = document.querySelector(".cardfa")
let del1 = document.querySelector(".del")
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".ca")
let card3 = document.querySelector(".caa")
let b = document.querySelector("b")
sub.forEach(e => {
    e.addEventListener("click", (e) => {
        if (e.target.textContent === "Show price") {
            e.target.textContent = "15$"
        } else if (e.target.textContent === "15$") {
            e.target.textContent = "Show price"
        }
    })
});


can.addEventListener("click", (e) => {
    if (e.target.textContent === "Cancel") {
        modal.classList.remove("modals-visible")
    }
})

del.forEach(e => {
    e.addEventListener("click", (e) => {
        let path = e.currentTarget.getAttribute("data-path")
        console.log(path);
        if (path === "one") {
            modal.classList.add("modals-visible")
            b.innerText = "Apelsin"
            del1.addEventListener("click", () => {
                card1.classList.add("cardfa")
                modal.classList.remove("modals-visible")
            })
        } else if (path === "two") {
            modal.classList.add("modals-visible")
            b.innerText = "Banan"
            del1.addEventListener("click", () => {
                card2.classList.add("cardfa")
                modal.classList.remove("modals-visible")
            })
        } else if (path === "three") {
            modal.classList.add("modals-visible")
            b.innerText = "Anor"
            del1.addEventListener("click", () => {
                card3.classList.add("cardfa")
                modal.classList.remove("modals-visible")
            })
        }
    })
});






