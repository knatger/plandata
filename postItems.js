const postItems = () => {
  const saveBtn = document.querySelector('.button-post')
  let dataObj = {
    "list": []

  }
  saveBtn.addEventListener('click', function () {
    let table = document.getElementById("idtable")
    let totalRows = table.rows.length
    let totalCol = table.rows[0].cells.length
    
    for (let x = 1; x < totalRows; x++) {
      for (let y = 1; y < totalCol; y++) {
        console.log(table.rows[x].cells[y].innerHTML)
        var guid = table.rows[x].cells[1].innerHTML 
        var sum = table.rows[x].cells[2].innerHTML
      }
      dataObj.list.push({'guid': guid, 'sum' : sum})
    }
    let text = JSON.stringify(dataObj)
    console.log(text)
  })
  
}

postItems()