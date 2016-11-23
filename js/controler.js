window.onload = 
function() {
		var header = document.getElementById("head");
		var num = true;
		var times = null;
		var slider;
		var bctop=document.getElementById("bctop");
		var homepage=document.getElementById("homepage");
		var x=document.body.clientWidth;
		var lindex=x*0.05;
		var clientHeight = document.documentElement.clientHeight;

		window.onscroll = function() {
			//判断，为假，是在鼠标移动滚动条
			if(!num) {
				clearInterval(times)
			}
			//获取当前滚动条距离顶部的距离   ||是处理兼容性
			slider = document.documentElement.scrollTop || document.body.scrollTop;
			if(slider >= 360) {
				header.style.left=0;
				header.style.position="fixed";
				header.style.top=0;
				header.style.marginLeft=0;
			 
				
			} else {
				header.style.position="inherit";
//				bctop.style.display = "none";

			
			}

		}
		
		bctop.onclick = function() {

			times = setInterval(function() {
				slider = document.documentElement.scrollTop || document.body.scrollTop;
				//设置滚动条滚动速度
				var ispeed = Math.floor(-slider / 7);

				//将滚动条距离，赋值  速度逐渐减慢
				document.documentElement.scrollTop = document.body.scrollTop = parseInt(slider) + ispeed;

				//判断，为真，是在单击回到顶部按钮
				num = true;
				//如果滚动条距离为0，清除定时器
				if(slider == 0) {
					clearInterval(times)
				}

			}, 10)

		}
		}