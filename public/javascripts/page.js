(function(){
	
	//change title
	var newHeadTitle = document.getElementsByTagName('title');
	newHeadTitle[0].textContent = "Russ' Javascript Blog!";
	var newTitle = document.getElementsByTagName('h1');
	newTitle[0].textContent = "Russ' Blog";
	//add second article and first article title
	var oldArticle = document.getElementsByTagName("article");	
	var oldPara = document.getElementsByTagName('p');
	var newArticle = document.createElement("article");
	var newHead = document.createElement("h1");
	var newPara = document.createElement("p");
	var oldHead = document.createElement("h1");
	oldHead.textContent = "THE FIRST BLOG POST!";
	newPara.textContent = "Second blog post paragraph, WOOT!";
	newHead.textContent = "Second blog post head, WOOT!";	
	oldArticle[0].insertBefore(oldHead, oldPara[0]);
	newArticle.appendChild(newHead);
	newArticle.appendChild(newPara);	
	document.body.insertBefore(newArticle, oldArticle[0]);

	//Hide and reveal from clicking on head
	var hideText = function (elementToClick, elementToHide) {
		elementToClick.onclick = function() {
		if (elementToHide.style.display === "none") {
			elementToHide.style.display = "block";
		} else {elementToHide.style.display = "none"};
	}
}
	newPara.style.display = "none";
	oldPara[1].style.display = "none";
	newHead.addEventListener("click", hideText(newHead, newPara));
	oldHead.addEventListener("click", hideText(oldHead, oldPara[1]));

	//highlight all text in an article when article is clicked on
	var highlightAll = function (elementToHighlight) {
		elementToHighlight.onclick = function () {
			if(elementToHighlight.style.background !== "yellow"){
				elementToHighlight.style.background = "yellow";
		} else {elementToHighlight.style.background = "initial"}
	}
}
	newPara.addEventListener("click", highlightAll(newPara));
	oldPara[1].addEventListener("click", highlightAll(oldPara[1]));

})();
