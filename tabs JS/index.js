const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsContent = document.querySelectorAll('.tabs__item');

const onTabClick = (item) => {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {

			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			})

			tabsContent.forEach(function (item) {
				item.classList.remove('active');
			})

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}

	})
};

tabsBtn.forEach(onTabClick);