(function(document, window) {
   'use strict';

   var apiKey = 'a5e95177da353f58113fd60296e1d250';
   var userId = '24662369@N07';
   var apiURL = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos';

   function searchText(parameters) {
      var requestParameters = Utility.extend(parameters, {
         method: 'flickr.photos.search',
         api_key: apiKey,
         user_id: userId,
         format: 'json'
      });

      var script = document.createElement('script');
      script.src = Utility.buildUrl(apiURL, requestParameters);
      document.head.appendChild(script);
      document.head.removeChild(script);
   }

   function buildThumbnailUrl(photo) {
      return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + '_q.jpg';
   }

   function buildPhotoUrl(photo) {
      return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
             '/' + photo.id + '_' + photo.secret + '.jpg';
   }

   function buildPhotoLargeUrl(photo) {
      return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + '_b.jpg';
   }

   window.Flickr = Utility.extend(window.Flickr || {}, {
      buildThumbnailUrl: buildThumbnailUrl,
      buildPhotoUrl: buildPhotoUrl,
      buildPhotoLargeUrl: buildPhotoLargeUrl,
      searchText: searchText
   });
})(document, window);