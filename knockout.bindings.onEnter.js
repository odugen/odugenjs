// thanks to: http://geekswithblogs.net/michelotti/archive/2011/10/11/knockoutjs-custom-binding-for-invoking-an-action-with-enter-key.aspx
ko.bindingHandlers.onEnter = {
   init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
      var allBindings = allBindingsAccessor();
      $(element).keypress(function (event) {
         var keyCode = (event.which ? event.which : event.keyCode);
         if (keyCode === 13) {
            allBindings.onEnter.call(viewModel);
            return false;
         }
         return true;
      });
   }
};