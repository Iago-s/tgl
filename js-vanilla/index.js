(function(win, doc) {
  function app() {
    var ajax = new XMLHttpRequest();

    var $modalContainer = doc.querySelector('[data-js="modal-container"]');
    var $alertContainer = doc.querySelector('[data-js="modal-alert"]');
    var $modalButton = doc.querySelector('[data-js="modal-button"]');
    var $modalMessage = doc.querySelector('[data-js="modal-message"]');

    var $gameButtons;
    var games = [];
    var currentGame;
    var htmlGame = '';
    var $button;
    var numbersSelected = [];
    var gamesPriceTotal = 0;

    var $gameDescription = doc.querySelector('[data-js="game-description"]');
    var $gameNumbers = doc.querySelector('[data-js="game-numbers"');
    var $gamesCart = doc.querySelector('[data-js="games-cart"]');
    var $divContainer = doc.createElement('div');
    $divContainer.setAttribute('class', 'game-in-cart-container');
    var $gameValue = doc.querySelector('[data-js="games-value"]');
    var $feedback = document.querySelector('[data-js="feedback"]');

    var $buttonCompleteGame = doc.querySelector('[data-js="btn-complete-game"]');
    var $buttonClearGame = doc.querySelector('[data-js="btn-clear-game"]');
    var $buttonAddCart = doc.querySelector('[data-js="btn-add-cart"]');
    var $btnGames = document.querySelector('[data-js="buttons"]');

    return {
      init: function() {
        this.gamesInfos();
        this.initEvents();
      },

      gamesInfos: async function() {
        ajax.open('GET', './games.json');
        ajax.send();

        ajax.addEventListener('readystatechange', function() {
          if(ajax.readyState === 4 && ajax.status === 200) {
            var data = JSON.parse(ajax.responseText);

            data.types.map((value) => games.push(value));

            games.map(function(value, index) {
              $button = doc.createElement('button');
              
              $button.style.borderColor = value.color;
              $button.setAttribute('class', 'btn-game');
              $button.setAttribute('value', `${index}`);
              $button.textContent = value.type;

              if(!index) {
                $button.style.background = value.color;
                $button.style.color = '#FFF';
              }

              $btnGames.appendChild($button);
            });

            $gameButtons = doc.querySelectorAll('.btn-game');

            //Defaul game lotofácil
            currentGame = games[0];

            $gameDescription.textContent = currentGame.description;

            var addButtonsInDOM = () => {
              for(let i = 0; i < currentGame.range; i++) {
                var $buttonNumber = doc.createElement('button');
                $buttonNumber.textContent = i + 1;
  
                $buttonNumber.setAttribute('class', 'btn-number');
                $buttonNumber.setAttribute('id', i + 1);
  
                //Usuario escolhe um número
                $buttonNumber.addEventListener('click', function(event) {
                  var $buttonPress = doc.querySelector(`[id="${event.target.id}"]`);
  
                  if($buttonPress.classList.contains('btn-number-actived')) {
                    $buttonPress.classList.remove('btn-number-actived');
                  } else {
                    $buttonPress.classList.add('btn-number-actived');
                  }
  
                  var $numbersSelected = doc.getElementsByClassName('btn-number-actived');
  
                  $numbersSelected = Array.prototype.map.call($numbersSelected, function(value) {
                    return value.id;  
                  });
  
                  numbersSelected = $numbersSelected;
                });
  
                $gameNumbers.appendChild($buttonNumber);
              }
            }

            addButtonsInDOM();

            Array.prototype.forEach.call($gameButtons, function(value) {
              value.addEventListener('click', function(event) {
                currentGame = games[event.target.value];

                numbersSelected = [];

                $gameDescription.textContent = currentGame.description;

                Array.prototype.forEach.call($gameButtons, function(value) {
                  value.style.background = 'transparent';
                  value.style.color = '#000';
                });

                value.style.background = currentGame.color;
                value.style.color = '#FFF';
                $gameNumbers.innerHTML = '';

                addButtonsInDOM();
              });
            });
          }
        });
      },

      //Inicia o evento de click nos botões Complete game, Clear game e Add to cart
      initEvents: function() {
        $buttonAddCart.addEventListener('click', this.addCart);
        $buttonClearGame.addEventListener('click', this.clearGame);
        $buttonCompleteGame.addEventListener('click', this.completeGame);
      },

      addCart: function() {
        var allGamesPrice;
        var $buttonsRemoveGame;
        var buttonParent ;

        if(
          numbersSelected.length < currentGame["max-number"] || 
          numbersSelected.length > currentGame["max-number"]
        ) {
          $modalContainer.style.display = 'flex';
          
          $modalMessage.innerHTML = `Para a ${currentGame.type} deve se escolher ${currentGame["max-number"]} números!`
          
          $modalContainer.addEventListener('click', () => {
            $modalContainer.style.display = 'none';
          });

          $modalButton.addEventListener('click', () => {
            $modalContainer.style.display = 'none';
          });
          return;
        }

        htmlGame += `
          <div class="game-in-cart-container">
            <button class="btn-trash-cart"><i class="material-icons-outlined">delete</i></button>
            <div class="numbers-game-container" style="border-left-color:${currentGame.color};">
              <p class="game-numbers-cart">${numbersSelected.join()}</p>
              <p class="game-name-cart">${currentGame.type} 
                <span class="game-value-cart" data-js="game-price" id="${currentGame.price}">
                  ${currentGame.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                </span>
              </p>
            </div>
          </div>`;

        $feedback.textContent = '';

        $gamesCart.innerHTML = '';
        $gamesCart.innerHTML = htmlGame;

        allGamesPrice = doc.querySelectorAll('[data-js="game-price"]');
        gamesPriceTotal = 0;
        Array.prototype.map.call(allGamesPrice, function(value) {
          gamesPriceTotal += Number(value.id); 
        });

        $gameValue.innerHTML = '';
        $gameValue.innerHTML = gamesPriceTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

        $buttonsRemoveGame = doc.getElementsByClassName(`btn-trash-cart`);

        //Botão remover jogo
        Array.prototype.forEach.call($buttonsRemoveGame, function(button) {
          button.onclick = function() {
            buttonParent = button.parentNode;

            $gamesCart.removeChild(buttonParent);
            htmlGame = $gamesCart.innerHTML;

            allGamesPrice = doc.querySelectorAll('[data-js="game-price"]');
            gamesPriceTotal = 0;
            Array.prototype.map.call(allGamesPrice, function(value) {
              gamesPriceTotal += Number(value.id); 
            });

            if(!gamesPriceTotal) {
              $feedback.textContent = 'Faça seu primeiro jogo';
            }

            $gameValue.innerHTML = '';
            $gameValue.innerHTML = gamesPriceTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
          }
        });

        numbersSelected = [];
        app().clearGame();
      },

      clearGame: function() {
        var buttonsActived = doc.querySelectorAll('.btn-number-actived');
        
        if(buttonsActived.length === 0) {return}

        //Remove a classe actived dos botões
        Array.prototype.map.call(buttonsActived, (value) => {
          value.classList.remove('btn-number-actived');
        });
        numbersSelected = [];
      },

      completeGame: function() {
        var ids = [];
        var random;
        var $numbersButtons;
        var numbersRemaining  = 0;

        if(numbersSelected.length === 0) {
          while(ids.length < currentGame["max-number"]) {
            random = Math.floor(Math.random() * (currentGame.range - 1) + 1);
            
            if (ids.indexOf(random) == -1) {
              ids.push(random);
            }
          }
        } else {
          if(numbersSelected.length >= currentGame["max-number"]) {
            app().clearGame();
            numbersSelected = [];
          }

          for(var i = 0; i < numbersSelected.length; i++) {
            ids.push(parseInt(numbersSelected[i]));
          }

          while(numbersRemaining < (currentGame['max-number'] - numbersSelected.length)) {
            random = Math.floor(Math.random() * (currentGame.range - 1) + 1);
            
            if (ids.indexOf(random) == -1) {
              ids.push(random);
              numbersRemaining++;
            }
          }
        }

        $numbersButtons = doc.querySelectorAll(`.btn-number`);
        ids.map((value) => $numbersButtons[value-1].classList.add('btn-number-actived'));
          
        numbersSelected = ids.sort((a, b) => a - b);
      }
    }
  }
  app().init();
})(window, document);