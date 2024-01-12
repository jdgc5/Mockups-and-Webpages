const data = [
    {
        year: "3300 B.C",
        title: "Indus Valley Civilization",
        text1: "The Indus Valley Civilization, also known as the Harappan Civilization, flourished around 3300 BCE along the banks of the Indus River. It was a remarkable urban civilization renowned for its sophisticated city planning, advanced drainage systems, and intricate craftsmanship.",
        text2: "With major settlements like Mohenjo-Daro and Harappa,this civilization showcased remarkable trade, artistry in pottery, and an early form of writing. Its decline around 1300 BCE remains a mystery",
        img1: "../Fotos/History/valley.jpg",
        img2: "../Fotos/History/IndusValley.jpg"
    },
    {
        year: "528 B.C",
        title: "Buddha's Enlightenment",
        text1: "In 528 BCE, Siddhartha Gautama, later known as Buddha, attained enlightenment under a Bodhi tree in Bodh Gaya. This pivotal event marked the birth of Buddhism, a profound spiritual philosophy emphasizing the Four Noble Truths and the Eightfold Path. Buddha's teachings on overcoming suffering and achieving enlightenment spread across India and eventually globally, influencing countless followers and shaping diverse cultures.",
        text2: "His enlightenment fundamentally transformed spiritual practices, emphasizing compassion, mindfulness, and the pursuit of inner peace.",
        img1: "../Fotos/History/buhda.jpg",
        img2: "../Fotos/History/buhda2.jpg"
    },
    {
        year: "1526",
        title: "Mughal Empire Established",
        text1: "In 1526, Babur, a descendant of Timur and Genghis Khan, established the Mughal Empire in India after defeating Ibrahim Lodi at the Battle of Panipat.",
        text2: "This marked the beginning of a significant era in Indian history characterized by cultural richness, architectural grandeur, and political prowess. The Mughals, known for their patronage of arts, literature, and architecture, ruled over a vast territory and left a lasting legacy, evident in monuments like the Taj Mahal and Red Fort.",
        img1: "../Fotos/History/babul1.jpg",
        img2: "../Fotos/History/babul2.jpg"
    },
    {
        year: "1947",
        title: "Indian Independence Movement",
        text1: "The Indian Independence Movement, a culmination of decades of struggle against British colonial rule, led to India's independence on August 15, 1947. Through non-violent civil disobedience led by figures like Mahatma Gandhi, Jawaharlal Nehru, and others, Indians sought self-governance and freedom from British domination.",
        text2: "Three year later India formally adopted its Constitution, marking the country's transition into a republic",
        img1: "../Fotos/History/independence.jpg",
        img2: "../Fotos/History/independence2.jpg"
    },
]

document.querySelector(".point1").addEventListener("click", () => changeIndex("0"));
document.querySelector(".point2").addEventListener("click", () => changeIndex("1"));
document.querySelector(".point3").addEventListener("click", () => changeIndex("2"));
document.querySelector(".point4").addEventListener("click", () => changeIndex("3"));


function changeHistory(config, year) {
    let historyTitle = document.querySelector("#titleHistory");
    let photo1 = document.querySelector(".fotoHistory");
    let photo2 = document.querySelector(".fotoHistory2");
    let historyText1 = document.querySelector("#p1");
    let historyText2 = document.querySelector("#p2");

    photo1.style.opacity = "0";
    photo2.style.opacity = "0";
    historyText1.classList.remove('fadeIn');
    historyText2.classList.remove('fadeIn');

    sleep(() => {
        historyTitle.innerHTML = data[year].title;
        historyTitle.style.opacity = "1";
        photo1.style.backgroundImage = `url(${data[year].img1})`;
        photo1.style.opacity = "1";
        photo2.style.backgroundImage = `url('${data[year].img2}')`;
        photo2.style.opacity = "1";

        setTimeout(() => {
            historyText1.innerHTML = data[year].text1;
            historyText2.innerHTML = data[year].text2;
            historyText1.classList.add('fadeIn');
            historyText2.classList.add('fadeIn');
        }, 500); 
    }, 500);


    historyText1.style.transform = `translateX(${config.firstTranslate})`;
    historyText1.style.visibility = "hidden";
    historyText2.style.transform = `translateX(${config.firstTranslate})`;
    historyText2.style.visibility = "hidden";
    sleep(() => {
        historyText1.style.transform = `translateX(${config.secondTranslate})`;
        historyText2.style.transform = `translateX(${config.secondTranslate})`;
        sleep(() => {
            document.querySelector("#p1").innerHTML = data[year].text1;
            document.querySelector("#p2").innerHTML = data[year].text2;
            historyText1.style.visibility = "visible";
            historyText1.style.transform = "translateX(0)";
            historyText2.style.visibility = "visible";
            historyText2.style.transform = "translateX(0)";
        }, 250)
    }, 250);
}
function changeIndex(year) {
    // Obtén todos los elementos con la clase 'point' y quita la clase 'active-point' a todos
    const points = document.querySelectorAll('.point');
    points.forEach(point => {
      point.classList.remove('active-point');
    });
  
    switch (year) {
      case "0":
        changeHistory({ firstTranslate: "1500px", secondTranslate: "-1500px" }, year);
        document.querySelector(".point1").classList.add('active-point'); // Añade la clase al punto seleccionado
        break;
      case "1":
        changeHistory({ firstTranslate: "1500px", secondTranslate: "-1500px" }, year);
        document.querySelector(".point2").classList.add('active-point');
        break;
      case "2":
        changeHistory({ firstTranslate: "1500px", secondTranslate: "-1500px" }, year);
        document.querySelector(".point3").classList.add('active-point');
        break;
      case "3":
        changeHistory({ firstTranslate: "1500px", secondTranslate: "-1500px" }, year);
        document.querySelector(".point4").classList.add('active-point');
        break;
    }
  }
  

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, time) {
    await timeout(time);
    return fn();
}
