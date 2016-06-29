/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Java for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Java.selenium');

goog.require('Blockly.Java');



//frequently used arrays

var FIND_BY_OPT = {
	'ID': 'By.id',
	'XPATH': 'By.xpath',
	'NAME': 'By.name',
	'CLASSNAME': 'By.className',
	'TAGNAME': 'By.tagName',
	'CSS': 'By.cssSelector',
	'LINK': 'By.linkText',
	'PARTIALLINK': 'By.partialLinkText'
};

var STR_COMPARISON = {
	'EQUAL': '.equals',	
	'CONTAINS': '.contains',	
	'STARTSWITH': '.startsWith',
	'ENDSWITH': '.endsWith'
};

var NUM_COMPARISON = {
	'EQUAL': '==',	
	'NOTEQUAL': '!=',	
	'GREATER': '>',
	'GREATEREQUAL': '>=',
	'LESS': '<',
	'LESSEQUAL': '<='
};


var STR_BROWSER_INST = {
	'FIREFOX': 'new FirefoxDriver();',	
	'CHROME': 'new ChromeDriver();',	
	'IEXPLORER': 'new InternetExplorerDriver();'	
};


//methods implementation

Blockly.Java['selenium_check'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).click();\n';
  	return code;
};


Blockly.Java['selenium_clear'] = function(block) {	
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).clear();\n';
  	return code;
};


Blockly.Java['selenium_click'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).click();\n';
  	return code;
};


Blockly.Java['selenium_contextclick'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	//create code
	var code = 'Actions actions = new Actions(driver);' +
			   'actions.contextClick(driver.findElement(' + findBy +'(' + locator + ')));\n';
  	return code;
};


Blockly.Java['selenium_draganddrop'] = function(block) {
	//get find by and locator from screen
	var findBy_source = FIND_BY_OPT[block.getFieldValue('SELECTBYSOURCE')];	
	var locator_source = Blockly.Java.valueToCode(block, 'locator_source', Blockly.Java.ORDER_ATOMIC);
	var findBy_target = FIND_BY_OPT[block.getFieldValue('SELECTBYTARGET')];	
	var locator_target = Blockly.Java.valueToCode(block, 'locator_target', Blockly.Java.ORDER_ATOMIC);
	//create code
	var code = 'Actions actions = new Actions(driver);' +
			   'WebElement source = driver.findElement(' + findBy_source +'(' + locator_source + '));\n' +
			   'WebElement target = driver.findElement(' + findBy_target +'(' + locator_target + '));\n' +
			   'actions.dragAndDrop(source, target);\n';
  	return code;
};


Blockly.Java['selenium_fill'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).sendKeys(' + value_text + ');\n';
  	return code;
};


Blockly.Java['selenium_hover'] = function(block) {
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);	
  	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
	
	//create code
	var code = 'Actions actions = new Actions(driver);' +
			   'actions.moveToElement(driver.findElement(' + findBy +'(' + locator + ')));\n'; 
	return code;
};


Blockly.Java['selenium_scroll'] = function(block) {
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);	
  	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
	
	//create code
	var code = '((JavaExecutor)driver).executeScript(\"arguments[0].scrollIntoView();\", driver.findElement(' + findBy +'(' + locator + '))));'
	
	return code;
};


Blockly.Java['selenium_select'] = function(block) {
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);	
  	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	//create code
	var code = 'WebElement select = driver.findElement(' + findBy +'(' + locator + '));\n';
			   'Select dropDown = new Select(select);\n' +
			   'dropDown.selectByVisibleText('+ value_text +');\n'; 
	return code;
};




Blockly.Java['selenium_ispresent'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	//create code
	var code = 'driver.findElements(' + findBy +'(' + locator + ')).size() == 0';
  	return code;
};


Blockly.Java['selenium_isdisplayed'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).isDisplayed()';
  	return code;
};


Blockly.Java['selenium_isselected'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).isSelected()';
	
	comparisonCount++;
  	return code;
};


Blockly.Java['selenium_isenabled'] = function(block) {
	//get find by and locator from screen
	var findBy = FIND_BY_OPT[block.getFieldValue('SELECTBY')];	
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	//create code
	var code = 'driver.findElement(' + findBy +'(' + locator + ')).isEnabled()';
  	return code;
};




Blockly.Java['selenium_valuehastext'] = function(block) {
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  	var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  	var dropdown_selectcompare = STR_COMPARISON[block.getFieldValue('SELECTCOMPARE')];
  	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  	
    var code = 'driver.findElement(' + dropdown_selectby +'(' + locator + ')).getText()' + 
			   dropdown_selectcompare + '(' + value_text + ')';

  	// TODO: Change ORDER_NONE to the correct strength.
  	return [code, Blockly.Java.ORDER_NONE];
};


Blockly.Java['selenium_valuehasvalue'] = function(block) {
	var locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  	var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  	var dropdown_selectcompare = STR_COMPARISON[block.getFieldValue('SELECTCOMPARE')];
  	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  	
    var code = 'driver.findElement(' + dropdown_selectby +'(' + locator + ')).getText()' + 
			   dropdown_selectcompare + '(' + value_text + ')';

  	// TODO: Change ORDER_NONE to the correct strength.
  	return [code, Blockly.Java.ORDER_NONE];
};


