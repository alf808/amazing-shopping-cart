var items = [
  {product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, image: "https://ak1.ostkcdn.com/images/products/10638886/Pyle-Electric-Water-Flosser-and-Oral-Irrigator-ce2985a8-9447-4d17-8c64-2063653d4b53_80.jpg", qty: 3},
  {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57, image: "http://www.whosampled.com/static/track_images_100/mr102230_2014817_155628169929.jpg", qty: 1},
  {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, image: "https://yt3.ggpht.com/-ZI0dVxaVVJY/AAAAAAAAAAI/AAAAAAAAAAA/TlOZovQTtGs/s100-c-k-no-mo-rj-c0xffffff/photo.jpg", qty: 6},
  {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, image:"http://www.dhresource.com/100x100/f2/albu/g5/M00/92/9F/rBVaI1h6GNiAXpzXAAelhgOk8jo271.jpg", qty: 2},
  {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, image:"http://image.made-in-china.com/3f2j00EdkQTnsGEBqJ/Saunawomen-Hot-Thermo-Neoprene-Slimming-Pants-Sweat-Sauna-Body-Shapers.jpg", qty: 2},
  {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, image:"http://images.pricerunner.com/product/100x100/1689647290/Bbhugme-Pregnancy-Breastfeeding-Pillow-Dusty-Pink-Vanilla-Pebbles-One-Size.jpg", qty: 1}
];

function createElem (clsName, str, parent, id, tag) {
  var newTag = tag || "div";
  var newElem = document.createElement(newTag);
  if (clsName) newElem.className = clsName;
  if (id) newElem.id = id;
  newElem.innerHTML = str;
  parent.appendChild(newElem);
  return newElem;
}

function showDesc() {
  // console.log(this);
  var desc = this.querySelector(".descriptions");
  if(desc.style.display === "none"){
    desc.style.display = "block";
  }else {
    desc.style.display = "none";
  }
}

(function() {
  var totalAmount = 0;
  for (var i = 0, j = items.length; i < j; i++) {
    totalAmount += items[i].price*items[i].qty;
  }
  total.innerHTML = totalAmount;
})();

for(var i = 0; i<items.length; i++){

  var wholeItem = createElem("wholeItem", "", store);
  wholeItem.addEventListener("click", showDesc);

  var basketShown = createElem("basketShown", "", wholeItem);

  var displayImg = createElem("itemImg", "", basketShown, "", "img");
  displayImg.src = items[i].image;

  var productBox = createElem("products", items[i].product, basketShown);
  var quantity = createElem("qty", items[i].qty, basketShown);
  var before = "";
  if (items[i].price.toString().length < 5) before = "&nbsp;&nbsp;&nbsp;";
  var priceBox = createElem("prices", before + items[i].price, basketShown);
  var priceBox = createElem("descriptions", items[i].description, wholeItem);
}

var descElem = document.querySelectorAll(".descriptions");

for(var i = 0; i < descElem.length; i++) {
  descElem[i].style.display = "none";
}
