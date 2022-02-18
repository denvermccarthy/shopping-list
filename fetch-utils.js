const SUPABASE_URL = 'https://lxifeplqjanpuugbzgyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aWZlcGxxamFucHV1Z2J6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU0NTEsImV4cCI6MTk2MDAxMTQ1MX0.4hkIbGdYMJ7SzqMSm39JtJRvMyFal0vMXHHWB0APEJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function fetchItems() {
    const resp = await client.from('shopping_list').select().order('completed');
    console.log(resp);
    return checkError(resp);
}

export async function createItems(name, quantity) {
    const resp = await client.from('shopping_list').insert({ name: name, quantity: quantity });
    console.log(resp);
    return checkError(resp);
}

export async function updateItems(id) {
    const resp = await client.from('shopping_list').update({ completed: true }).match({ id });
    return checkError(resp);
}

export async function deleteItems(id) {
    const resp = await client.from('shopping_list').delete().match({ id });
    return checkError(resp);
}

export async function deleteAllItems() {
    const resp = await client.from('shopping_list').delete().match({ 'user_id': getUser().id });
    return checkError(resp);
}

export async function getQuantities() {
    const resp = await client.from('shopping_list').select('quantity');
    console.log(resp, 'quantities');
    return checkError(resp);
}
function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
