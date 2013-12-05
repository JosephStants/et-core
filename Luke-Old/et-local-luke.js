//if (exports.environment === "local") {localStorage.clear();}

//exports.mongoquery = mongoquery = function(queryString) {
exports.mongoquery = mongoquery = function mongoquery(queryString, callback) {
	delete queryString['executethis']; // **** needed?
//function mongoquery(queryString, target, callback) {
	if (queryString["mongowid"]) {
		//return querywidlocal(queryString, callback); 
		// taken out 11-13 ********
		querywidlocal(queryString, callback);
	}
	//
	else
	{

	proxyprinttodiv('Function mongoquery',  queryString,75);
	var enhancedreturn = getwidcopy();
	proxyprinttodiv('Function enhancedreturn',  enhancedreturn,75);
	if (queryString['mongorawquery']) {
		var mongorawquery=queryString['mongorawquery'];
		var ResultList=[];
		proxyprinttodiv('Function mongorawquery', mongorawquery);
		for (var item in mongorawquery) {
			// {"$and": {"data.primarywid":ParentWid, "data.secondarywid":ChildWid }};
			if (item=='$and') {
				var andquery=mongorawquery[item];
				var ParentWid = andquery['data.primarywid'];
				var ChildWid = andquery['data.secondarywid'];
				proxyprinttodiv('Function andquery', andquery);
				proxyprinttodiv('Function ParentWid', ParentWid,75);
				proxyprinttodiv('Function ChildWid', ChildWid,75);	
				for (var myvalue in enhancedreturn){ 	
					proxyprinttodiv('Function myvalue', myvalue);
					//if ((myvalue['primarywid']==ParentWid) && (myvalue['secondarywid']==ChildWid)) {
					if ((enhancedreturn[myvalue]['primarywid']==ParentWid) && (enhancedreturn[myvalue]['secondarywid']==ChildWid)) {	
						proxyprinttodiv('Function match found ', ({"key":"wid","value":myvalue}) ,75);
						ResultList.push({"key":"wid","value":myvalue});
						}
					}
				}	
			}
		}
	proxyprinttodiv('Function simpleQuery in : ResultList',  ResultList);
	//return ResultList
	callback(ResultList);

	}
}
 
function querywidlocal(sq, callback){

	var widInput=sq["mongowid"];
	var mongorelationshiptype=sq["mongorelationshiptype"];
	var mongorelationshipmethod=sq["mongorelationshipmethod"];
	var mongorelationshipdirection=sq["mongorelationshipdirection"];
	var mongowidmethod=sq["mongowidmethod"];
	var convertmethod=sq["convertmethod"];
	var dtotype=sq["dtotype"];

	var returnfromSimpleQuery=[];
	var enhancedreturn=[];

	proxyprinttodiv('Function simpleQuery in : widInput',  widInput);
	proxyprinttodiv('Function simpleQuery in : mongorelationshiptype',  mongorelationshiptype);
	proxyprinttodiv('Function simpleQuery in : mongorelationshipmethod',  mongorelationshipmethod);
	proxyprinttodiv('Function simpleQuery in : mongorelationshipdirection',  mongorelationshipdirection);			
	proxyprinttodiv('Function simpleQuery in : mongowidmethod',  mongowidmethod);
	proxyprinttodiv('Function simpleQuery in : convertmethod',  convertmethod);	
	proxyprinttodiv('Function simpleQuery in : dtotype',  dtotype);		
	if(mongorelationshipdirection == "forward") {
		// step through local storage looking for
	   	var widset=getwidcopy(); // get a copy of all local storage ***
	   //	enhancedreturn=widset; // remove
	   //}
		proxyprinttodiv('Function simpleQuery in : widset',  widset, 30);
	   	//for (var key in localStorage){ //***
	 	for (var widkey in widset){ 	
			//var myvalue = JSON.parse(localStorage.getItem(key)); //**
			proxyprinttodiv('Function simpleQuery in : widkey',  widkey,30);
			//var myvalue = getfrommongo({wid:widkey});

			var executeobject={};
			executeobject["wid"]=widkey;
			//var x = window['getfrommongo'];
			var x = window['getwid'];
			//var myvalue = executethis({wid:widkey}, getfrommongo);
			//var myvalue = executethis(executeobject, getfrommongo);
			var myvalue = executethis(executeobject, x);
			//proxyprinttodiv('Function simpleQuery in : myvalue',  myvalue);
			proxyprinttodiv('Function simpleQuery in : myvalue',  myvalue);
			if (myvalue["primarywid"] == widInput) {
               var widName = myvalue["primarywid"];
			   var key = myvalue["secondarywid"];
			   //var value = getfrommongo({wid:key}); // , dtotype:mongowidmethod
				executeobject={};
				executeobject["wid"]=key;
			   //var value = executethis({wid:key}, getfrommongo);
			   var value = executethis(executeobject, x);
			   //var value = executethis(executeobject, getfrommongo);
			   proxyprinttodiv('Function simpleQuery in : value',  value);
               delete value.wid;
               var resultObj = {};
			   resultObj[key]= value;

			   	//proxyprinttodiv('Function simpleQuery in : resultObj I',  resultObj);		  
				if ((value["metadata.method"] === undefined) || (value["metadata.method"] == "")) {	
					widdto = "";
				}else {
					widdto = value["metadata.method"]
				}

				// changed 10/30 if ((mongowidmethod !== undefined) && (mongowidmethod == widdto)) {
				if (((mongowidmethod !== undefined) && (mongowidmethod == widdto)) || (mongowidmethod=="")) {
					//proxyprinttodiv('Function simpleQuery in : resultObj',  resultObj);
					returnfromSimpleQuery.push(resultObj);
					}
			 	}
			// }
		}
	}
	//proxyprinttodiv('Function simpleQuery in : returnfromSimpleQuery',  returnfromSimpleQuery);
	if (returnfromSimpleQuery.length>0) {
    returnfromSimpleQuery=returnfromSimpleQuery.sort(function(aObj, bObj) {
            var a = getAttributeByIndex(aObj, 0);
            var b = getAttributeByIndex(bObj, 0);
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
 		});
    	}
    if (returnfromSimpleQuery.length>0) {
    	if (mongorelationshipmethod='first') {enhancedreturn=returnfromSimpleQuery[0]};
   	 	if (mongorelationshipmethod='last') {enhancedreturn=returnfromSimpleQuery[returnfromSimpleQuery.length]};
		if (mongorelationshipmethod='all') {enhancedreturn=returnfromSimpleQuery};
		}
	proxyprinttodiv('Function simpleQuery in : enhancedreturn',  enhancedreturn, 30);
	//return enhancedreturn;
	//enhancedreturn.push({'a':'b'});
	callback(enhancedreturn);
}

