function saveArrayData() {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var storedData = queryString.split(",");
    console.log('queries', storedData);
    var list = document.getElementById('output');
          const row = document.createElement('tr');
      row.innerHTML = `
        <td>${ storedData[0]}</td>
        <td>${storedData[1]}</td>
         <td>${storedData[2]}</td>
          <td>${storedData[3]}</td>
           <td>${storedData[4]}</td>
            <td>${storedData[5]}</td>
        <td><button onclick="editdetail('${storedData}')" style="background-color:darkgrey; text-items: center " >Edit</button> 
      `; 
      list.appendChild(row);
  }
    
  function editdetail(storedData) {
    console.log("Hello", storedData);
     window.location.replace("edit_form_detail.html?" + storedData);
  }