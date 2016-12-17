(function() {

  var thumbnailList = document.querySelector('.thumbnails');
  var bigImage = document.querySelector('.display img');
  var selectAPicture = document.querySelector('.select-a-picture');
  var description = document.querySelector('.description');

  thumbnailList.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'IMG') {
      var previouslySelected = document.querySelector('.selected');
      if (previouslySelected != null) {
        previouslySelected.classList.remove('selected');
      }

      evt.target.classList.add('selected');
      selectAPicture.classList.add('hidden');
      bigImage.src = evt.target.attributes['data-full-pic'].value;
      description.textContent = evt.target.attributes['data-description'].value;
    }
  });


  $.ajax({
    url: '/api/pics'
  })
  .done(function(data) {
    console.log('data', data);

    for (var i = 0; i < data.pictures.length; i++) {
      var picData = data.pictures[i];

      var li = document.createElement('li');

      var img = document.createElement('img');
      img.src = picData.thumbnail;
      img.setAttribute('data-full-pic', picData.fullSize);
      img.setAttribute('data-description', picData.description);

      li.appendChild(img);

      thumbnailList.appendChild(li);
    }
  });

})();
