let results1 = ""
let req1 = ""
let query1 = ""
let customerInfo1 = ['']

customerDelete.onshow=function(){
  drpDelete.clear()
    query1 = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)

if (req1.status == 200) { 
    customerInfo1 = JSON.parse(req1.responseText)
    drpDelete.clear()
    for (i = 0; i <= customerInfo1.length - 1; i++)
    drpDelete.addItem(customerInfo1[i])
  }  else {
        NSB.MsgBox(`Error: ${req.status}`);
    }  
}

drpDelete.onclick=function(){
  let deletedCustomer = txtResults1.value 
  let found = false
   for (i = 0; i <= customerInfo1.length-1; i++) {
     if (deletedCustomer == customerInfo1[i][1])
     found = true 
     break
}
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
   else if (found == true) {
      let query1 = "DELETE FROM customer WHERE name = " + '"' + deletedCustomer + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
      if (req1.status == 200) {
            if (req1.responseText == 500)  
                NSB.MsgBox(`You have successfully deleted  ${deletedCustomer}.`)
            else
                NSB.MsgBox(`There was a problem deleting ${deletedCustomer} from the database.`)
       }else {
        NSB.MsgBox(`Error: ${req1.status}`);
      }  
 } else {
    let message = " "
    for (i = 0; i < customerInfo1.length-1; i++)
    message = message + customerInfo1[i][0] + "\n"
    txtResults1.value = message
} 



  query1 = `SELECT * FROM customer`
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
  if (req1.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      NSB.MsgBox(`There are no customers.`)
   } else {
        let message1 = " " 
        for (i = 0; i <= results.length - 1; i++) {
          message1 = message1 + results[i][1] + "\n"
          txtResults1.value = message1
        }
    }


  
  btnNextForm2.onclick=function(){
  ChangeForm(customerAdd)
}