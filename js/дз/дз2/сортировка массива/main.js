'use strict'
function comparison (a,b)
{
if (a.length>b.length) return 1;
if (a.length<b.length) return -1;
}
var array = ['торт','пироженое','шоколад', 'пончик', 'мороженое','конфеты','карамель'];
array.sort(comparison);
console.log(array);
