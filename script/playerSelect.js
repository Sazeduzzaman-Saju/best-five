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
    const getBoxElemet = document.getElementById('updated-value-element');
    const getButton = document.getElementById('button');

    if (playerArray.length > 5){ 
        alert('Player Success Fully Selcted & Button Are Disable');
        getBoxElemet.style.display = 'none';
        return;
    }
    showDisplay(playerArray);
}

const boxes = document.querySelectorAll('.btns');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);

    box.setAttribute('style', 'display: none;');
  });
});