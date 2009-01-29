var UI = Class.create({
    initialize: function() {
        
    },
    loading: function( options ) {
        this.options = {
            centered: false,
            content: '',
            title: false,
            width: false,
            height: false,
            spinner: false,
            id: 'loading-' + Math.floor(Math.random() * 201)
        };
        Object.extend(this.options, options || { });
        
        var element = new Element('div', { 'class': 'loading', 'id': this.options.id }).update( this.options.content );
        
        if( this.options.width ) {
            element.style.width = this.options.width;
        }
        
        if( this.options.height ) {
            element.style.height = this.options.height;
        }
        
        if( this.options.spinner ) {
            element.addClassName('spinner');
        }
        
        if( this.options.accent ) {
            element.addClassName('accent');
        }
        
        if( this.options.centered ) {
            element.addClassName('centered');
        }
        
        return element;
    }
})