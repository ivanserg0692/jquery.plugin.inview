/**
* jquery плагин позволяет определять видим ли элемент в окне браузера
*/
(function($){
	
	var L=function(){
		var left=this.offset().left
		var sizeX=$(window).width()
		return (left>=scrollX) && (left<(scrollX+sizeX))
	}
	var R=function(){
		var left=this.offset().left
		var sizeX=$(window).width()
		return ((left+this.width())>scrollX) && ((left+this.width())<=(scrollX+sizeX))
	}
	var T=function(){
		var top=this.offset().top
		var sizeY=$(window).height()
		return (top>=scrollY) && (top<(scrollY+sizeY))
	}
	var B=function(){
		var top=this.offset().top
		var sizeY=$(window).height()
		return ((top+this.height())>scrollY) && ((top+this.height())<=(scrollY+sizeY))
	}
	/**
	* @return boolean видена ли какая либо часть элемента в виевпорте
	*/
	$.fn.isinview=function(){
		return (L.call(this) && T.call(this)) || (L.call(this) && B.call(this)) || (R.call(this) && T.call(this)) || (R.call(this) && B.call(this))
	}
	/**
	* @return boolean виден ли весь элемент в виевпорте
	*/
	$.fn.isfullinview=function(){
		return L.call(this) && R.call(this) && T.call(this) && B.call(this)
	}
	
	var hasEventOneView=function(){
		if((!this.prop('jQinview_isBeView')) && this.isinview())
		{
			this.prop('jQinview_isBeView',true)
			this.trigger('OneView')
		}
		if(!this.prop('jQinview_isBeFullView') && this.isfullinview())
		{
			this.prop('jQinview_isBeFullView',true)
			this.trigger('OneFullView')
		}
	}
	/**
	*устанавливает отслеживание триггеров
	* OneView срабатывает когда впервые отображается элемент
	* OneFullView срабатывает когда впервые отображается весь элемент во виевпорте
	*/
	$.fn.inview=function(){
		this.each(function(){
			var tar=$(this)
			$(document).scroll(function(){
				hasEventOneView.call(tar)
			}).ready(function(){
				hasEventOneView.call(tar)
			})
		})
		return this
	}
	
})(jQuery)