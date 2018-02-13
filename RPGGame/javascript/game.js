$(document).ready(function () {
    var chosenHero
    var chosenEnemy
    var isHeroAlive
    var isEnemyAlive
    var isHeroChosen = false
    var isEnemyChosen = false

    // var fruits = ["Banana", "Orange", "Apple", "Mango"];

    // var car = {
    //     type:"Fiat", 
    //     model:"500", 
    //     color:"white"


    // console.log (fruits[2])
    // console.log (car.model)


    function initGame() {
        for (var i = 0; i < charArr.length; i++) {
            // console.log (charArr)
            $("#gameplay").append('<img class="mycharr" value="' + i + '"src="assets/images/' + charArr[i].image + ' " alt="">')
            console.log(i)
        }
    }
    $(document).on("click", ".mycharr", function () {
        if (isHeroChosen === false) {
            chosenHero = charArr[$(this).attr("value")]
            console.log($(this).attr("value"))
            $(this).addClass("fader")
            $('#Hero').append('<img class="heroImage" src="assets/images/' + chosenHero.image + '"><p>Health Points:<span id="heroPoints">100</span>');
            isHeroChosen = true
        }
        else if (isEnemyChosen === false &&
            chosenHero.name != charArr[$(this).attr("value")].name) {
            console.log("Help");
            chosenEnemy = charArr[$(this).attr("value")]
            console.log (chosenEnemy)
            $(this).addClass("fader")
            $('#Enemy').append ('<img class="enemyImage" src="assets/images/'+chosenEnemy.image +'"><p>Health Points:<span id="enemyPoints">100</span>')
            isEnemyChosen = true
        }

        $("#gameMode").on("click",function(){
            var heroAttack = Math.floor(Math.random()*15)
            var enemyAttack = Math.floor (Math.random ()*15)
            var totalEnemyPoints = parseInt($("#enemyPoints").text());
            var totalHeroPoints =parseInt($("#heroPoints").text());
            totalEnemyPoints-=heroAttack 
            totalHeroPoints-=enemyAttack
            $("#enemyPoints").text(totalEnemyPoints)
            $("#heroPoints").text (totalHeroPoints)
            if (totalEnemyPoints<0){
                alert("Hero Wins!")
                $("#enemyPoints").text (100)
               

            }
            else if (totalHeroPoints<0){
                alert("Enemy Wins!")
                $("#heroPoints").text(100)
                
            }
        })
        
        



    })


    // name, hp, strength, image
    var charArr = [
        {
            name: "InspectorG",
            hp: 50,
            strength: 50,
            image: "Inspector-Gadget.jpg"
        },
        {
            name: "Claw",
            hp: 50,
            strength: 10,
            image: "Claw.jpg"
        },
        {
            name: "AgentPenny",
            hp: 60,
            strength: 60,
            image: "Agent_Penny.png"
        },
        {
            name: "Brain",
            hp: 50,
            strength: 60,
            image: "Brain.jpg"
        }

    ]

    initGame()
})
