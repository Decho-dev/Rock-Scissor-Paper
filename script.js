$(document).ready(function() {
    let you = $('.you');
    let numy = $('.numy');
    let numc = $('.numc');
    let numberYou = 0;
    let numberComp = 0;

    $('img').click(function() {
        let newDiv = $('<div>');
        let newImg = $('<img>');
        newImg.attr('src', $(this).attr('src'))
        let text = $(this).attr('alt')
        you.append(newDiv);
        newDiv.append(newImg);
        newDiv.append(text);
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    
        if (getRandomInt(3) === 1) {
            let compDiv = $('<div>');
            let img = $('<img>').attr('src', $('.rock img').attr('src'));
            compDiv.append(img);
            compDiv.appendTo($('.comp'))
            let text = 'rock';
            compDiv.append(text)
            if (newDiv.text()== 'paper' && compDiv.text() == 'rock') {
                numberYou++
                numy.text(numberYou);
            }else if(newDiv.text()== 'scissors' && compDiv.text() == 'rock') {
                numberComp++;
                numc.text(numberComp);
            }
        } else if(getRandomInt(3) === 2) {
            let compDiv = $('<div>');
            let img = $('<img>').attr('src', $('.paper img').attr('src'));
            compDiv.append(img);
            compDiv.appendTo($('.comp'))
            let text = 'paper';
            compDiv.append(text)
            if (newDiv.text()== 'rock' && compDiv.text() == 'paper') {
                numberComp++
                numc.text(numberComp);
            } else if(newDiv.text()== 'scissors' && compDiv.text() == 'paper') {
                numberYou++
                numy.text(numberYou);
            }
        } else {
            let compDiv = $('<div>');
            let img = $('<img>').attr('src', $('.scissors img').attr('src'));
            compDiv.append(img);
            compDiv.appendTo($('.comp'))
            let text = 'scissors';
            compDiv.append(text)
            if (newDiv.text() == 'paper' && compDiv.text() == 'scissors') {
                numberComp++
                numc.text(numberComp);
            }else if(newDiv.text() == 'rock' && compDiv.text() == 'scissors') {
                numberYou++
                numy.text(numberYou);
            }

        }

    })
})