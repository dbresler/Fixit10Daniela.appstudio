let results2 = ""
let req2 = ""
let query2 = ""
let customerInfo2 = ['']


customerAdd.onshow=function(){
  drpAdd.clear()
    query2 = "SELECT name FROM customer"
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=amj88804&query=" + query)

  if (req2.status == 200){
   results2 = JSON.parse(req2.responseText)
   console.log(results2)
   console.log(typeof(results2))
   for (i = 0; i <= results2.length - 1; i++){
            drpAdd.addItem(results2[i])
              }
}
}
    
btnAdd.onclick=function(){
if(typeof(s) == "object") {
  return
  } else {
     query2 = `INSERT INTO customer (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178');`
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
    lblAdd.text = `Jesse Antiques was added!`  //hardcode Jesse Antiques into the txtAdd
    
    query2 = `SELECT name FROM customer;`
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)

    updatedCustomers = ""
    if (req2.status == 200) { //transit worked.
      updatedCustomers = JSON.parse(req2.responseText)
      console.log(updatedCustomers)
    } else
      console.log("error")
    
    let newCustomerList = ""
    for (i = 0; i <= updatedCustomers.length - 1; i++)
      newCustomerList = newCustomerList + updatedCustomers[i] + "\n"
    txtAdd.value = newCustomerList
  }
}

btnNextForm3.onclick=function(){
  ChangeForm(customerUpdate)
}
