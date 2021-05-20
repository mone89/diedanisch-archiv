tinymce.init({
  selector: '#id_content',
  height: 600,
  menubar: true,
  browser_spellcheck: true,
  visualblocks_default_state: true,
  plugins: [
    'anchor autolink code charmap contextmenu',
    'emoticons fullscreen image insertdatetime help',
    'lists link',
    'paste searchreplace visualblocks'
  ],
  toolbar: [
    'help | undo redo | insert | styleselect bsgrid | code | finebutton bold italic | spellchecker | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | emoticons link image'
  ],
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css'],
  setup: function (editor) {
    editor.addButton('bsgrid', {
      text: 'Grid',
      type: 'menubutton',
      icon: false,
      menu: [
        {
          text: 'Row',
          onclick: function() {
              editor.focus();
              editor.selection.setContent(
                '<div class="row vcenter">' + editor.selection.getContent() + '</div>'
              );
          }
        },
        {
          text: 'Col-2',
          onclick: function() {
            editor.focus();
            editor.selection.setContent(
              '<div class="col-sm-2">' + editor.selection.getContent() + '</div>'
            );
          }
        },
        {
          text: 'Col-3',
          onclick: function() {
            editor.focus();
            editor.selection.setContent(
              '<div class="col-sm-3">' + editor.selection.getContent() + '</div>'
            );
          }
        },
        {
          text: 'Col-4',
          onclick: function() {
            editor.focus();
            editor.selection.setContent(
              '<div class="col-sm-4">' + editor.selection.getContent() + '</div>'
            );
          }
        },
        {
          text: 'Col-6',
          onclick: function() {
            editor.focus();
            editor.selection.setContent(
              '<div class="col-sm-6">' + editor.selection.getContent() + '</div>'
            );
          }
        },
        {
          text: 'Col-8',
          onclick: function() {
            editor.focus();
            editor.selection.setContent(
              '<div class="col-sm-8">' + editor.selection.getContent() + '</div>'
            );
          }
        }
      ]
    });
    editor.addButton('finebutton', {
      text: 'F',
      icon: false,
      onclick: function () {
        editor.focus();
        editor.selection.setContent(
          '<span class="fine-font">' + editor.selection.getContent() + '</span>'
        );
      }
    });
  },
  image_class_list: [
    {title: "responsive", value: "img img-responsive"},
    {title: "thumbnail", value: "img img-responsive img-thumbnail"},
    {title: "rounded", value: "img img-responsive img-rounded"},
    {title: "circle", value: "img img-responsive img-circle"},
  ],
  image_dimensions: false
});

