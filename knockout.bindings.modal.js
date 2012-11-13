ko.bindingHandlers.modal = {
   getValue: function (valueAccessor) {
      var value = valueAccessor();
      var binding = ko.utils.unwrapObservable(value);
      if (typeof binding === 'object') {
         return binding.on;
      }
      return value;
   },
   act: function (element, valueAccessor) {
      var value = valueAccessor();
      var binding = ko.utils.unwrapObservable(value);
      var $el = $(element);
      var state = false;
      if (typeof binding === 'object') {
         state = binding.on() || false;
         if (binding.static) {
            $el.modal({ backdrop: 'static', keyboard: false });
         }
      }
      if (typeof binding === 'boolean') {
         state = binding;
      }

      state ? $el.modal('show') : $el.modal('hide');
   },
   init: function (element, valueAccessor) {
      $(element).on('hidden', function () {
         var value = ko.bindingHandlers.modal.getValue(valueAccessor);
         if (value()) {
            value(false);
         }
      });
      $(element).on('shown', function () {
         var value = ko.bindingHandlers.modal.getValue(valueAccessor);
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
