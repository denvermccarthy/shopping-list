// div I want to generate with render function

{/* <div class="incompleted item">
        <div class="button-container">
            <div class="delete"></div>
            <div class="complete"></div>
        </div>
        <div class="info-container">
            <h3>Name</h3>
            <p>Quantity: </p>
        </div>
    </div> */}

export function renderListItem(object) {
    
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('item');
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('button-container');
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete');
    const completeDiv = document.createElement('div');
    buttonsDiv.append(deleteDiv, completeDiv);
    
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');
    const name = document.createElement('h3');
    const quantity = document.createElement('p');
    infoDiv.append(name, quantity);
    
    name.textContent = object.name;
    quantity.textContent = `Quantity: ${object.quantity}`;
    if (object.completed) {
        completeDiv.classList.add('complete');
        parentDiv.classList.add('completed');
    } else {
        completeDiv.classList.add('incomplete');
        parentDiv.classList.add('incompleted');
    }

    completeDiv.addEventListener('click', () => {
        console.log('clicked!!!');
    });

    parentDiv.append(buttonsDiv, infoDiv);
    return parentDiv;
}