document.querySelector('.formData').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = {
        users: form.users.value,
        pets: form.pets.value,
    };

    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            window.location.replace(`/results.html?users=${formData.users}&pets=${formData.pets}`);
        } else {
            console.error('Error al procesar la solicitud en el backend');
            alert('Hubo un error en el servidor.');
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al procesar tu solicitud.');
    }
});

const params = new URLSearchParams(window.location.search);
const users = params.get('users');
const pets = params.get('pets');

document.getElementById('users').textContent = `Usuarios a crear: ${users}`;
document.getElementById('pets').textContent = `Mascotas a crear: ${pets}`;