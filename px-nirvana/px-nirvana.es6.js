(function() {
  Polymer({

    is: 'px-nirvana', 

    properties: {
      /**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */
      counterValue: {
        type: Number,
        value: 10,
        notify: true
      },
      fieldMessage: {
        type: String,
        notify: true,
        value: " "
      },
      boxSize: {
        type: Number,
        notify: true,
        value: 60
      },
      textStyle: {
        type: String,
        value: "gray"
      },
      maxCharacters: {
        type: Number,
        value: 30,
        notify: true
      }
    },


    _getTextStyle: function(){
      return this.textStyle;
    },

    handleTap: function() {
      this.fieldMessage = this.$.blah.value;
    },

    handleClear: function() {
      this.fieldMessage = ""; 
      this.$.blah.value = " ";
    },

    handleType: function() {
      this.fieldMessage = this.$.blah.value;
      if (this.fieldMessage.length > this.maxCharacters){
        alert('too long brah');
      };
    },

    /**
    * Handles click on the element defined in 'on-click' on the template.
    *
    * @method handleClick
    */
    handleClick: function(event, detail, sender) {
      this.increment();
    },

    /**
    * Increments the counter
    *
    * @method increment
    */
    increment: function() {
      this.counterValue++;
    }
  });
})();
