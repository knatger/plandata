const getData = () => {
    fetch('test.json') 
    .then((res) => res.json()) 
    .then((data) => {
    document.querySelector('.content').innerHTML = '<table class="table-content" id="idtable" border="1"><thead> <tr> <th>Статья затрат</th> <th>Значение</th></tr></thead></table>'
    data.listOfItems.forEach(item => {
      let row = document.createElement('tr')
      row.innerHTML =  `
      <td>${item.name}</td>
      <td style="display:none">${item.guid}</td>  
      
        <td class="edittd" width="30px"contenteditable></td>`

      document.querySelector('.table-content').appendChild(row)
    });
  }

    )}
  getData();