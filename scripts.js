
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

 