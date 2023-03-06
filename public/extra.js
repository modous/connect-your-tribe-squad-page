
// Het boek verdeelt in verschillende delen
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
        //zorgt ervoor dat de rechter bladzijde tekst langzaam verdwijnt
        setTimeout (() => {
            rightCard.classList.remove('animatie')
        }, "1000")
    })

    //de gegevens van de member waar je op klikt wordt de "hide" weggehaald zodat je alleen deze te zien krijgt
    activeCard.classList.remove("hide");
        activeCard1.classList.remove("hide");
  });
});



