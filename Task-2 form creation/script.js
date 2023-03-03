var title = document.getElementById('title');
var description = document.getElementById('description');
const form = document.getElementById('form');
const tableContainer = document.getElementById('table-container');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const gender = document.getElementById('gender').value;
  const foodItems = document.querySelectorAll('input[name="food-items"]:checked');
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  let foodItemsArray = [];
  foodItems.forEach(function(element) {
    foodItemsArray.push(element.value);
  });

  const table = `
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>PINCODE</th>
        <th>Gender</th>
        <th>Food Items</th>
        <th>State</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodItemsArray}</td>
        <td>${state}</td>
        <td>${country}</td>
      </tr>
    </table>
  `;

  tableContainer.innerHTML = table;
  form.reset();
});
