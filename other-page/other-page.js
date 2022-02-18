import { checkAuth, createItems, fetchItems, logout } from '../fetch-utils.js';
import { renderListItem } from '../render-utils.js';

// auth/fetch utils stuff
checkAuth();
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    logout();
});

export async function renderItems() {
    const items = await fetchItems();
    const shopList = document.getElementById('items-container');
    shopList.textContent = '';

    items.forEach(element => {
        shopList.append(renderListItem(element));

    });
}
window.addEventListener('load', async () => {
    await renderItems();
});


// grab content from form
const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    // console.log(data.get('quantity'), data.get('name'));
    
    await createItems(data.get('name'), data.get('quantity'));
    renderItems();
    form.reset();
});

// render db items to list 
