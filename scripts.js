
function Pizza(amount, sizePizza) {
    this.amount = amount;
    this.sizePizza = sizePizza;
    this.topVeg = [];
    this.topMeat =[];
  
  };
  
  Pizza.prototype.priceCompute = function() {
    var totalPrice = 6 + (this.topVeg.length * 1.5) + (this.topMeat.length * 1.5);
  
    if (this.sizePizza == "small") {
      return totalPrice * this.amount;
    } else if (this.sizePizza == "medium") {
        return (totalPrice + 2) * this.amount;
      } else if (this.sizePizza == "large") {
          return (totalPrice + 4) * this.amount;
      } 
    };

    //set amount and sizePizza
    $(document).ready(function() {                  
      $("form#order-form").submit(function(event) {
        var amount = $("input#amount").val();
        var sizePizza = $("select#size").val();
        var newPizza = new Pizza(amount, sizePizza);
    
        //Add to topVeg empty array
        var topVeg = $("input.veg:checkbox:checked").each(function() {  
          newPizza.topVeg.push(topVeg);
        });
    
        //Add to topMeat empty array
        var topMeat = $("input.meat:checkbox:checked").each(function() {
          newPizza.topMeat.push(topMeat);
        });
    
        //runs priceCompute on newPizza object and saves it
        var pizzaPrice = newPizza.priceCompute();
    
    
        //push price to "result" section
        $("#price").text(pizzaPrice);
    
        //shows the result section 
        $("#result").show();
    
        event.preventDefault();
      });
    });