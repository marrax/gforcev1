(function() {
  ($('#cancel_link')).click(function(event) {
    event.preventDefault();
    ($('.no-objects-found')).show();
    ($('#new_image_link')).show();
    return ($('#images')).html('');
  });

}).call(this);
//# sourceMappingURL=/assets/source_maps/bundler/gems/spree_backend-2.1.4/app/assets/javascripts/admin/images/new.map
;
