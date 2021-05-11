(function(win, doc) {
  function app() {
    var ajax = new XMLHttpRequest();

    var lotoFacilData;
    var megaSenaData;
    var quinaData;

    var $gameDescription = doc.querySelector('[data-js="game-description"]');
    var $gameNumbers = doc.querySelector('[data-js="game-numbers"');
    var $gamesCart = doc.querySelector('[data-js="games-cart"]');
    var $divContainer = doc.createElement('div');
    $divContainer.setAttribute('class', 'game-in-cart-container');
    var $gameValue = doc.querySelector('[data-js="games-value"]');

    var $buttonCompleteGame = doc.querySelector('[data-js="btn-complete-game"]');
    var $buttonClearGame = doc.querySelector('[data-js="btn-clear-game"]');
    var $buttonAddCart = doc.querySelector('[data-js="btn-add-cart"]');

    var $buttonGameLotoFacil = doc.querySelector('[data-js="btn-lotofacil"]');
    var $buttonGameMegaSena = doc.querySelector('[data-js="btn-megasena"]');
    var $buttonGameQuina = doc.querySelector('[data-js="btn-quina"]');

    var typeGame;
    var numbersSelected;
    var htmlGame = '';
    var gamesPriceTotal = 0;

    return {
      init: function() {
        this.gamesInfos();
        this.handleGameChange();
        this.initEvents();
      },

      gamesInfos: function() {
        ajax.open('GET', './games.json');
        ajax.send();

        ajax.addEventListener('readystatechange', function() {
          if(ajax.readyState === 4 && ajax.status === 200) {
            var data = JSON.parse(ajax.responseText);

            lotoFacilData = data.types[0];
            megaSenaData = data.types[1];
            quinaData = data.types[2];

            $buttonGameLotoFacil.textContent =  lotoFacilData.type;
            $buttonGameLotoFacil.style.background = lotoFacilData.color;
            $buttonGameLotoFacil.style.borderColor = lotoFacilData.color;
            $buttonGameLotoFacil.style.color = '#FFF';
            
            $buttonGameMegaSena.textContent =  megaSenaData.type;
            $buttonGameMegaSena.style.borderColor = megaSenaData.color;

            $buttonGameQuina.textContent =  quinaData.type;
            $buttonGameQuina.style.borderColor = quinaData.color;

            $gameDescription.textContent = lotoFacilData.description;
            
            typeGame = 'lotoFacil';

            //Adiciona os buttons na DOM
            for(let i = 0; i < lotoFacilData.range; i++) {
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

                $numbersSelected = Array.prototype.map.call($numbersSelected, function(value, index) {
                  return value.id;  
                });

                numbersSelected = $numbersSelected;
              });

              $gameNumbers.appendChild($buttonNumber);
            }
          }
        });
      },

      //Mudança de jogo
      handleGameChange: function() {
        //Loto fácil
        $buttonGameLotoFacil.addEventListener('click', function() {
          $buttonGameMegaSena.style.background = 'transparent';
          $buttonGameMegaSena.style.color = '#000';

          $buttonGameQuina.style.background = 'transparent';
          $buttonGameQuina.style.color = '#000';

          $buttonGameLotoFacil.style.background = lotoFacilData.color;
          $buttonGameLotoFacil.style.color = '#FFF';

          $gameDescription.innerHTML = '';
          $gameDescription.innerHTML = lotoFacilData.description;

          $gameNumbers.innerHTML = '';
          typeGame = 'lotoFacil';
          numbersSelected = [];

          //Adiciona botoes na DOM
          for(var i = 0; i < lotoFacilData.range; i++) {
            var $buttonNumber = doc.createElement('button');
            $buttonNumber.textContent = i + 1;

            $buttonNumber.setAttribute('class', 'btn-number');
            $buttonNumber.setAttribute('id', i + 1);

            $buttonNumber.addEventListener('click', function(event) {
              var $buttonPress = doc.querySelector(`[id="${event.target.id}"]`);

              if($buttonPress.classList.contains('btn-number-actived')) {
                $buttonPress.classList.remove('btn-number-actived');
              } else {
                $buttonPress.classList.add('btn-number-actived');
              }

              var $numbersSelected = doc.getElementsByClassName('btn-number-actived');

              $numbersSelected = Array.prototype.map.call($numbersSelected, function(value, index) {
                return value.id;  
              });

              numbersSelected = $numbersSelected;
            });

            $gameNumbers.appendChild($buttonNumber);
          }
        });

        //Mega sena
        $buttonGameMegaSena.addEventListener('click', function() {
          $buttonGameLotoFacil.style.background = 'transparent';
          $buttonGameLotoFacil.style.color = '#000';

          $buttonGameQuina.style.background = 'transparent';
          $buttonGameQuina.style.color = '#000';

          $buttonGameMegaSena.style.background = megaSenaData.color;
          $buttonGameMegaSena.style.color = '#FFF';

          $gameDescription.innerHTML = '';
          $gameDescription.innerHTML = megaSenaData.description;

          $gameNumbers.innerHTML = '';
          typeGame = 'megaSena';
          numbersSelected = [];

          //Adiciona botões na DOM
          for(let i = 0; i < megaSenaData.range; i++) {
            var $buttonNumber = doc.createElement('button');
            $buttonNumber.textContent = i + 1;

            $buttonNumber.setAttribute('class', 'btn-number');
            $buttonNumber.setAttribute('id', i + 1);

            $buttonNumber.addEventListener('click', function(event) {
              var $buttonPress = doc.querySelector(`[id="${event.target.id}"]`);

              if($buttonPress.classList.contains('btn-number-actived')) {
                $buttonPress.classList.remove('btn-number-actived');
              } else {
                $buttonPress.classList.add('btn-number-actived');
              }

              var $numbersSelected = doc.getElementsByClassName('btn-number-actived');

              $numbersSelected = Array.prototype.map.call($numbersSelected, function(value, index) {
                return value.id;  
              });

              numbersSelected = $numbersSelected;
              typeGame = 'megaSena';
            });

            $gameNumbers.appendChild($buttonNumber);
          }
        });

        //Quina
        $buttonGameQuina.addEventListener('click', function() {
          $buttonGameLotoFacil.style.background = 'transparent';
          $buttonGameLotoFacil.style.color = '#000';

          $buttonGameMegaSena.style.background = 'transparent';
          $buttonGameMegaSena.style.color = '#000';

          $buttonGameQuina.style.background = quinaData.color;
          $buttonGameQuina.style.color = '#FFF';

          $gameDescription.innerHTML = '';
          $gameDescription.innerHTML = quinaData.description;

          $gameNumbers.innerHTML = '';
          typeGame = 'quina';
          numbersSelected = [];

          //Adiciona botões na DOM
          for(let i = 0; i < quinaData.range; i++) {
            var $buttonNumber = doc.createElement('button');
            $buttonNumber.textContent = i + 1;

            $buttonNumber.setAttribute('class', 'btn-number');
            $buttonNumber.setAttribute('id', i + 1);

            $buttonNumber.addEventListener('click', function(event) {
              var $buttonPress = doc.querySelector(`[id="${event.target.id}"]`);

              if($buttonPress.classList.contains('btn-number-actived')) {
                $buttonPress.classList.remove('btn-number-actived');
              } else {
                $buttonPress.classList.add('btn-number-actived');
              }

              var $numbersSelected = doc.getElementsByClassName('btn-number-actived');

              $numbersSelected = Array.prototype.map.call($numbersSelected, function(value, index) {
                return value.id;  
              });

              numbersSelected = $numbersSelected;
              typeGame = 'quina';
            });

            $gameNumbers.appendChild($buttonNumber);
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

        switch(typeGame) {
          case 'lotoFacil': 
            if(
              numbersSelected.length < lotoFacilData["max-number"] || 
              numbersSelected.length > lotoFacilData["max-number"]
            ) {
              return alert('Para a loto fácil deve se escolher 15 números!');
            }

            htmlGame += `
              <div class="game-in-cart-container">
                <button class="btn-trash-cart"><i class="material-icons-outlined">delete</i></button>
                <div class="numbers-game-container" style="border-left-color:${lotoFacilData.color};">
                  <p class="game-numbers-cart">${numbersSelected.join()}</p>
                  <p class="game-name-cart">${lotoFacilData.type} <span class="game-value-cart" data-js="game-price" id="${lotoFacilData.price}">R$ ${lotoFacilData.price}</span></p>
                </div>
              </div>`;

            $gamesCart.innerHTML = '';
            $gamesCart.innerHTML = htmlGame;

            allGamesPrice = doc.querySelectorAll('[data-js="game-price"]');
            gamesPriceTotal = 0;
            Array.prototype.map.call(allGamesPrice, function(value) {
              gamesPriceTotal += Number(value.id); 
            });

            $gameValue.innerHTML = '';
            $gameValue.innerHTML = gamesPriceTotal.toFixed(2);

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

                $gameValue.innerHTML = '';
                $gameValue.innerHTML = gamesPriceTotal.toFixed(2);
              }
            });
          break;
          case 'megaSena':
            if(
              numbersSelected.length < megaSenaData["max-number"] || 
              numbersSelected.length > megaSenaData["max-number"]
            ) {
              return alert('Para a mega deve se escolher 6 números!');
            }

            htmlGame += `
              <div class="game-in-cart-container">
                <button class="btn-trash-cart"><i class="material-icons-outlined">delete</i></button>
                <div class="numbers-game-container" style="border-left-color:${megaSenaData.color};">
                  <p class="game-numbers-cart">${numbersSelected.join()}</p>
                  <p class="game-name-cart">${megaSenaData.type} <span class="game-value-cart" data-js="game-price" id="${megaSenaData.price}">R$ ${megaSenaData.price}</span></p>
                </div>
              </div>`;

            $gamesCart.innerHTML = '';
            $gamesCart.innerHTML = htmlGame;

            allGamesPrice = doc.querySelectorAll('[data-js="game-price"]');
            gamesPriceTotal = 0;
            Array.prototype.map.call(allGamesPrice, function(value) {
              gamesPriceTotal += Number(value.id); 
            });

            $gameValue.innerHTML = '';
            $gameValue.innerHTML = gamesPriceTotal.toFixed(2);

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

                $gameValue.innerHTML = '';
                $gameValue.innerHTML = gamesPriceTotal.toFixed(2);
              }
            });
          break;
          case 'quina':
            if(
              numbersSelected.length < quinaData["max-number"] || 
              numbersSelected.length > quinaData["max-number"]
            ) {
              return alert('Para a quina deve se escolher 5 números!');
            }
            
            htmlGame += `
              <div class="game-in-cart-container">
                <button class="btn-trash-cart"><i class="material-icons-outlined">delete</i></button>
                <div class="numbers-game-container" style="border-left-color:${quinaData.color};">
                  <p class="game-numbers-cart">${numbersSelected.join()}</p>
                  <p class="game-name-cart">${quinaData.type} <span class="game-value-cart" data-js="game-price" id="${quinaData.price}">R$ ${quinaData.price}</span></p>
                </div>
              </div>`;

            $gamesCart.innerHTML = '';
            $gamesCart.innerHTML = htmlGame;

            allGamesPrice = doc.querySelectorAll('[data-js="game-price"]');
            gamesPriceTotal = 0;
            Array.prototype.map.call(allGamesPrice, function(value) {
              gamesPriceTotal += Number(value.id); 
            });

            $gameValue.innerHTML = '';
            $gameValue.innerHTML = gamesPriceTotal.toFixed(2);

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

                $gameValue.innerHTML = '';
                $gameValue.innerHTML = gamesPriceTotal.toFixed(2);
              }
            });
          break;
          default:
          return;
        }
      },

      clearGame: function() {
        var buttonsActived = doc.querySelectorAll('.btn-number-actived');
        
        if(buttonsActived.length === 0) {
          return;
        }

        //Remove a classe actived dos botões
        Array.prototype.map.call(buttonsActived, function(value) {          
          value.classList.remove('btn-number-actived');
        });
        numbersSelected = [];
      },

      completeGame: function() {
        var ids = [];
        var random;
        var $numbersButtons;

        switch(typeGame) {
          case 'lotoFacil': 
          if(numbersSelected === undefined || numbersSelected.length === 0) {
            while(ids.length < lotoFacilData["max-number"]) {
              random = Math.floor(Math.random() * lotoFacilData.range);

              if (ids.indexOf(random) == -1) {
                ids.push(random);
              }
            }

            $numbersButtons = doc.querySelectorAll(`.btn-number`);

            ids.map(function(value) {
              $numbersButtons[value].classList.add('btn-number-actived');
            });
            numbersSelected = ids;
            ids = [];
          }
          break;
          case 'megaSena': 
            if(numbersSelected === undefined || numbersSelected.length === 0) {
              while(ids.length < megaSenaData["max-number"]) {
                random = Math.floor(Math.random() * megaSenaData.range);

                if (ids.indexOf(random) == -1) {
                  ids.push(random);
                }
              }

              $numbersButtons = doc.querySelectorAll(`.btn-number`);

              ids.map(function(value) {
                $numbersButtons[value].classList.add('btn-number-actived');
              });
              numbersSelected = ids;
              ids = [];
            }
          break;
          case 'quina':
            if(numbersSelected === undefined || numbersSelected.length === 0) {
              while(ids.length < quinaData["max-number"]) {
                random = Math.floor(Math.random() * quinaData.range);

                if (ids.indexOf(random) == -1) {
                  ids.push(random);
                }
              }

              $numbersButtons = doc.querySelectorAll(`.btn-number`);

              ids.map(function(value) {
                $numbersButtons[value].classList.add('btn-number-actived');
              });
              numbersSelected = ids;
              ids = [];
            }
          break;
          default:
          return;
        }
      }
    }
  }
  app().init();
})(window, document);