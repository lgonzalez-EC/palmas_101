// Función para cargar platillos dinámicos desde JSON
async function loadMenuItems(category, tabId) {
    try {
        const response = await fetch(`menu-${category}.json`);
        const menuData = await response.json();

        // Seleccionar 5 platillos aleatorios
        const shuffled = menuData.sort(() => 0.5 - Math.random());
        const selectedItems = shuffled.slice(0, 5);

        // Generar HTML para los platillos
        const menuHtml = selectedItems.map(item => {
            const variantesHtml = item.variantes && item.variantes.length > 0
                ? `<ul class="list-unstyled mt-2">${item.variantes.map(v => `<li><small>${v.nombre} ($${v.precio_adicional})</small></li>`).join('')}</ul>`
                : '';

            return `
                <div class="col-lg-12 col-md-12">
                    <div class="menu-item d-flex align-items-center">
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                <h4>${item.nombre}</h4>
                                <h4 class="text-dark">$${item.precio}</h4>
                            </div>
                            <p class="mb-0">${item.descripcion}</p>
                            ${variantesHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Actualizar el contenido del tab
        const tabContent = document.querySelector(`#${tabId} .menu-items .row.g-4`);
        if (tabContent) {
            tabContent.innerHTML = menuHtml;
        }
    } catch (error) {
        console.error('Error cargando el menú:', error);
    }
}

// Función para actualizar menús periódicamente (cada hora)
function scheduleMenuUpdates() {
    // Cargar menús iniciales
    loadMenuItems('desayunos', 'tab-6');
    loadMenuItems('comida', 'tab-7');
    loadMenuItems('postres', 'tab-8');

    // Actualizar cada hora (3600000 ms)
    setInterval(() => {
        loadMenuItems('desayunos', 'tab-6');
        loadMenuItems('comida', 'tab-7');
        loadMenuItems('postres', 'tab-8');
    }, 600000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', scheduleMenuUpdates);
