var list = document.getElementById('thelist');
var button = document.getElementById('b');
var listItems = list.getElementsByTagName('li');
var n = listItems.length;

var addL = (function(){
    //create new list item
    var item = document.createElement('li');
    var txt = document.createTextNode("item "+n);
    //make new list item responsive
    item.addEventListener('mouseover',changeH);
    item.addEventListener('mouseout',defaultH);
    item.addEventListener('click',removeL);
    //attatch new list item
    item.appendChild(txt);
    list.appendChild(item);
    n++;
});

var changeH = (function(){
    var heading = document.getElementById('h');
    var content = this.innerHTML;
    //set heading to text of the item being hovered over
    heading.innerHTML = content;
});

var defaultH = (function(){
    var heading = document.getElementById('h');
    //default heading
    heading.innerHTML = "Hello,World!";
});

var removeL = (function(){
    this.remove();
});


button.addEventListener('click', addL);

for (i = 0; i < listItems.length; i++) {
    var item = listItems[i];
    //when an item on the list is hovered over, change the heading to contain the text of the item
    item.addEventListener('mouseover',changeH);
    //when an item of the list is no longer hovered over, change it back
    item.addEventListener('mouseout',defaultH);
    //when an item from the list is clicked, remove it from the DOM
    item.addEventListener('click',removeL);
};

