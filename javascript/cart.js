$(document).ready(function(){
    const product1={
        img:"images/p1.jpg",
        rNmae:"SONY PlayStation 4 Slim 1TB Console,"
        +"Light & Slim PS4 System, 1TB Hard Drive, "
        +"All the Greatest Games, TV, Music & More",
        width:"250px",
        price:3000,
        // no change
        name:"product1",
        quantity:1,
        Hid:"p1",
        Nid:"pproduct1",
        Pid:"bproduct1",
        Mid:"mproduct1",
        Lid:"lproduct1",
        Rid:"rproduct1",
        Did:"dproduct1",
        PDid:"pdproduct1"
    };
    const product2={
        img:"images/p2.jpg",
        rNmae:"Microsoft Xbox Series X",
        price:1700,
        width:"232px",
        // no change
        name:"product2",
        quantity:1,
        Hid:"p2",
        Nid:"pproduct2",
        Pid:"bproduct2",
        Mid:"mproduct2",
        Lid:"lproduct2",
        Rid:"rproduct2",
        Did:"dproduct2",
        PDid:"pdproduct2"
    };

    const product3={
        img:"images/p3.jpg",
        rNmae:"Nintendo - Version 2 Switch with Joy-Con - Version 2 - HAC-001(-01), Neon Red and Neon Blue",
        price:2500,
        width:"215px",
        // no change
        name:"product3",
        quantity:1,
        Hid:"p3",
        Nid:"pproduct3",
        Pid:"bproduct3",
        Mid:"mproduct3",
        Lid:"lproduct3",
        Rid:"rproduct3",
        Did:"dproduct3",
        PDid:"pdproduct3"
    };
    const product4={
        img:"images/p.jpg",
        rNmae:"GRAND THEFT AUTO V PREMIUM ONLINE EDITION (Enterprise Pack,Bonus Cash,DLC's, $1,200,000) ROCKSTAR PC DOWNLOAD CODE (NO CD/DVD)",
        price:700,
        width:"153px",
        // no changes
        name:"product4",
        quantity:1,
        Hid:"p4",
        Nid:"pproduct4",
        Pid:"bproduct4",
        Mid:"mproduct4",
        Lid:"lproduct4",
        Rid:"rproduct4",
        Did:"dproduct4",
        PDid:"pdproduct4"
    };
    const product5={
        img:"images/p6.jpg",
        rNmae:"Marvel's Spider Man (PS4) - Game of the Year Edition (PS4)",
        price:300,
        width:"200px",
        // no changes
        name:"product5",
        quantity:1,
        Hid:"p5",
        Nid:"pproduct5",
        Pid:"bproduct5",
        Mid:"mproduct5",
        Lid:"lproduct5",
        Rid:"rproduct5",
        Did:"dproduct5",
        PDid:"pdproduct5"
    };
    const product6={
        img:"images/p7.jpg",
        rNmae:"Rockstar Games Red Dead Redemption 2",
        price:1000,
        width:"215px",
        // no changes
        name:"product6",
        quantity:1,
        Hid:"p6",
        Nid:"pproduct6",
        Pid:"bproduct6",
        Mid:"mproduct6",
        Lid:"lproduct6",
        Rid:"rproduct6",
        Did:"dproduct6",
        PDid:"pdproduct6"
    };

    const product = [product1,product2,product3,product4,product5,product6];
    $("#logo").click(function(){
        location.href="index.html";
    })

    let text="";
    
    $(".cart").click(function(){
        for(let i=0;i<product.length;i++){
            if(product[i].Hid == this.id){
                localStorage.setItem(product[i].name,product[i].quantity)
            }
        }
    });
    

    $("ShoppingCart.html").ready(function(){
        if(localStorage.length<1){
            $(".box").text("Cart is Empty");
            $("#pay").hide();
            $("#reset").hide();
        }
        else{

            for(let i=0;i<localStorage.length;i++){

                
                if(isNaN(localStorage.getItem(localStorage.key(i)))){
                    
                    continue;
                }
                else{

                    text+="<div class='product'id='d"+ localStorage.key(i)+ "'><span class='pimage'><img src='"+IMG(localStorage.key(i))+"' width='80px'></span> <span class='prdname'>"+ Name(localStorage.key(i))+"</span><span class='pprice'>$"+ price(localStorage.key(i)) +"</span> <button class='pluse' id='p"+localStorage.key(i)+"'>+</button> <label id='l"+localStorage.key(i)+"'>"+localStorage.getItem(localStorage.key(i)) +"</label><button class='minus' id='m"+localStorage.key(i)+"'>-</button> <button class='remove' id='r"+ localStorage.key(i)+"'>Remove</button></div><br>";
                }
                }
                $(".box").html(text);
            
            $(".pluse").click(function(){
                let id = $(this).attr('id');
                let label = $(this).next();
                for(let i=0;i<product.length;i++){
                    if(id == product[i].Nid){
                        let value = localStorage.getItem(product[i].name)
                        value++;
                        localStorage.setItem(product[i].name,value);
                        label.text(localStorage.getItem(product[i].name));
                        
                        
                    }
                }    
            });
            
            $(".minus").click(function(){
                let id = $(this).attr('id');
                let label = $(this).prev();
                
                for(let i=0;i<product.length;i++){
                    if(id == product[i].Mid){
                        let value = localStorage.getItem(product[i].name)
                        if(value<2){
                            localStorage.removeItem(product[i].name)    
                        }else{
                            
                            value--;
                            localStorage.setItem(product[i].name,value);
                        label.text(localStorage.getItem(product[i].name));
                    }
                }
            }    
        });
        
        
        $(".remove").click(function(){
            let id=$(this).attr('id');
            for(let i=0;i<product.length;i++){
                if(id==product[i].Rid){
                    localStorage.removeItem(product[i].name)
                    $("#"+product[i].Did).hide()
                    
                }
            }  
        })

        $("#reset").click(function(){
            localStorage.clear();
            window.location.reload();
            // $(".product").hide();   
        })
        
        $("#pay").click(function(){
            let amt =0;
            for(let i=0;i<localStorage.length;i++){
                for(let j=0;j<product.length;j++){
                    
                    if(localStorage.key(i)==product[j].name){
                        amt+=(product[j].price*localStorage.getItem(localStorage.key(i)));

                    }
                }
            }

            
            alert("Your Total amount : $"+amt);
            localStorage.clear();
            window.location.reload();
            $(".product").hide(); 
        });
    }
    });    
    
    const bannerArray=["banner2.jpg","banner10.jpg","Banner3.png","banner40.jpg","banner6.jpg"]
    let clickevnt=0;
    $(".banner").click(function(){
        for(let i=0;i<bannerArray.length;i++){
            $(".banner").css("background-image","url('images/"+bannerArray[clickevnt]+"')")
            if(clickevnt==bannerArray.length){
                clickevnt=0;
            }
        }
        clickevnt++;
    });

    function Name(prod){
        for(let i=0;i<product.length;i++){
            if(prod == product[i].name){
                return product[i].rNmae;
            }
        }
    }

    function IMG(prod){
        for(let i=0;i<product.length;i++){
            if(prod == product[i].name){
                return product[i].img;
            }
        }
    }
    function price(prod){
        for(let i=0;i<product.length;i++){
            if(prod == product[i].name){
                return product[i].price;
            }
        }
    }



    $(".fcontainer").click(function(){
        let idname=$(this).parent().attr('id');
        for(let i=0;i<product.length;i++){
            if(product[i].name == idname){
                localStorage.setItem(product[i].PDid,product[i].name)
                window.location.href="pd.html";
            }
        }
    
    });

    $("pd.html").ready(function(){
        for(let i=0;i<localStorage.length;i++){
            for(let j=0;j<product.length;j++){
                if(localStorage.key(i)==product[j].PDid){
                    $("#title").html(product[j].rNmae)
                    $(".prdImg").html("<img src='"+product[j].img+"' width='"+product[j].width+"'>")
                    $("#name").html("<h2>"+product[j].rNmae+"<h2>")
                    $(".price").html("<h2>only$"+product[j].price+"</h2>")
                    $(".btn").html("<button class='cart' id='"+product[j].Hid +"'>Add to cart</button>")
                    localStorage.removeItem(product[j].PDid);
                    break;
                }

            }
        }
        $(".cart").click(function(){
        for(let i=0;i<product.length;i++){
            if(product[i].Hid == this.id){
                localStorage.setItem(product[i].name,product[i].quantity)
            }
        }
    });
    })
    $("#btn").click(function(){
        let username=$("#username").val();
        let password=$("#password").val();
        if(username.length<1 || password.length<1){
            alert("Please fill the form")
        }
        else{
            location.href="index.html";
        }
    })
});

