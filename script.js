document.addEventListener('DOMContentLoaded', function () {
	const btn = document.getElementById('goto-btn');
	if (btn) {
		btn.addEventListener('click', function () {
			window.location.href = 'newpage.html';
		});
	}
});
