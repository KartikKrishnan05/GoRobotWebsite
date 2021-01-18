let urlParams;

function getQueryParam(param) {
	if (!urlParams) {
		urlParams = new URLSearchParams(window.location.search);
	}
	if (urlParams.has(param)) {
		return urlParams.get(param);
	}
}

$(() => {
	let id = getQueryParam('id');
	id = id === undefined ? 0 : id;

	if (id < 0 || id > exercises.length)
		id = 0;

	const exercise = exercises[id];

	console.log(exercise);

	$('#exerciseName').text(exercise.name);
	$('#exerciseDetails').text(exercise.description);
});