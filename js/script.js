var cnt=0;
var Array_len
var autoplay = true;
var autoplayInterval = 4000;

// ===================================== Timer ==============================
function show()
{
	cnt++;
    if (cnt == Array_len) //1>5
  	{
  		cnt = 0;
  	}    
  	if (cnt < 0) 
  	{
  		cnt = Array_len-1;
  	}
      slider3();
}

if(autoplay)
{
	setInterval(show,autoplayInterval)
}

// ==============================================================================
function slider3(n)
{
	var imgname = document.getElementsByClassName('img5');
	var dots = document.getElementsByClassName("dot");

	for(var i = 0; i < imgname.length; i++)
	{
		imgname[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++)
	{
    	dots[i].className = dots[i].className.replace(" active","");
  	}

	Array_len=imgname.length;


  	if (n > Array_len) //0>8
  	{
  		cnt = 0;
  	}    
  	if (n < 0) 
  	{
  		cnt = Array_len-1;
  	}


	imgname[cnt].style.display = "block";
	dots[cnt].className += " active";

}

window.onload = function() 
{
	slider3();
}
 function dot(n)
{
	slider3(cnt=n);
}


// ================================= checkbox ============================ 
var sum,cnt,tax,p_code,dis,to_amount;

function check()
{
		sum=0;
		cnt=0;
		var x= document.getElementsByClassName('check_1');
		for(var i=0; i < x.length; i++)
		{
				if(x[i].checked)
				{
					cnt++;
					sum = sum + parseInt(x[i].value);
				}
		}
		
		 document.getElementById("amount").value=sum;
		 document.getElementById("in_cart").value=cnt;

		 tax=sum*14/100;
		 document.getElementById("tax").value=tax;


}
function offer()
{
	 var p_code=document.getElementById('promocode').value;
	 if(p_code.match("FREE10"))
		{
			
			dis=sum*10/100;
			document.getElementById('discount').value= dis;
			to_amount=(sum+tax)-dis;
			if(!Number.isInteger(to_amount))
			{
				to_amount = to_amount.toFixed(2);
			}

			document.getElementById('total_amount').value= to_amount;
		}
		else if(document.getElementById('promocode').value == "FREE20")
		{
			dis=sum*20/100;
			document.getElementById('discount').value= dis
			to_amount=(sum+tax)-dis;
			document.getElementById('total_amount').value= to_amount;
		}
		else
		{
			to_amount=sum+tax;
			document.getElementById('discount').value= 0;
			document.getElementById('total_amount').value= to_amount;
		}

}

