(function (window) {
// {_id:121212, wid:wid3, metadata: {method:x, y:z}, data: {a:b,c:d}}
// added dtoin --- problem with 0. for one to one
// external functions are getwid, upatewid, addwidmaster, getwidmaster, securitycheck
// they should remove parameter executethis upon entry
// line 607 		if (((item!='wid') && (item!='metadata.method')) || (childdto!=dtotype)) {proposedLeft=preAmble + "." + item}
// confirm we are storing 'addthis' and only removing on get
// locks if dtoadd = adddto versus action dto -- probably lost in addmaster
// ++++ calling getwid is good calling it through execute not
// if what is being executed is not a string exeuctehis=
// () at end


    exports.updatewid =  updatewid = function updatewid(inputWidgetObject, callback) {
        delete inputWidgetObject['executethis'];
        proxyprinttodiv('Function updatewid in : inputWidgetObject',  inputWidgetObject,10);
        // for conversion:
        var saveobject={}

        if (inputWidgetObject['wid']) { saveobject['wid'] = inputWidgetObject['wid'];	}
        else { saveobject['wid']=""; }

        delete inputWidgetObject['wid'];

        if (inputWidgetObject['metadata.method']){ saveobject['metadata.method'] = inputWidgetObject['metadata.method']; }
        else { saveobject['metadata.method']=""; }

        delete inputWidgetObject['metadata.method'];

        if (inputWidgetObject) { saveobject['data'] = inputWidgetObject; }
        else { saveobject['data']=""; }

        // addtomongo(saveobject, function(results) {
        //     proxyprinttodiv('Function updatewid in : x', results, 10);
        //     callback(results);
        // });
        callback (executethis(saveobject,addtomongo));
    };




// Prepares an object to be recorded in local storage and puts it there
    function MongoAddEditPrepare(Indto, InList, widid, widdto) {
        /* 	Indto = [{"key":"e","value":"onetomany"}];

         InList = [{"key":"e","value":"f"}]; */
        proxyprinttodiv('Function MongoAddEditPrepare, Indto : ', Indto,90);
        proxyprinttodiv('Function MongoAddEditPrepare, InList : ', InList,90);
        proxyprinttodiv('Function MongoAddEditPrepare, widid : ', widid,90);
        proxyprinttodiv('Function MongoAddEditPrepare, widdto : ', widdto,90);

        var InListObj = {};
        var rawobject = {};
        var rawlist = [];
        InListObj = listToObject(InList);
        var item;

        //added 11/4 -- if item begins wiht addthis. then remove it

        // for (item in InListObj){
        // 	proxyprinttodiv('Function MongoAddEditPrepare substring : ', item.substring(0, 8));
        // 	if (item.substring(0, 8) == "addthis.") {
        // 		proxyprinttodiv('Function MongoAddEditPrepare 11+ : ', item.substring(8, item.length));
        // 		InListObj[item.substring(8, item.length)]=InListObj[item];
        // 		delete InListObj[item];
        // 		}
        // 	}

        if ((InListObj["wid"]===undefined) || (InListObj["wid"] == "")){
            if ((widid!==undefined) || (widid!="")) {InListObj["wid"] = widid};
        }
        if ((InListObj["wid"] === undefined) || (InListObj["wid"] == "")) {
            potentialwid=potentialwid+1;
            InListObj["wid"] = potentialwid.toString();
        }
        else
        { // if the wid existed, read the contents of the previous wid, we want to update not add.
            //Debug='true';
            executeobject={};
            executeobject["executethis"]="getwid";
            executeobject["wid"]=InListObj["wid"];
            var x = window['execute'];
            rawobject=executethis(executeobject,x);
            if (((rawobject["metadata.method"]!==undefined) || (rawobject["metadata.method"] != "")) &&
                ((InListObj["metadata.method"]===undefined) || (InListObj["metadata.method"] == ""))) {
                InListObj["metadata.method"]=rawobject["metadata.method"];
            }
            //rawobject = getfrommongo({"wid":InListObj["wid"]});
            InListObj =  jsonConcat(InListObj,rawobject); // this will be the new contents concat with old stuff in wid

            // rawobject = getWidMongo(InListObj["wid"],"",widdto, "","dto",Indto, ""})
            rawobject={};  // if the dto had inherit then we only want to save what in herit does not have

            for (item in Indto) {   // load all data related to inherit
                if (item.value=='inherit') {
                    var executeobject={};
                    executeobject["executethis"]="getwid"; // probably should be getwidmaster -- changed from only getwid
                    executeobject["wid"]=item.key;
                    var x = window['execute'];
                    rawobject=executethis(executeobject,x);
                    //rawobject = getfrommongo({"wid":item.key});
                    rawobject =  jsonConcat(rawobject,rawobject);
                }
            }
            for (item in rawobject) {  // for all data in inherit, delete it from being added
                if (InListObj[item]==rawobject[item]) {
                    delete InListObj[item];
                }
            }
        }
        if ((InListObj["metadata.method"]===undefined) || (InListObj["metadata.method"] == "")) {
            if ((widdto!==undefined) || (widdto!="")) { InListObj["metadata.method"] = widdto; }
        }
        if ((InListObj["metadata.method"] === undefined) || (InListObj["metadata.method"] == "")) {
            InListObj["metadata.method"] = 'defaultdto';
        }
        //proxyprinttodiv('Function MongoAddEditPrepare InListObj before : ', InListObj);
        //proxyprinttodiv('Function MongoAddEditPrepare rawobject from get : ', rawobject);

        // step through dto look for inherit parameters, then delete them from save

        //proxyprinttodiv('Function MongoAddEditPrepare InListObj after : ', InListObj);

        //Debug='false';


        InListObj["wid"]=InListObj["wid"].toLowerCase();

        //InListObj["executethis"]="updatewid";
        //var addresult=executethis(InListObj); // excutethismight be a parameter

        var addresult=executethis(InListObj,updatewid);
        //var addresult=executethis(InListObj,addtomongo);

        //addtomongo(InListObj["wid"], InListObj)
        //addtomongoII(InListObj);
        //var addresult = addtomongo(InListObj);
        //addToLocalStorage(widMasterKey + InListObj["wid"], InListObj);
        //olddebug=Debug;
        //Debug='true';

        proxyprinttodiv('Function MongoAddEditPrepare, ******************* InListObj : ', InListObj,90);
        //proxyprinttodiv('Function MongoAddEditPrepare, ******************* addresult : ', addresult, true);
        //Debug=olddebug;
        //InListObj["LOG"]="LOG";
        //addtomongo(InListObj["wid"], InListObj)
        // addToLocalStorage(widMasterKey + "add_"+InListObj["wid"], InListObj);
        return InListObj;
    }

    function AddMongoRelationship(ParentWid,ChildWid,attr){
        relationshipdto={'primarywid':'string','secondarywid':'string', 'relationshiptype':'string','metadata.method':'string'};
        // note above should be list but does not matter
        InList = [];
        InList.push({"key":"primarywid","value":ParentWid.toLowerCase()});
        InList.push({"key":"secondarywid","value":ChildWid.toLowerCase()});
        InList.push({"key":"relationshiptype","value":attr.toLowerCase()});
        InList.push({"key":"metadata.method","value":"relationshipdto"});

        executeobject={};
        executeobject["mongorawquery"]={"$and": {"data.primarywid":ParentWid, "data.secondarywid":ChildWid }};
        executeobject["executethis"]=querywid;
        //var widset=executethis(executeobject,execute);
        proxyprinttodiv('Function AddMongoRelationship - executeobject',  executeobject,75);
        var widset=executethis(executeobject,querywid);
        proxyprinttodiv('Function MongoAddEditPrepare, ******************* 1 : ', widset,90);
        var widobject={};
        if (widset.length>0) {widobject=widset[0]} else {widobject={}};
        InList.push(widobject);

        //var widset=getwidcopy(); // get a copy of all local storage ***
        // above changed 11-3 ********
        // right now querywid does not do anything but a list


        //for (var widkey in widset){
        // for (var key in localStorage){				// search for duplicate
        //var myvalue = JSON.parse(localStorage.getItem(key));
        // executeobject={};
        //   	executeobject["executethis"]="getwid";
        //   	executeobject["wid"]=widkey;
        //   	var myvalue=executethis(executeobject,execute);
        //var myvalue = getfrommongo({wid:widkey});

        // this was commented 11/3
        // for (var myvalue in widset){
        // 	if ((myvalue['primarywid']==ParentWid) && (myvalue['secondarywid']==ChildWid)) {
        // 		InList.push({"key":"wid","value":myvalue['wid']});
        // 		}
        // 	}

        widset=InList;

        proxyprinttodiv('Function MongoAddEditPrepare, ******************* 2 : ', widset,90);

        AddedObject = MongoAddEditPrepare([], widset, "", attr );
    }


// know issue -- cannot save blank parameter if jsonConcat (inherit)



    function addcleanparameters(resultObj, dtotype, accesstoken, cleanmethod, convertmethod) {
        proxyprinttodiv('Function addcleanparameteres() resultObj I ' , resultObj,80);
        proxyprinttodiv('Function addcleanparameteres()  dtotype I' , dtotype,80);
        proxyprinttodiv('Function addcleanparameteres()  accesstoken I' , accesstoken);
        proxyprinttodiv('Function addcleanparameteres()  convertmethod I' , convertmethod,80);
        var outputparameters = {};
        var dtoloc = 0;
        var proposedLeft = "";
        var proposedRight = "";
        var dtoobject = {};
        var inputParametersObject = {};
        var childdto = dtotype;
        var preAmble="";
        var item="";
        var moreParameters={};
        var executeobject={};
        var eafield="";
        var otherdtoobject={};
        var resultlist=[];

        // first try to get dtoobject from method
        inputParametersObject = resultObj;

        if ((inputParametersObject['metadata.method'])) { // && (dtotype=="")) {
            childdto = inputParametersObject['metadata.method'];
            // dtoobject=getwidmaster({'wid':metadata,
            // 						'command.convertmethod':'dto',
            // 						'command.dtotype':metadata});
            executeobject={};
            //executeobject["executethis"]=getwidmaster;
            executeobject["wid"]=childdto;
            executeobject["command.convertmethod"]="dto";
            executeobject["command.dtotype"]=childdto;
            //dtoobject=executethis(executeobject,execute);
            dtoobject=executethis(executeobject,getwidmaster);
            proxyprinttodiv('Function addcleanparameteres()  result dtoobject ',  dtoobject,80);
            //dtoobject=executethis({'executethis':'getwidmaster', 'wid':metadata,
            //						'command.convertmethod':'dto',
            //						'command.dtotype':metadata}); // not sure if this ever worked
        }

        // next get dtoobject from dtotype -- aggressive
        childdto=dtotype;
        if (dtotype!=="") {
            proxyprinttodiv('Function addcleanparameteres()  dtotype check ',  dtotype);
            otherdtoobject = aggressivedto(dtotype, "", 10);
            proxyprinttodiv('Function addcleanparameteres()  otherdtoobject ',  otherdtoobject);
            proxyprinttodiv('Function addcleanparameteres()  countKeys(otherdtoobject) ',  countKeys(otherdtoobject));
            proxyprinttodiv('Function addcleanparameteres()  countKeys(dtoobject) ',  countKeys(dtoobject));

            // if dtotype object is bigger than method dtoobject then swtich who is childdto
            if (countKeys(otherdtoobject) > countKeys(dtoobject)) {
                dtoobject=otherdtoobject;
                childdto=inputParametersObject['metadata.method'];
            }
        }

        proxyprinttodiv('Function addcleanparameteres()  childdto ', childdto,80);
        proxyprinttodiv('Function addcleanparameteres()  dtotype : II ',  dtotype,80);

        // if dtotype was blank then just adopt it from method
        if (dtotype=="") {dtotype=resultObj["metadata.method"]};

        // if dtotype <> method then we need to add to parameters
        if (resultObj["metadata.method"] != dtotype) {
            proxyprinttodiv('Function addcleanparameteres()  resultObj' , resultObj, 80);
            proxyprinttodiv('Function addcleanparameteres()  dtoobject inside ' , dtoobject, 80);

            for (item in dtoobject) {

                if (
                    ((dtoobject[item] == 'onetomany') ||
                        (dtoobject[item] == 'onetoone'))) {
                    preAmble=item;
                }
            }
            proxyprinttodiv('Function addcleanparameteres()  preAmble ' , preAmble,80);


            for (item in resultObj) {  // now step through each record that could be changed
                proposedLeft=item;
                proposedRight=resultObj[item];
                // taken out 11-5
                //if ((item!='wid') && (item!='metadata.method')) {
                proxyprinttodiv('Function addcleanparameteres()  item' , item, 81);
                proposedLeft=""; // work on left first...check if add or remvove
                if ((cleanmethod=="add") && (preAmble!="")) {
                    if (((item!='wid') && (item!='metadata.method')) || (childdto!=dtotype)) {
                        proposedLeft=preAmble + "." + item
                    }
                    else {proposedLeft=item}
                }


                proxyprinttodiv('Function addcleanparameteres()  proposedLeft' , proposedLeft,81);
                proxyprinttodiv('Function addcleanparameteres()  proposedRight' , proposedRight,81);
                if (proposedLeft!="") {outputparameters[proposedLeft]=proposedRight}
                proxyprinttodiv('Function addcleanparameteres()  outputparameters' , outputparameters,81);
            }
            // 11-5 **
            //
            if ((preAmble!="") && (childdto!=dtotype)) {
                outputparameters["metadata.method"]=dtotype;
                outputparameters["wid"]="";
            }
        }

        else {
            outputparameters=resultObj;

        }

        proxyprinttodiv('Function addcleanparameteres() resultObj end end end' , resultObj,80);
        proxyprinttodiv('Function addcleanparameteres()  dtotype end end end' , dtotype,80);
        proxyprinttodiv('Function addcleanparameteres()  convertmethod end end end' , convertmethod,80);
        proxyprinttodiv('Function addcleanparameteres()  outputparameters end end end ' , outputparameters, 80);
        proxyprinttodiv('Function addcleanparameteres()  dtoobject end end end ' , dtoobject, 80);
        return {
            parms : outputparameters,
            dto : dtoobject
        };
    }



// This tears apart an object with properties that are objects.
// It opens up all the nested objects to create a flat list of properties
// of an object. Then AddWidParameters is called, which in turn calls
// AddMaster to get the wid placed into the db or local storage. Note that 
// nothing calls this except the test. This is the highest level of the adding
// process for DOT notation.
    exports.addwidmaster = addwidmaster = function addwidmaster (inputObject, callback) {
        var OutParameters = ConvertToDOTdri(inputObject);
        //OutParameters = tolowerparameters(OutParameters, OutParameters['command.convertmethod']);
        var Wid = AddWidParameters(OutParameters);
        if (callback instanceof Function) { callback({Wid:Wid}); }
        else { return {Wid:Wid}; }


        //proxyprinttodiv('Function addwidmaster() Constant input : ', input );
        //proxyprinttodiv('Function addwidmaster() ConstandtdtoobjectDOT : ', dtoobjectDOT );
        //proxyprinttodiv('Function addwidmaster() Received into addwidmaster inputObject : ', inputObject );
        //proxyprinttodiv('Function addwidmaster() Sent out from OutParameters : ', OutParameters );
    };

// Sets up call to addwidmaster (to add a parameter to the DTO ?)
    function AddWidParameters(parameterObject) {

        //proxyprinttodiv('Function AddWidParameters()  parameterObject : ',  parameterObject);

        // obj sets up the match and nomatch arrays
        var obj = MatchPrefix(parameterObject, "command");
        // inputParametersList is the part of the DOT that does not match the DTO
        var inputParametersList = obj.nomatch;
        // commandList is the part of the DOT that matches the DTO
        var commandList = obj.match;
        // commandobject makes an object out of the commandlist
        var commandobject = listToObject(commandList);
        var inputParametersObject = listToObject(inputParametersList);


        proxyprinttodiv('Function AddWidParameters()  inputParametersObject : ',  inputParametersObject);
        //proxyprinttodiv('Function AddWidParameters()  commandList : ',  commandobject);

        var parameterObject={};
        var dtoobject ={};
        var metadata = "";

        commandobject = tolowerparameters(commandobject, {'command.dtotype':'add', 'command.convertmethod':'add', 'command.checkflag':'add', 'command.inherit':'add', 'command.accesstoken':'add'});
        inputParametersObject = tolowerparameters(inputParametersObject, {'metadata.method':'add','metadata.style':'true', 'wid':'add', 'primarywid':'true', 'secondarywid':'true', 'relationshiptype':'true'});
        delete inputParametersObject['executethis']; //** added 11/2
        if (inputParametersObject["wid"]===undefined) {inputParametersObject["wid"]="";}
        //proxyprinttodiv('Function AddWidParameters()  commandList : ',  commandobject);
        olddebug=Debug;
//   	Debug=olddebug;
        var checkflag = commandobject["command.checkflag"];
        var accesstoken = commandobject["command.accesstoken"];
        var inherit = commandobject["command.inherit"];
        var dtotype = commandobject["command.dtotype"];
        var convertmethod = commandobject["command.convertmethod"];

        proxyprinttodiv('Function AddWidParameters()  checkflag ',  checkflag);
        proxyprinttodiv('Function AddWidParameters()  accesstoken : I ',  accesstoken);
        proxyprinttodiv('Function AddWidParameters() inherit : I ',  inherit);

        proxyprinttodiv('Function AddWidParameters()  dtotype : dtotype ',  dtotype);
//  	Debug=olddebug;

//		olddebug=Debug;
//		Debug=olddebug;
        proxyprinttodiv('Function addWidParameters ** before ' , inputParametersObject,15);
        proxyprinttodiv('Function AddWidParameters() convertmethod ',  convertmethod,15);
        proxyprinttodiv('Function AddWidParameters()  dtotype : dtotype ',  dtotype,15);


        parameterObject = addcleanparameters(inputParametersObject, dtotype, accesstoken, "add", convertmethod);
        inputParametersObject = parameterObject.parms; // ************ prob dont need this
        dtoobject = parameterObject.dto;   // ************
        proxyprinttodiv('Function AddWidParameters()  inputParametersObject ',  inputParametersObject,15);
        proxyprinttodiv('Function AddWidParameters()  dtoobject ',  dtoobject,15);

        // not sure if this is important
        if ((inputParametersObject['metadata.method'] !== "") && (dtotype=="")) {
            metadata = inputParametersObject['metadata.method'];
        }

// clean parameters should filter parameters based on dtotype
// if dtotype <> inputparmeterobject[method] then add preamble to all parameters
// ((inputParametersObject['metadata.method'] !== "") && (dtotype=="")) 
// (dtotype!=="") 


        proxyprinttodiv('Function addWidParameters ** after ' , inputParametersObject);
        //if (convertMethod=="nowid") {
        //	delete resultObj["wid"];
        //	delete resultObj["metadata.method"];
        //}

        proxyprinttodiv('Function AddWidParameters() dtoobject return: ',  dtoobject);
        //proxyprinttodiv('Function AddWidParameters() metadata : ',  metadata);

        if (inherit) {
            executeobject={};
            executeobject["executethis"]=getwid;
            executeobject["wid"]=inherit;
            var moreParameters=executethis(executeobject,getwid);
            //var moreParameters = getfrommongo({'wid':inherit});
            if (moreParameters) {
                inputParametersObject = jsonConcat(inputParametersObject,moreParameters);  // if duplicates then currentLevelObject{} wins
            }
        }

        var inputList = objectToList(inputParametersObject);
        var dtoList=objectToList(dtoobject);

        //proxyprinttodiv('Function AddWidParameters()  inputList : ',  inputList);
        //proxyprinttodiv('Function AddWidParameters()  metadata : ',  metadata);
        olddebug=Debug;
        proxyprinttodiv('Function AddWidParameters()  all parms to addmaster : ',  {"dtolist":dtoList, "inputlist":inputList, "metadata": metadata});
        if (inputParametersObject["wid"]===undefined) {inputParametersObject["wid"]="";}
        var Wid = AddMaster(dtoList, inputList, inputParametersObject["wid"], metadata);

        proxyprinttodiv('Function AddWidParameters() came back from addmaster : ',  Wid);

        return Wid;
    }

    function AddMaster(dtoList, parameterList, widName, dtotype) {
        //Debug='true';
        // proxyprinttodiv('Function AddMaster : dtoList ', dtoList);
        // proxyprinttodiv('Function AddMaster : parameterList', parameterList);
        // proxyprinttodiv('Function AddMaster : widName ', widName);
        // proxyprinttodiv('Function AddMaster : dtotype', dtotype);
        proxyprinttodiv('Function AddMaster : inbound parms all ', {"dtolist":dtoList, "parameterList":parameterList, "widName":widName, "dtotype":dtotype});
        var ChildrenListobj = {}; // go through list of incoming parameters to generate a list of childrent dtos
        var dtoobject = listToObject(dtoList); // generate a copy of dtolist that is an object
        for (key in dtoobject) { // go through each parameter
            if ((dtoobject[key] == 'onetomany') || (dtoobject[key] == 'onetoone')) {
                // see if dto list tells us is a child
                ChildrenListobj[key] = dtoobject[key]; // add it to children object list
            }
        }
        proxyprinttodiv('Function AddMaster the childrent DTOs of this object: ChildrenListobj: ', ChildrenListobj);

        var ParentdtoList = dtoList; // now go through childrent list and delete from copy of incoming parameters
        var ParentList = parameterList; // anything related to these children

        for (currentparameter in ChildrenListobj) {
            ParentList = MatchDelete(ParentList, currentparameter);
            ParentdtoList = MatchDelete(ParentdtoList, currentparameter);
        }

        var ParentObject = {}; // add survivors -- that is the parent
        var ParentWid = '';

        ParentObject = MongoAddEditPrepare(ParentdtoList, ParentList, widName, dtotype);
        ParentWid = ParentObject["wid"];

        //olddebug=Debug;
        //Debug='true';

        var RelatedListParameters = SplitObjectList(parameterList, ParentList); // figure out what the left over parameters are
        RelatedListParameters = RelatedListParameters.nomatch;
        var RelatedListdto = SplitObjectList(dtoList, ParentdtoList);
        RelatedListdto = RelatedListdto.nomatch;
        proxyprinttodiv('Function AddMaster : RelatedListParameters, after adding parent, now add these children parameters', RelatedListParameters);
        proxyprinttodiv('Function AddMaster : RelatedListdto, , after adding parent, now add these children dto', RelatedListdto);

        var attrtype = "";							// onetoone we will search for only one realted (last), onetomany (all)
        var editflag = "";					// do we need to read (find out widnames) before add
        var attr = "";
        dtotype = "";
        var ParametersToAdd=[];
        var SplitParameters=[];
        var ChildrendtoList=[];
        var ChildWid='';
        var widtoadd='';
        var widlist = [];
        var parameterindexobj = {};
        var currentparameter='';
        var splitkey =''
        var currentNumber=0;
        var sortable=[];
        var currentitem='';
        var childrentype=''
        for(childrentype in ChildrenListobj) { 	// step through all direct children
            editflag='false';
            attr = ChildrenListobj[childrentype]; 	// onetoone or onetomany?  -left side of ChildrenListobj is the dto name
            proxyprinttodiv('Function AddMaster : process this child object childrentype + attr', childrentype+' '+attr);
            //proxyprinttodiv('Function AddMaster : attr', attr);
            //proxyprinttodiv('Function AddMaster : parameterindexobj', parameterindexobj);

            // this was moved insdie child

            //if (RelatedListParameters!==[]) {}
            parameterindexobj = {}; // create a list of (children) parameters that start with number
            for (currentcount in RelatedListParameters) {
                //proxyprinttodiv('Function AddMaster : currentcount', currentcount);
                currentparameter = RelatedListParameters[currentcount].key;
                //proxyprinttodiv('Function AddMaster : currentparameter', currentparameter);
                splitkey = currentparameter.split(".");
                //proxyprinttodiv('Function AddMaster : splitkey', splitkey);
                if (splitkey[0]==childrentype) {
                    currentNumber = 0;
                    if (splitkey[1]!==undefined) {currentNumber = Number(splitkey[1])};
                    //proxyprinttodiv('Function AddMaster : currentNumber', currentNumber);
                    if (currentNumber>=0) {
                        //proxyprinttodiv('Function AddMaster : currentNumber II ', currentNumber);
                        parameterindexobj[splitkey[1]] = splitkey[0];
                    }
                }
                //proxyprinttodiv('Function AddMaster : parameterindexobj, sorted, which children have dots ', parameterindexobj);
                //proxyprinttodiv('Function AddMaster : parameterindexobj I  ', parameterindexobj);
            }

            sortable=[];
            for (currentitem in parameterindexobj) {
                sortable.push([currentitem, parameterindexobj[currentitem]]);
            }
            proxyprinttodiv('Function AddMaster : parameterindexobj II  ', sortable);
            // code below added 10/2 sort parameterindexobj

            if (Object.keys(parameterindexobj).length !== 0) {
                sortable=sortable.sort(function(aObj, bObj) {
                    var a = getAttributeByIndex(aObj, 0);
                    var b = getAttributeByIndex(bObj, 0);
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                });
            }

            parameterindexobj=sortable;

            proxyprinttodiv('Function AddMaster : parameterindexobj, sorted, which children have dots ', parameterindexobj);

            // ** note there will be issues with sort


            if (Object.keys(parameterindexobj).length !== 0) {	// for this children, any parameters with number?
                editflag = 'true'					// if we had parameterindex, then edit must be true
            }

            //proxyprinttodiv('Function AddMaster : editflag', editflag);
            if (attr == 'onetoone') {
                editflag = 'true'; 					// onetoone is alway edit true
                attrtype = 'last';					// onetoone -- read last record
            }
            if (attr == 'onetomany') {
                attrtype = 'all'					// onetomany --- read all records
            }
            widlist = [];
            if (editflag == 'true') {				// edit means read wids before write -- to get wid names
                // get list of related wids
                var executeobject={};
                executeobject["mongowid"]=ParentWid;
                executeobject["mongorelationshiptype"]="attributes";
                executeobject["mongorelationshipmethod"]=attrtype;
                executeobject["mongorelationshipdirection"]="forward";
                executeobject["mongowidmethod"]=childrentype;
                executeobject["convertmethod"]="";
                executeobject["dtotype"]="";
                proxyprinttodiv('Function AddMaster()  executeobject III' , executeobject);
                executeobject["executethis"]=querywid;
                //var widlist=querywidlocal(executeobject);	 // **
                var widlist=executethis(executeobject,querywid);
                // **** 10-31
                //var widlist = simpleQuery(ParentWid, "attributes", attrtype, "forward", childrentype, "", "");
                proxyprinttodiv('Function AddMaster : widlist, these are the wids related to parent and current child', widlist);
            }

            // do children with numbers first

            SplitParameters = MatchPrefixDelete(RelatedListdto, childrentype);
            ChildrendtoList = SplitParameters.match;
            RelatedListdto = SplitParameters.nomatch;

            // save copy for next iteration
            proxyprinttodiv('Function AddMaster : ChildrendtoList - 111, parameters for current child', ChildrendtoList);
            proxyprinttodiv('Function AddMaster : RelatedListdto - 111, dto for current child, now determine if number or not A/B' , RelatedListdto);

            if (Object.keys(parameterindexobj).length !== 0) {
                for (var currentchild in parameterindexobj) {
                    proxyprinttodiv('Function AddMaster : childrenttype.currentchild - 222, process this number first, look up in widlist', childrentype+'.'+currentchild);
                    SplitParameters = MatchPrefixDelete(RelatedListParameters, childrentype+'.'+currentchild);	// separate parameters to those that start with curr number
                    ParametersToAdd = SplitParameters.match;
                    RelatedListParameters = SplitParameters.nomatch;		// each iteration relatedlistparameter will become smaller
                    //proxyprinttodiv('Function AddMaster : editflag', editflag);
                    //if (ParametersToAdd.length!==0) {		****
                    if (countKeys(ParametersToAdd)!==0) {
                        widtoadd='';
                        if ((editflag = 'true') && (widlist !== "")) {
                            if (widlist[currentchild]!==undefined) {   // removed -1
                                for (var widName in widlist[currentchild]) {  // removed -1
                                    widtoadd=widName;
                                }
                            }
                        }
                        proxyprinttodiv('Function AddMaster : ChildrendtoList - 222 wid+childdto A-', {"widtoadd":widtoadd, "ChildrendtoList":ChildrendtoList});
                        proxyprinttodiv('Function AddMaster : ParametersToAdd - 222, childdto+childparameters A- ', {"childrentype":childrentype, "ParametersToAdd": ParametersToAdd});
                        ChildWid = AddMaster(ChildrendtoList, ParametersToAdd, widtoadd, childrentype);
                        proxyprinttodiv('Function AddMaster : came back ChildWid -- 222, child added, now call addrelationship A-', ChildWid);
                        AddMongoRelationship(ParentWid, ChildWid, "attributes");
                        //proxyprinttodiv('Function AddMaster : came back add relationship -- 222', ChildWid);
                    }
                }
            }

            SplitParameters = MatchPrefixDelete(RelatedListParameters, childrentype); // split parameters based on childtype
            ParametersToAdd = SplitParameters.match;						// do right now
            RelatedListParameters = SplitParameters.nomatch;   				// do next iteration
            proxyprinttodiv('Function AddMaster : ParametersToAdd 333 parameters for current child B and not numbers', ParametersToAdd);
            proxyprinttodiv('Function AddMaster : RelatedListParameters 333 dto for current child B', RelatedListParameters);


            //if (ParametersToAdd!=='') {
            //if (ParametersToAdd.length!==0) {	***
            if (countKeys(ParametersToAdd)!==0) {
                widtoadd='';   // this is to catch onetoone case
                if ((attr=='onetoone') && (widlist!="")) {
                    if (widlist[0]!==undefined) {
                        for (var widName in widlist[0]) {
                            widtoadd=widName;
                        }
                    }
                }
                proxyprinttodiv('Function AddMaster : ChildrendtoList - 444 wid+childdto B- ', {"widtoadd":widtoadd, "ChildrendtoList":ChildrendtoList});
                proxyprinttodiv('Function AddMaster : ParametersToAdd - 444, childdto+childparameters B-', {"childrentype":childrentype, "ParametersToAdd": ParametersToAdd});
                ChildWid = AddMaster(ChildrendtoList, ParametersToAdd, widtoadd, childrentype);
                proxyprinttodiv('Function AddMaster : came back ChildWid -- 444, now call addrelationship B-', ChildWid);
                AddMongoRelationship(ParentWid, ChildWid, "attributes");
                //proxyprinttodiv('Function AddMaster : came back add relationship -- 444', ChildWid);

            }
        }
        return ParentWid
        //Debug=olddebug;
    }

// Adds a wid to the database and returns the parent wid (to demonstrate success?)  
// The DTOList and the inputList consist of an input list, index list, and original input list.


})(typeof window === "undefined" ? global : window);
