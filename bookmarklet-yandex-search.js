organic = '';
paid = '';
related = '';
suggested = '';
intent = '';

nodes = document.querySelectorAll(".serp-list li.serp-item");
list = [].slice.call(nodes);

for (i=0; i<list.length; i++) {
	if (list[i].innerHTML.includes('organic__content-wrapper')) {
		if (list[i].querySelector('h2 a').href.includes('yabs.yandex.ru')) {
			paid = paid + list[i].querySelector('h2 a').innerText + '<br>';
		  paid = paid + list[i].querySelector('.organic__subtitle').innerText + '<br>';
		  paid = paid + list[i].querySelector('h2 a').href + '<br>';
		  paid = paid + list[i].querySelector('.organic__content-wrapper').innerText + '<br>';
			paid = paid + '<br><br>';
		} else {
			organic = organic + list[i].querySelector('h2 a').innerText + '<br>';
		  organic = organic + list[i].querySelector('.organic__subtitle').innerText + '<br>';
		  organic = organic + list[i].querySelector('h2 a').href + '<br>';
		  if (list[i].querySelector('.organic__content-wrapper').innerHTML.includes('extended-text__full')) {
		  	organic = organic + list[i].querySelector('.extended-text__full').innerText + '<br>';
		  } else {
		  	organic = organic + list[i].querySelector('.organic__content-wrapper').innerText + '<br>';
		  }
			organic = organic + '<br><br>';
		}
	} else {
		intent = intent + list[i].getAttribute('data-fast-wzrd') + ' / ' + list[i].getAttribute('data-fast-subtype') + '<br>';
	}
}

nodes = document.querySelectorAll(".related__item");
list = [].slice.call(nodes);

for (i=0; i<list.length; i++) {
	related = related + list[i].querySelector('a').innerText + '<br>';
}

nodes = document.querySelectorAll(".mini-suggest__item");
list = [].slice.call(nodes);

for (i=0; i<list.length; i++) {
	suggested = suggested + list[i].innerText + '<br>';
}

yandexSERP = "<html><head><title>Yandex SERP</title></head><body><h1>ORGANIC SEARCH</h1>" + organic + "<hr><h1>PAID SEARCH</h1>" + paid + "<hr><h1>RICH SNIPPETS</h1>" + intent + "<br><br><hr><h1>SUGGESTIONS</h1>" + suggested + "<br><br><hr><h1>RELATED</h1>" + related + "<br><br></body></html>";

yandexWindow = window.open();
yandexWindow.document.write(yandexSERP);
yandexWindow.document.close();
