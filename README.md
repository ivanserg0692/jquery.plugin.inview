here i did documentation in 2 language
# jquery.plugin.inview
Плагин jquery, генерирует триггеры когда элемент становится виден в DOM Window, есть так же один метод для проверки был ли когда либо виден элемент в виев порте браузера, это удобно когда нужно проиграть один раз анимацию появления.

Plugin Jquery generating the triggerers when element bacame vivible inside DOM. So there is method for checking if element was ever visible inside viewport of browser. This is good when need to play one time the animation of apearing the element.

### Методы: /methods
- $.fn.isinview - проверяет был ли виден элемент. 

  this check if element was ever visible

```	@return boolean видена ли какая либо часть элемента в виевпорте.```
- $.fn.inview - устанавливает отслеживание триггеров для заданного элемента. 

  this set a track the triggers for element

### Триггеры /triggers 
* OneView срабатывает когда впервые отображается элемент 
* OneFullView срабатывает когда впервые отображается весь элемент во виевпорте
