/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Selenium blocks for Blockly.
 * @author mmendes.as@gmail.com (Marcio Mendes) 'sednemm'
 */
'use strict';

goog.provide('Blockly.Blocks.selenium');

goog.require('Blockly.Blocks');

/**
 * Common variables used during code.
 */

//define find options to use in findElement method
var FIND_BY_OPTIONS = 
		[["id", "ID"],
		 ["xpath", "XPATH"],
		 ["name", "NAME"],
		 ["classname", "CLASSNAME"],
		 ["tagname", "TAGNAME"],
		 ["cssselector", "CSS"],
		 ["linktext", "LINK"],
		 ["partiallinktext", "PARTIALLINK"]];


var TEXT_COMPARISON =
	[["equal to", "EQUAL"],	 
	 ["which contains", "CONTAINS"],	 
	 ["which starts with", "STARTSWITH"],
	 ["which ends with", "ENDSWITH"]];


var NUMBER_COMPARISON = 
	[["equal to", "EQUAL"], 
	 ["not equal", "NOTEQUAL"], 
	 ["greater than", "GREATER"], 
	 ["greater than or equal to", "GREATEREQUAL"], 
	 ["less than", "LESS"], 
	 ["less than or equal to", "LESSEQUAL"]];


var orange_color = '#FF8000';
var green_color = '#009900';
var blue_color = '#000099';
var red_color = '#990000';

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.texts.HUE = 200;


/**
* region WHEN
*/

Blockly.Blocks['selenium_check'] = {
  init: function() {
	this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#cbfd3w');
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user checks");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');    
  }
};

Blockly.Blocks['selenium_clear'] = {
  init: function() {	
	this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user clear");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fst8qd');
  }
};

Blockly.Blocks['selenium_click'] = {
  init: function() {	
	this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user clicks");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fxobjk');
  }
};

Blockly.Blocks['selenium_contextclick'] = {
  init: function() {
	this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user clicks right button on");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6ntagi');
  }
};

Blockly.Blocks['selenium_draganddrop'] = {
  init: function() {
    this.appendValueInput("locator_source")
        .setCheck("String")
        .appendField("{When} user drag and drop {source}");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBYSOURCE");
    this.appendValueInput("locator_target")
        .setCheck("String")
        .appendField("to {target}");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBYTARGET");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fav3bg');
  }
};

Blockly.Blocks['selenium_fill'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user fills");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("with value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sid5ck');
  }
};

Blockly.Blocks['selenium_hover'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user hovers");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#za83rr');
  }
};

Blockly.Blocks['selenium_scroll'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user scrolls to");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8kp9cr');
  }
};

Blockly.Blocks['selenium_select'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{When} user select combo item");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(" using text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(blue_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#t2h6jh');
  }
};

//endregion


/**
* region THEN (state)
*/

Blockly.Blocks['selenium_ispresent'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("is present");
    this.setInputsInline(true);
	this.setOutput(true, "Boolean");    
    this.setColour(orange_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nntqoh');
  }
};

Blockly.Blocks['selenium_isdisplayed'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("is displayed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(orange_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gzq5bf');
  }
};

Blockly.Blocks['selenium_isselected'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("is selected");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(orange_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#cpqagc');
  }
};

Blockly.Blocks['selenium_isenabled'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("is enabled");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(orange_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#box6kr');
  }
};

//endregion


/**
* region THEN (value)
*/

Blockly.Blocks['selenium_valuehastext'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("has text");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(TEXT_COMPARISON), "SELECTCOMPARE");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#csmyf9');
  }
};

Blockly.Blocks['selenium_valuehasvalue'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("has value");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(TEXT_COMPARISON), "SELECTCOMPARE");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#k67wa2');
  }
};

Blockly.Blocks['selenium_valuehastextlength'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("has text length");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(NUMBER_COMPARISON), "SELECTNUMCOMPARE");
    this.appendValueInput("text")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#d94uw3');
  }
};

Blockly.Blocks['selenium_combooption'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("has option");
    this.appendValueInput("text")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["selected", "SELECTED"], ["avaiable", "AVAIABLE"]]), "SELECTOPTIONS");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#doo5kv');
  }
};

Blockly.Blocks['selenium_valuehascssattribute'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendValueInput("cssattribute")
        .setCheck("String")
        .appendField("has CSS attribute");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(TEXT_COMPARISON), "SELECTCOMPARE");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sj4938');
  }
};

Blockly.Blocks['selenium_valuehasattribute'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendValueInput("attribute")
        .setCheck("String")
        .appendField("has attribute");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(TEXT_COMPARISON), "SELECTCOMPARE");
    this.appendValueInput("text")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zrkg8o');
  }
};

Blockly.Blocks['selenium_valuehaselementscount'] = {
  init: function() {
    this.appendValueInput("locator")
        .setCheck("String")
        .appendField("{Then} the");
    this.appendDummyInput()
        .appendField("{by}")
        .appendField(new Blockly.FieldDropdown(FIND_BY_OPTIONS), "SELECTBY");
    this.appendDummyInput()
        .appendField("has elements count");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(NUMBER_COMPARISON), "SELECTNUMCOMPARE");
    this.appendValueInput("text")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(green_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xjzgf9');
  }
};

//endregion


/**
* region GIVEN
*/

Blockly.Blocks['selenium_openurl'] = {
  init: function() {
    this.appendValueInput("url")
        .setCheck("String")
        .appendField("{Given} user navigates to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(red_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#v9qzeb');
  }
};


Blockly.Blocks['selenium_closewebbrowser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("{Given} user closes the web browser");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(red_color);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gcuzur');
  }
};

//endregion


Blockly.Blocks['selenium_startscript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start new script with name:");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("using the")
        .appendField(new Blockly.FieldDropdown([["firefox", "FIREFOX"], ["chrome", "CHROME"], ["internet_explorer", "IEXPLORER"]]), "SELECTBROWSER")
        .appendField("browser");
    this.appendStatementInput("SCRIPT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
