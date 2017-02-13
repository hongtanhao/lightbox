/**
 *实现图片本地上传、在线预览功能
 *完成进度条作用 和 图片信息说明
**/
var uploadImage = {
	//预览图片
	// previewImage:function (fileObj,divPreviewId){
	// 			var allowExtention=".jpg,.bmp,.gif,.png";
	// 			var extention=fileObj.value.substring(fileObj.value.lastIndexOf(".")+1).toLowerCase();
	// 			var browserVersion= window.navigator.userAgent.toUpperCase();
	// 			if(allowExtention.indexOf(extention)>-1){
	// 			    if(fileObj.files){//兼容chrome、火狐7+、360浏览器5.5+等，应该也兼容ie10，HTML5实现预览
	// 			        if(window.FileReader){
	// 			                var reader = new FileReader();
	// 			                reader.onload = function(e){
	// 			                	console.log(e.target.result);
	// 			                document.getElementById(divPreviewId).innerHTML="<img src="+"'"+e.target.result+"'"+";>";
	// 			                };
	// 			                reader.readAsDataURL(fileObj.files[0]);
	// 			            }else if (browserVersion.indexOf("SAFARI") > -1) {
	// 			                alert("不支持Safari浏览器6.0以下版本的图片预览!");
	// 			             }
	// 			    } else if (browserVersion.indexOf("MSIE") > -1) { //ie、360低版本预览
	// 			                if (browserVersion.indexOf("MSIE 6") > -1) { //ie6
	// 			                        document.getElementById(divPreviewId).innerHTML = "<img src=&#39;" + fileObj.value + "&#39;>";
	// 			                } else { //ie[7-9]
	// 			                       fileObj.select();
	// 			                   if (browserVersion.indexOf("MSIE 9") > -1){
	// 			                        fileObj.blur(); //不加上document.selection.createRange().text在ie9会拒绝访问
	// 			                        var newPreview = document.getElementById(divPreviewId + "New");
	// 						            if (newPreview == null) {
	// 						                newPreview = document.createElement("div");
	// 						                newPreview.setAttribute("id", divPreviewId + "New");
	// 						                newPreview.style.width = "150px";
	// 						                newPreview.style.height = "150px";
	// 						                newPreview.style.border = "solid 1px #d2e2e2";
	// 						            }
	// 			                        newPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=&#39;scale&#39;,src=&#39;" + document.selection.createRange().text + "&#39;)";
	// 			                       var tempDivPreview = document.getElementById(divPreviewId);
	// 			                           tempDivPreview.parentNode.insertBefore(newPreview, tempDivPreview);
	// 			                           tempDivPreview.style.display = "none";
	// 			                    }       
	// 			            }
	// 			    } else if (browserVersion.indexOf("FIREFOX") > -1) { //firefox
	// 			                var firefoxVersion = parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);
	// 			                if (firefoxVersion < 7) { //firefox7以下版本
	// 			                    document.getElementById(divPreviewId).innerHTML = "<img src=&#39;" + fileObj.files[0].getAsDataURL() + "&#39;>";
	// 			                } else { //firefox7.0+
	// 			                    document.getElementById(divPreviewId).innerHTML = "<img src=&#39;" + window.URL.createObjectURL(fileObj.files[0]) + "&#39;>";
	// 			                }
	// 			    } else {
	// 			        document.getElementById(divPreviewId).innerHTML = "<img src=&#39;" + fileObj.value + "&#39;>";
	// 			    }
	// 			} else {
	// 			        alert("仅支持" + allowExtention + "为后缀名的文件!");
	// 			        fileObj.value = ""; //清空选中文件
	// 			        if (browserVersion.indexOf("MSIE") > -1) {
	// 			            fileObj.select();
	// 			            document.selection.clear();
	// 			        }
	// 			        fileObj.outerHTML = fileObj.outerHTML;
	// 			    }
	// 		    document.getElementById(divPreviewId).style.border = "1px solid #f00";
	// 		    //document.getElementById(divPreviewId + "Up").style.display = "block";
	// 		    //document.getElementById(divPreviewId + "De").style.display = "block";
	// 		    //showFileInfo(fileObj.files[0], divPreviewId);
 //        },
 //    //获取图片的大小、名称予以显示，这里还可以显示图片的文件类型
 //    showFileInfo:function (file, divPreviewId) {
 //        var fileName = file.name;
 //        var file_typename = fileName.substring(fileName.lastIndexOf( & #39;.&# 39;), fileName.length);
 //        if (file) {
 //            var fileSize = 0;
 //            if (file.size > 1024 * 1024) {
 //                fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + & #39;MB&# 39;;
 //            } else {
 //                fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + & #39;KB&# 39;;
 //            }
 //            document.getElementById(divPreviewId + "Name").innerHTML = & #39;文件名: &# 39; + file.name;
 //            document.getElementById(divPreviewId + "Size").innerHTML = & #39;图片大小: &# 39; + fileSize;
 //            document.getElementById(divPreviewId + "Name").style.display = "block";
 //            document.getElementById(divPreviewId + "Size").style.display = "block";
 //        }
 //    },
 //    //上传文件的进度条
 //    uploadFile:function(fileId) {
 //        document.getElementById("show" + fileId + "Up").style.display = "none";
 //        document.getElementById("show" + fileId + "Me").style.display = "block";
 //        var fd = new FormData();
 //        fd.append("file", document.getElementById("local" + fileId).files[0]);
 //        var xhr = new XMLHttpRequest();
 //        //上传中设置上传的百分比
 //        xhr.upload.addEventListener("progress", function(evt) {
 //            if (evt.lengthComputable) {
 //                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
 //                document.getElementById("show" + fileId + "Me").innerHTML = & #39;上传中&# 39; + percentComplete + "%";
 //            } else {
 //                document.getElementById("show" + fileId + "Me").innerHTML = & #39;无法计算&# 39;;
 //            }
 //        }, false);
 //        //请求完成后执行的操作
 //        xhr.addEventListener("load", function(evt) {
 //            var message = evt.target.responseText,
 //                obj = eval("(" + message + ")");
 //            if (obj.status == 1) {
 //                $("#" + fileId).val(obj.picName);
 //                document.getElementById("show" + fileId + "Me").innerHTML = "已上传";
 //                alert("上传成功!");
 //            } else {
 //                alert(obj.message);
 //            }
 //        }, false);
 //        //请求error
 //        xhr.addEventListener("error", uploadFailed, false);
 //        //请求中断
 //        xhr.addEventListener("abort", uploadCanceled, false);
 //        //发送请求
 //        xhr.open("POST", "${ctx}/manage/file/File/uploadPic.htm");
 //        xhr.send(fd);
 //    },

 //    uploadFailed:function (evt) {
 //        alert("上传出错.");
 //    },

 //    uploadCanceled:function (evt) {
 //        alert("上传已由用户或浏览器取消删除连接.");
 //    },
   // is$:function(){$(function(){alert($)})};
};
var tangency = {
	showUploadBox:function(){
		$('.main-button-list > a:first').click(function(){
           $('.unloadImage').fadeIn();
           
        });
        $('.unloadImage .close').click(function(){
               console.log($(this));
              $('.unloadImage').fadeOut();
           });
        $('.main-button-list > a:eq(2)').click(function(){
           $('.createtangency').fadeIn();
           
        });
        $('.createtangency .close').click(function(){
               console.log($(this));
              $('.createtangency').fadeOut();
           });
	},
	supershowUploadBox:function(){
		$('.main-button-list').delegate('a','click',function(event){   
            event.stopPropagation();
            var index = $('.main-button-list>a').index($(event.target));
			if (index===0) {
				$('.unloadImage').fadeIn();
                $('.unloadImage .close').click(function(){
                $('.unloadImage').fadeOut();
                });
			}
			if (index===2) {
				$('.createtangency').fadeIn();
				$('#tagName').focus();
                $('.createtangency .close').click(function(){
                $('.createtangency').fadeOut();
                });
			}
		});
	},
	createTangencyItem:function(){
        $('#tagName').change(function(){
                	$('#sure').one('click',function(){
                        var value = $('#tagName').val();
                		if (value.length===0) { 
                            $('.tagcynemewarning p').show();
                            $('#tagName').focus(function(){$('.tagcynemewarning p').hide();});
                		}else{
                			var itemtext = '<div class="tangency-item">'+
                            	'<img src="images/tangencyface.png" width="150px" height="150px">'+
                            	'<p>10</p><p>'+ value +'<span>小锁</span></p></div>'
                            var item = $(itemtext);
                            localStorage.setItem(value,itemtext);
                            $('.tangency-display').append(item);
                            $('.createtangency').fadeOut();
                		};
                	})
                	
                });
        $('#cancel').click(function(){
                		$('.createtangency').fadeOut();
                	});
	},
	localStorage:function(){
		$(window).on('load',function(){
			for (var i=0; i<localStorage.length;i++) {
				var val = localStorage.getItem(localStorage.key(i));
                $('.tangency-display').append($(val));
			}
		});
	},
	uploadImage:function(){
        var that = this;
        $('.add-image').click(function(event){
        	event.stopPropagation();
        	
        	$('.fileobject').click();
        	$('.fileobject').one('change',function(){
        		that.previewImage($('.fileobject')[0]);
        		$('.add-image').hide();
        		$('.continueAddImage').fadeIn();
        		$('.btn-upload-image').fadeIn();
        	});
        }); 
        
	},
	previewImage:function(fileObj){
		var that = this;
		var allowExtention=".jpg,.bmp,.gif,.png";
		var extention = fileObj.value.substring(fileObj.value.lastIndexOf('.')+1).toLowerCase();
		if(allowExtention.indexOf(extention)>-1){
              if(fileObj.files){
              	if(window.FileReader){
	 			                console.log('FileReader');
	 			                var reader = new FileReader();
	 			                reader.readAsDataURL(fileObj.files[0]);
	 			                $(reader).one('load',function(e){
	 			                	// console.log('onload context');
	 			                	// console.log(e.target.result);
	 			                	that.createImg(e.target.result);
	 			                });
                            }
                        }
		}else{
			alert('抱歉，目前不支持该格式的上传文件，只支持.jpg,.bmp,.gif,.png这几种格式');
		}
		console.log("this");
	},
	createImg:function(url){
		//console.log('url');
		var imgcanvas = $('<canvas></canvas>')[0];
		    //console.log(imgcanvas);
		var context=imgcanvas.getContext('2d');
             imgcanvas.height = 150;
             imgcanvas.width  = 150; 
             $(imgcanvas).css({'border':'1px solid #ccc',
                               'marginTop':20,
                               'marginLeft':20});
        var image = new Image();
            image.src = url;
            if (image.width>image.height) {
            	 scale=imgcanvas.width/image.width;
            	 image.onload=function(){
            	 	var y = (imgcanvas.height-image.height*scale)/2;
            	    context.drawImage(image,0,y,image.width*scale,image.height*scale);
            	  
            };
            	 
            }else{
            	scale=imgcanvas.height/image.height;
            	image.onload=function(){
            	var x = (imgcanvas.width-image.width*scale)/2;	
            	context.drawImage(image,x,0,image.width*scale,image.height*scale);
            	
            };
            }
        $('.continueAddImage').before($(imgcanvas));
        $('.continueAddImage').click(function(){
        	$('.add-image').click();
        });
	},
	init:function(){
		this.uploadImage();
		this.supershowUploadBox();
		this.createTangencyItem();
		this.localStorage();
	}
};
tangency.init();
