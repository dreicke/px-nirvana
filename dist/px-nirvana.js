"use strict";(function(){Polymer({is:"px-nirvana",properties:{counterValue:{type:Number,value:10,notify:true},fieldMessage:{type:String,notify:true,value:" "},boxSize:{type:Number,notify:true,value:60},textStyle:{type:String,value:"gray"},maxCharacters:{type:Number,value:30,notify:true}},_getTextStyle:function _getTextStyle(){return this.textStyle},handleTap:function handleTap(){this.fieldMessage=this.$.blah.value},handleClear:function handleClear(){this.fieldMessage="";this.$.blah.value=" "},handleType:function handleType(){this.fieldMessage=this.$.blah.value;if(this.fieldMessage.length>this.maxCharacters){alert("too long brah")};},handleClick:function handleClick(event,detail,sender){this.increment()},increment:function increment(){this.counterValue++}})})();
//# sourceMappingURL=px-nirvana.js.map