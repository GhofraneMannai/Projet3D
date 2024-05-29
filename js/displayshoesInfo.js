// Display painting info in the DOM
export const displayshoesInfo = (info) => {
  const infoElement = document.getElementById("shoes-info"); // Get the reference

  // Set the html content inside info element
  infoElement.innerHTML = `
      <h3>${info.title}</h3>
      <p>Brand: ${info.brand}</p>
      <p>Description: ${info.description}</p>
      <p>Price: ${info.price}</p>
    `;
  infoElement.classList.add("show"); // Add the 'show' class
};

// Hide painting info in the DOM
export const hideshoesInfo = () => {
  const infoElement = document.getElementById("shoes-info"); 
  infoElement.classList.remove("show"); 
};
