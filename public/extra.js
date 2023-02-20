

const allTriggers = document.querySelectorAll(".trigger-member")
const allCards = document.querySelectorAll(".card")
const allCardText = document.querySelectorAll(".cardtext")


allTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    let id = trigger.dataset.id;
    const activeCard = document.getElementById(id)
    const activeCard1 = document.getElementById(id + 1)

    allCards.forEach((card) => {
        card.classList.add('hide')
    })
    allCardText.forEach((text) => {
        text.classList.add('hide')
    })

    activeCard.classList.remove("hide");
    activeCard1.classList.remove("hide");

  });
  // var long = element.dataset.long;
  // console.log(long)
});

