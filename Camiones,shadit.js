document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticketForm');
    const quantityInput = document.getElementById('quantity');
    const totalPrice = document.getElementById('totalPrice');
  
    // Precio por boleto
    const ticketPrice = 10;
  
    // Función para calcular el precio total
    function calculateTotalPrice(quantity) {
      return quantity * ticketPrice;
    }
  
    // Función para actualizar el precio total en la interfaz
    function updateTotalPrice() {
      const quantity = parseInt(quantityInput.value);
      const total = calculateTotalPrice(quantity);
      totalPrice.textContent = `Precio Total: $${total}`;
    }
  
    // Evento para calcular el precio total cuando se envía el formulario
    ticketForm.addEventListener('submit', function(event) {
      event.preventDefault();
      updateTotalPrice();
    });
  
    // Calcular el precio total inicialmente
    updateTotalPrice();
  });
  