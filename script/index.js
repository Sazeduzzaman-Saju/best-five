//Genarate Input Value To Number
function getInputValues(inputValue) {
    const getInputElement = document.getElementById(inputValue);
    const getInputValue = getInputElement.value;
    const convertInputValue = parseInt(getInputValue);
    return convertInputValue;
}
//Genarate InnerText To Number
function getElementText(elementId) {
    const getElementValue = document.getElementById(elementId);
    const getElementsText = getElementValue.innerText;
    const convertElementText = parseInt(getElementsText);
    return convertElementText;
}
//Genarate Plus Amount
function getPlusAmount(a , b) {
    const total =  a + b;
    return total;
}

document.getElementById('player-cost').addEventListener('click', function(){
    const playerInputCost = getInputValues('player-cost-field'); // Player Cost Input Field 1000
    const playerElementCost =  getElementText('player-total-cost'); // Total Player Cost Element
    
    const getPlayerCost = playerInputCost * 5; // Total Player Cost
    
    const getPlayerTotalCost = document.getElementById('player-total-cost');
    const getplayerCostAmount = getPlusAmount(playerElementCost , getPlayerCost) 
    getPlayerTotalCost.innerText = getplayerCostAmount;// Displaye Player Total Cost
    
})

document.getElementById('total-cost').addEventListener('click', function(){
    const getTrainFieldValue = getInputValues('tainer-cost-field');
    const getTrainFieldValue = getInputValues('tainer-cost-field');
    alert(getTrainFieldValue);
})