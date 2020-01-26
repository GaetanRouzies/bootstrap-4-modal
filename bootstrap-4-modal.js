// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See bootstrap-4-modal-tests.js for an example of importing.
export const name = 'bootstrap-4-modal';

let $soloModal = null // Used when allowMultiple = false.

// The public API.
export const Modal = {
  allowMultiple: false,
  show: function (templateName, data, options) {
    if ($soloModal == null || this.allowMultiple) {
      let parentNode = document.body;
      let view = Blaze.renderWithData(Template[templateName], data, parentNode);
      let domRange = view._domrange; // TODO: Don't violate against the public API.
      let $modal = domRange.$('.modal');
      $modal.on('shown.bs.modal', function (event) {
        $modal.find('[autofocus]').focus()
      });
      $modal.on('hidden.bs.modal', function (event) {
        Blaze.remove(view)
        $soloModal = null
      });
      $soloModal = $modal;
      $modal.modal(options ? options : {});
    }
  },
  hide: function (/* optional */ template) {
    if (template instanceof Blaze.TemplateInstance) {
      template.$('.modal').modal('hide');
    } else if ($soloModal != null) {
      $soloModal.modal('hide');
    }
  }
}
