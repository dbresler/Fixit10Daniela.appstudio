let results3 = ""
let req3 = ""
let query3 = ""
let customerInfo3 = ['']

customerUpdate.onshow=function(){
  drpUpdate.clear()
    query3 = "SELECT name FROM customer"
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
  
  if (req3.status == 200) { //transit worked.
      customerInfo3 = JSON.parse(req3.responseText)
        drpUpdate.clear()
        for (i = 0; i <= customerInfo3.length - 1; i++)
                drpUpdate.addItem(customerInfo3[i])
    } else {
        NSB.MsgBox(`Error: ${req3.status}`);
    }  
}
let newName = " "
drpUpdate.onclick=function(s){
    if(typeof(s) == "object") {
      return
    } else 
    drpUpdate.value = s 
    newName = drpUpdate.value
  }
}

btnCustomerUpdate.onclick=function(){
    query3 = "UPDATE customer SET name =" + '"' + inptCustomerUpdate.value + '"' + " WHERE name = " + '"' + drpUpdate.value + '"'
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
    if (req3.status ==200){
    if (req3.responseText == 500){
    lblNewMessage.value = `The name has been changed from ${drpUpdate.value} to ${inptCustomerUpdate.value}`
    
     query3 = `SELECT name FROM customer;`
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
    addedCustomers = " "
    if (req3.status == 200) { 
       addedCustomers = JSON.parse(req3.responseText)
      console.log(addedCustomers)
    } else
      console.log("error")
    
    let newCustomerList1 = ""
    for (i = 0; i <= addedCustomers.length - 1; i++)
      newCustomerList1  = newCustomerList1 + addedCustomers[i] + "\n"
    txtResults2.value = newCustomerList1
  }
  }
  }



