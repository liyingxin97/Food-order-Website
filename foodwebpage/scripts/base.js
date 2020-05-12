//This is the base javascript filefunction billme()

function billme()
{
        var v1= document.order.porkQty.value;
        var v2= document.order.chickenQty.value;
        var v3= document.order.fishQty.value;
        var v4= document.order.beefQty.value;
        var v5= document.order.shrimpQty.value;
        var v6= document.order.vegetableQty.value;
        var v7= document.order.soupQty.value;
        var v8= document.order.discountRB[0];
        var v9= document.order.discountRB[1];
        var v0= document.order.discountRB[2];
        //These lines define the variables.
        
            v1= parseInt(v1);
            v2= parseInt(v2);
            v3= parseInt(v3);
            v4= parseInt(v4);
            v5= parseInt(v5);
            v6= parseInt(v6);
            v7= parseInt(v7);
        //These lines make sure that variables 1, 2, and 3 are numbers.
        
            order.subtotalBox.value= (v1*5)+(v2*5.25)+(v3*5.00)+(v4*5.10)+(v5*5.95)+(v6*4.50)+(v7*3.50)
        
            if (document.order.discountRB[0].checked) {
                document.order.subtotalBox.value= (order.subtotalBox.value)*0.9
                }
            else if (document.order.discountRB[1].checked) {
                document.order.subtotalBox.value= (order.subtotalBox.value)*0.95
                }
       
        
        //These lines assign function to the checkbox.
        
        
            if (document.order.discountRB[0].checked) {
                document.order.savingsBox.value= ((v1*5)+(v2*5.25)+(v3*5.00)+(v4*5.10)+(v5*5.95)+(v6*4.50)+(v7*3.50))*0.1
            }
            else if (document.order.discountRB[1].checked) {
                document.order.savingsBox.value= ((v1*5)+(v2*5.25)+(v3*5.00)+(v4*5.10)+(v5*5.95)+(v6*4.50)+(v7*3.50))*0.05
                } 
            else if (document.order.discountRB[2].checked) {
                document.order.savingsBox.value= 0
                }
        //These lines define what should be displayed in the discount box.
        
        }
        
        
        function porkImage() {
            document.getElementById("mainpic").src="images/sweetsourpork.jpg"
        }
        
        function chickenImage(){
            document.getElementById("mainpic").src="images/kpchicken.jpg"
        }
       
        function fishImage() {
            document.getElementById("mainpic").src="images/fish.jpg"
        }

        function beefImage() {
            document.getElementById("mainpic").src="images/beef.jpg"
        }
        function shrimpImage() {
            document.getElementById("mainpic").src="images/shrimp.jpg"
        }
        function vegetableImage() {
            document.getElementById("mainpic").src="images/vegetable.jpg"
        }
        
        function soupImage(){
            document.getElementById("mainpic").src="images/soup.jpg"
        }
        function restoreImage() {
            document.getElementById("mainpic").src="images/restaurant.jpg"
        }