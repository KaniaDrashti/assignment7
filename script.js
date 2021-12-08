function Student() {
    //state variable
  const products=["milk","tea","butter","cheese","Meggie"]
  const prices=[48,50,80,120,100];
  var productQty=[0,0,0,0,0];
  var [qty, setQty]=React.useState(productQty);
  var [totalQty, setTotalQty]=React.useState(0);
    
   var calulateQty=()=>{
     var total=0;
     qty.forEach(q=> {
       total +=q;
     });
     return total;
   };
   
  var calcluateAmount = () => {
      var total = 0;
      qty.forEach((q, index) => {
        total += q * prices[index];
      });
  
      return total;
    };
    
   var addToCart = index => {
      setQty(qty.map((q, i) => i == index ? q + 1 : q));
    };
  
    function removeCart(index) {
      setQty(qty.map((q, i) => i == index && q > 0 ? q - 1 : q));
    };
  
    return (
      React.createElement("div", null,
      products.map((nm, index) => 
      React.createElement("div", { key: index }, 
      React.createElement("h3", null, nm, " : ", prices[index], ", Qty: ",
      qty[index]), 
      React.createElement("button", { onClick: () => addToCart(index) }, "Add"), 
      React.createElement("button", { onClick: () => removeCart(index) }, "Remove"))), 
  
      React.createElement("h4", null, "Total qty: ", calulateQty()), 
      React.createElement("h4", null, "Total amount: ", calcluateAmount())));
  };
  ReactDOM.render( <Student/>, document.getElementById("root"));
  