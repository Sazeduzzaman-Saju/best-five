let playerArray = [];

function showDisplay(inputArry) {

    const tablebody = document.getElementById('display-player-name');
    tablebody.innerHTML = '';
    for (let i = 0; i < inputArry.length; i++) {
        const inputArry = playerArray[i].getPlayerName;
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${inputArry}</td>`;
        
        tablebody.appendChild(tr);
            if (playerArray.length > 5) {
                alert('Max Player Selected');
                break;
            }else{
                 
            }
            
        }

    }


function selectedPlayer(element) {
    const getPlayerName = element.parentNode.parentNode.children[0].innerText;
    const namesobj ={
        getPlayerName: getPlayerName
    } 

    playerArray.push(namesobj);

    document.getElementById('updated-value-element').innerText = playerArray.length;
    const getBoxElemet = document.getElementById('updated-value-element');


    if (playerArray.length > 5){ 
        alert('Maximum Player Are Selected');
        getBoxElemet.style.display = 'none';
        return;
    }
    showDisplay(playerArray);
}

const buttons = document.querySelectorAll('.button-select');

buttons.forEach(button => {
  button.addEventListener('click', function() {

    if (button.click) {
        button.setAttribute('style', 'display: none;');
    }
  });
});