Blockly.Java['selenium_valuehastextlength'] = function(block) {
  var value_locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  var dropdown_selectnumcompare = NUM_COMPARISON[block.getFieldValue('SELECTNUMCOMPARE')];
  var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
  var code = 'driver.findElement(' + dropdown_selectby +'(' + value_locator + ')).getText().length() ' +
	         dropdown_selectnumcompare + ' ' + value_text;
	
  return [code, Blockly.Java.ORDER_NONE];
};


Blockly.Java['selenium_combooption'] = function(block) {
  	var value_locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  	var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  	var dropdown_selectoptions = block.getFieldValue('SELECTOPTIONS');
	var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
	var code = '';
	if(dropdown_selectoptions == 'SELECTED'){
	  code = 'new Select(driver.findElement(' + dropdown_selectby +'(' + value_locator + ')))' + 
		     '.getFirstSelectedOption() == \"' + value_text + '\"';  
	}
	else if(dropdown_selectoptions == 'AVAIABLE'){
	  code = 'new Select(driver.findElement(' + dropdown_selectby +'(' + value_locator + ')))' + 
		     '.getOptions().contains(\"' + value_text + '\")';  
	}
	
	return [code, Blockly.Java.ORDER_NONE];  
};


Blockly.Java['selenium_valuehascssattribute'] = function(block) {
  var value_locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  var value_cssattribute = Blockly.Java.valueToCode(block, 'cssattribute', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectcompare = STR_COMPARISON[block.getFieldValue('SELECTCOMPARE')];
  var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
  var code = 'driver.findElement(' + dropdown_selectby +'(' + locator + ')).getCssValue(' + value_cssattribute + ')' + 
			  dropdown_selectcompare + '(' + value_text + ')';
  
  return [code, Blockly.Java.ORDER_NONE];
};


Blockly.Java['selenium_valuehasattribute'] = function(block) {
  var value_locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  var value_attribute = Blockly.Java.valueToCode(block, 'attribute', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectcompare = STR_COMPARISON[block.getFieldValue('SELECTCOMPARE')];
  var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
  var code = 'driver.findElement(' + dropdown_selectby +'(' + locator + ')).getAttribute(' + value_attribute + ')' + 
			  dropdown_selectcompare + '(' + value_text + ')';
  
  return [code, Blockly.Java.ORDER_NONE];
};


Blockly.Java['selenium_valuehaselementscount'] = function(block) {
  var value_locator = Blockly.Java.valueToCode(block, 'locator', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectby = FIND_BY_OPT[block.getFieldValue('SELECTBY')];
  var dropdown_selectnumcompare = NUM_COMPARISON[block.getFieldValue('SELECTNUMCOMPARE')];
  var value_text = Blockly.Java.valueToCode(block, 'text', Blockly.Java.ORDER_ATOMIC);
  
  var code = 'driver.findElements(' + dropdown_selectby +'(' + value_locator + ')).size() ' +
	         dropdown_selectnumcompare + ' ' + value_text;
	
  return [code, Blockly.Java.ORDER_NONE];
};


Blockly.Java['selenium_openurl'] = function(block) {
  var value_url = Blockly.Java.valueToCode(block, 'url', Blockly.Java.ORDER_ATOMIC);  
  var code = 'driver.navigate().to("' + value_url + '");\n';
  return code;
};


Blockly.Java['selenium_closewebbrowser'] = function(block) {  
  var code = 'driver.quit();\n';
  return code;
};


Blockly.Java['selenium_startscript'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
  var dropdown_selectbrowser = STR_BROWSER_INST[block.getFieldValue('SELECTBROWSER')];
  var statements_script = Blockly.Java.statementToCode(block, 'SCRIPT');
  // TODO: Assemble JavaScript into code variable.

  value_name = value_name.replace("\"", "");
  if(value_name == "") value_name = "JavaSeleniumWebdriver";
	
  var code = 
	'package com.yourpackage.example;\n\n'+
	'import java.util.regex.Pattern;\n'+
	'import java.util.concurrent.TimeUnit;\n'+
	'import org.junit.*;\n'+
	'import static org.junit.Assert.*;\n'+
	'import static org.hamcrest.CoreMatchers.*;\n'+
	'import org.openqa.selenium.*;\n'+	
	'import org.openqa.selenium.support.ui.Select;\n\n\n'+

	'public class '+ value_name +' {\n'+
	'	private WebDriver driver;\n'+
	'	private String baseUrl;\n'+
	'	private boolean acceptNextAlert = true;\n'+
	'	private StringBuffer verificationErrors = new StringBuffer();\n\n'+
	
	'	@Before\n'+
	'  	public void setUp() throws Exception {\n'+
	'		driver = '+ dropdown_selectbrowser + '\n'+
	'		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);\n'+
	'	}\n'+

	'	@Test\n'+
	'	public void testJavaSeleniumWebdriver() throws Exception {\n'
			+ statements_script +
	'	}\n\n'+
	  
	'	@After\n'+
	'	public void tearDown() throws Exception {\n'+
	'		driver.quit();\n'+
	'    	String verificationErrorString = verificationErrors.toString();\n'+
	'		if (!"".equals(verificationErrorString)) {\n'+
	'			fail(verificationErrorString);\n'+
	'		}\n'+
	'	}\n'+
	'}\n';
  
  return code;
};

