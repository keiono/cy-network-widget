var widgets = require('jupyter-js-widgets');
var _ = require('underscore');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend({}, widgets.DOMWidgetModel.prototype.defaults, {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'cy-network-widget',
        _view_module : 'cy-network-widget',
        value : 'Hello World'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({

    render: function() {
        console.log('4448 render called ************');
        this.$el.append('<h1>Cytoscape Widget</h1>')


        this.$el.append(
          '<input type="file" id="files" name="files[]" multiple />');
    },

    events: {
        'change': '_handleFileChange'
    },

    _handleFileChange: function _handleFileChange (ev) {

        console.log('-----------Changed-------------');
        console.log(ev);

        var file = ev.target.files[0];
        console.log('-----------FILE2-------------');
        console.log(file);

        var that = this;
        if (file) {
            var fileReader = new FileReader();

            fileReader.onload = function fileReaderOnload () {
                console.log('******** result');
                console.log(fileReader.result);

                that.model.set('value', file.name);
                that.touch();
            };

            fileReader.readAsText(file);
        }
        else {
            that.send({ event: 'Unable to open file.' });
            console.log('********FAIL')
        }
        that.model.set('filename', file.name);
        that.touch();
    }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};
