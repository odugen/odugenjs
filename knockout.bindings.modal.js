ko.bindingHandlers.modal = {
   act: function (element, valueAccessor) {
      var value = valueAccessor();
      var binding = ko.utils.unwrapObservable(value);
      binding ? $(element).modal('show') : $(element).modal('hide');
   },
   init: function (element, valueAccessor) {
      $(element).on('hidden', function () {
         var value = valueAccessor();
         if (value()) {
            value(false);
         }
      });
      $(element).on('shown', function () {
         var value = valueAccessor();
         if (!value()) {
            value(true);
         }
      });
      ko.bindingHandlers.modal.act(element, valueAccessor);
   },
   update: function (element, valueAccessor) {
      ko.bindingHandlers.modal.act(element, valueAccessor);
   }
};
