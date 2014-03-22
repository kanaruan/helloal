// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "pokeimg/212/i001-212.png",
        "pokeimg/212/i002-212.png",
        "pokeimg/212/i003-212.png",
        "pokeimg/212/i004-212.png",
        "pokeimg/212/i005-212.png",
        "pokeimg/212/i006-212.png",
        "pokeimg/212/i007-212.png",
        "pokeimg/212/i008-212.png",
        "pokeimg/212/i009-212.png",
        "pokeimg/212/i150-212.png",
        "pokeimg/212/i151-212.png",
        "pokeimg/212/i251-212.png",

        "pokeimg/114/i001-114.png",
        "pokeimg/114/i002-114.png",
        "pokeimg/114/i003-114.png",
        "pokeimg/114/i004-114.png",
        "pokeimg/114/i005-114.png",
        "pokeimg/114/i006-114.png",
        "pokeimg/114/i007-114.png",
        "pokeimg/114/i008-114.png",
        "pokeimg/114/i009-114.png",
        "pokeimg/114/i150-114.png",
        "pokeimg/114/i151-114.png",
        "pokeimg/114/i251-114.png"

    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