// function addtomongo(widName, widobject) {
// 	addToLocalStorage(widMasterKey+widName, widobject);
// }

//function addtomongo(inputWidgetObject) {
exports.addtomongo = addtomongo = addtomongo = function addtomongo(inputWidgetObject, callback) {
//function addtomongo(inputWidgetObject, target, callback) {
	delete inputWidgetObject['executethis'];
	proxyprinttodiv('Function addtomongo inputWidgetObject',  inputWidgetObject);
	var widobject={};
	widobject=inputWidgetObject;
	var widName=widobject['wid'];
	//delete widobject['wid'];
//	proxyprinttodiv('Function addtomongo widobject',  widobject,1);
	addToLocalStorage(widMasterKey+widName, widobject);
	widobject['wid']=widName;
	//return widobject;
	callback(widobject);
};

//function getfrommongo(inputWidgetObject) {
exports.getfrommongo = getfrommongo = function getfrommongo(inputWidgetObject, callback) {
//function getfrommongo(inputWidgetObject, target, callback) {
	delete inputWidgetObject['executethis'];
	var output = {};
		if(inputWidgetObject["wid"]) {
			var widKey = inputWidgetObject["wid"].toLowerCase();

			output = getFromLocalStorage(widMasterKey + widKey);
//            proxyprinttodiv('Function getfrommongo results', output, 1);
			if ((output == null) || (output===undefined)) {output = {};}

		}
	//output['a']='b';
	callback(output);
	// callback(output);/// *** Commented by Saurabh 10/11
};//End of getfrommongo function

function getwidcopy() {
// step through local storage looking for
	var set={}; // get a copy of all local storage ***
	for (var key in localStorage){
		if (key.indexOf(widMasterKey) == 0) {
			key = key.substring(10);
			// set[key]=getfrommongo({wid:key});

				var executeobject={};
    			executeobject["wid"]=key;
    			var x = window['getwid'];
    			//var x = window['getfrommongo'];
    			//set[key] = executethis(executeobject, x);
    			set[key] = getFromLocalStorage(widMasterKey + key);
    			//set[key]=executethis(executeobject,getfrommongo);

			//set[key]=executethis({wid:key},getfrommongo);
			}
		}
	//set['a']='b';
	//set.push({'a':'b'});
	return set
}

function getFromLocalStorage(key){
	return JSON.parse(localStorage.getItem(key));
}

function addToLocalStorage(key, value){
	localStorage.setItem(key, JSON.stringify(value));
}

exports.clearLocalStorage = clearLocalStorage = function clearLocalStorage(){
	widMasterKey = "widmaster_";
	localStorage.clear();
	potentialwid = 0;
}
function removeFromLocalStorage(key){
	localStorage.removeItem(key);
}
function resetMasterKey(){
	widMasterKey = "widmaster_";
}
