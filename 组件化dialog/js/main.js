var Dialogkuang = (function() {

    function initstart(title,content) {
        $(this).each(function() {
            var car = $(this);
            if (car.hasClass('Loaded')) {
              return;
            }
            new Dialog(title,content); //创建实例
            car.addClass('Loaded');
        });
    }

    function Dialog(title, content) {
        this.title = title;
        this.content = content;
        this.init();
        $('.cover').height($(document).height());
    }

    Dialog.prototype = {
	  init: function(){
	    // 创建DOM结构
	    var html ='';
	    html+='<div class="dialog clearfix">'+
	    '<div class="header">'+
	    '<span class="title">'+this.title+'</span>'+
	    '<div class="close">x</div>'+
	    '</div>'+
	    '<div class="content">'+this.content+
	    '</div></div>'+
	    '<div class="cover"></div>';

	    //插入DOM结构
	    $('body').append(html);  //插入DOM结构
	    this.bind();
	  },

	  bind: function(){
	    var _this = this;  //存储this
	    $('.dialog .close').on('click', function() {
	      _this.hide();
	    });
	    $('.dialog').on('click', function() {
	      return false; //阻止冒泡
	    });
	    $(document).on('click', function() {
	      _this.hide();
	    });
	  },
	  show: function(){
	    $('.dialog').show();
	  },
	  hide: function(){
	    $('.dialog,.cover').hide();
	  }
	}

    return{
    	initstart: initstart
    }

})();