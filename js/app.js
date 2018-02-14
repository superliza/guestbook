//traer elemetos
var $largeButton = $('#large-button');
var $mediumButton = $('#medium-button');
var $smallButton = $('#small-button');
var $colorTextButton = $('#color-text-button');
var $backColorButton = $('#back-color-button');
var $leftButton = $('#left-button');
var $centerButton = $('#center-button');
var $rightButton = $('#right-button');
var $typeCommit = $('#type-commit');
var $divCommit = $('#commit-real-time');
var $sendCommit = $('#send-commit');

//se crea elemento
var $showCommitRealTime = $('<p />');

//se da atributos al elemento
$showCommitRealTime.attr('id', 'commit');

//se agrega a su elemento padre
$divCommit.prepend($showCommitRealTime);

//se asignan eventos
function loadPage() {
    $typeCommit.keyup(typeRealTime);
    $smallButton.click(smallText);
    $mediumButton.click(mediumText);
    $largeButton.click(largeText);
    $leftButton.click(leftText);
    $centerButton.click(centerText);
    $rightButton.click(rightText);
    $colorTextButton.click(textColor);
    $backColorButton.click(backColor);
}

function typeRealTime() {
    var $valueCommit = $(this).val();
    $showCommitRealTime.text($valueCommit);
}

function smallText() {
    var sizeText = $showCommitRealTime.css('font-size', "1.5vh");
}

function mediumText() {
    var sizeText = $showCommitRealTime.css('font-size', "5vh");
    
}

function largeText() {
    var sizeText = $showCommitRealTime.css('font-size', "15vh");
    
}

function leftText() {
    $showCommitRealTime.addClass("left-align");
    $showCommitRealTime.removeClass("right-align");
    $showCommitRealTime.removeClass("center-align");
}

function centerText() {
    $showCommitRealTime.addClass("center-align");
    $showCommitRealTime.removeClass("right-align");
    $showCommitRealTime.removeClass("left-align");
}

function rightText() {
    $showCommitRealTime.addClass("right-align");
    $showCommitRealTime.removeClass("center-align"); 
    $showCommitRealTime.removeClass("left-align");   
}

function textColor() {
    if($typeCommit.val().length > 0) {
        var typeColor = prompt("Escribe tu color favorito para el texto");
        $showCommitRealTime.css("color", typeColor);       
    } else {
        console.log("adiós");       
    }   
}

function backColor() {
    if($typeCommit.val().length > 0) {
        var typeBackgroundColor = prompt("Escribe tu color de fondo favorito para el texto");
        $showCommitRealTime.css("background-color", typeBackgroundColor);
    }   
}

$(document).ready(loadPage);