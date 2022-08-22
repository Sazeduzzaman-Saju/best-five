let playerArray = [];

function showDisplay(playerName) {

    const tablebody = document.getElementById('display-player-name');
    tablebody.innerHTML = '';
    for (let i = 0; i < playerName.length; i++) {

        const playerName = playerArray[i].getPlayerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${playerName}</td>`;
        
        
            if (playerArray.length > 5) {
                alert('Max Player Selected');
                break;
            }else{
                tablebody.appendChild(tr);
                
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


    if (playerArray.length > 5){ 
        alert('Player Success Fully Selcted & Button Are Disable');
        const getBoxElemet = document.getElementById('updated-value-element');
        getBoxElemet.style.display = 'none';
        return;
    }
    showDisplay(playerArray);
}

