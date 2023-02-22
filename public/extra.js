

const allTriggers = document.querySelectorAll(".trigger-member")
const allLeftCards = document.querySelectorAll(".leftcard")
const allCardText = document.querySelectorAll(".cardtext")
const allRightCards = document.querySelectorAll(".rightcard")


allTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    let id = trigger.dataset.id;
    const activeCard = document.getElementById(id)
    const activeCard1 = document.getElementById(id + 1)

    allLeftCards.forEach((leftCard) => {
        
        leftCard.classList.add('hide')
    })
    allCardText.forEach((text) => {
        text.classList.add('hide')
    })
    allRightCards.forEach((rightCard) => {
        rightCard.classList.add('animatie')

        setTimeout (() => {
            rightCard.classList.remove('animatie')

        }, "1000")
    })

    activeCard.classList.remove("hide");
  
        activeCard1.classList.remove("hide");
  

  });
  // var long = element.dataset.long;
  // console.log(long)
});



//Next pagina animatie

// let next = document.querySelector(".animatie")
// next.addEventListener("click", nextPage)

// function nextPage(){
//     next.classList.remove("nextpage")
//     setTimeout (() =>{
//         next.classList.add("nextpage")
//     }, "100")


// }