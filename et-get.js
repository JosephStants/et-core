
(function (window) {

    exports.getwid = getwid = function getwid(inputWidgetObject, callback) {
        delete inputWidgetObject['executethis'];// ** added by Saurabh 11/9

        proxyprinttodiv('Function getwid in : inputWidgetObject',  inputWidgetObject,1);
        var outobject = {};


        // getfrommongo(inputWidgetObject, function(results) {
        //     if (results) {
        //         if (results["data"]) { outobject = results["data"]; }

        //         if (results['wid']) { outobject['wid'] = results['wid']; }
        //         else { outobject['wid']=""; }

        //         if (results['metadata.method']) { outobject['metadata.method'] = results['metadata.method']; }
        //         else { outobject['metadata.method']=""; }

        //         callback(outobject);
        //     }
        // });

        getfrommongo(inputWidgetObject, function (results) {

            //var results = executethis(inputWidgetObject,getfrommongo);
            if (results && results["etstatus"]!="empty") {
                if (results["data"]) { outobject = results["data"]; }

                if (results['wid']) { outobject['wid'] = results['wid']; }
                else { outobject['wid']=""; }

                if (results['metadata.method']) { outobject['metadata.method'] = results['metadata.method']; }
                else { outobject['metadata.method']=""; }

            }
            callback(outobject);

        });
    };


// Starting of securityCheck function
// LM: I think this section is turned off and not used since it was breaking the code, but it 
// should be saved and implemented later
    function securitycheck(widParameter, accessToken){ // accountwid and transactionType for future use
        proxyprinttodiv('Function securityCheck() in : ', 'before' );
        return true;
        var widInput= { mongowid:widParameter, mongorelationshiptype:'attributes', mongorelationshipmethod:'last' , mongowidmethod:'dtotype', mongorelationshipdirection:'forward', convertmethod:'convertmethod'};
        var accessTokenInput= { wid:accessToken, mongorelationshiptype:'attributes', mongorelationshipmethod:'last' , mongowidmethod:'dtotype', mongorelationshipdirection:'forward', convertmethod:'convertmethod'};
        var widOutput=querywid(widInput);
        proxyprinttodiv('Function querywid() out with  output : ', widOutput );
        var accessTokenOutput=querywid(accessTokenInput);
        proxyprinttodiv('Function querywid() out with  output : ', accessTokenOutput );
        var securityCheckOutput = widOutput['security']>accessTokenOutput['security'];
        proxyprinttodiv('Function securityCheck() out with  output : ', securityCheckOutput );
        return securityCheckOutput;
    }// End of querywid function



exports.aggressivedto = window.aggressivedto = aggressivedto = function aggressivedto(widInput, preamble, level) { // returns a made up dto base on maximum number of relationships, etc
        //Debug='true';
        var moreDTOParameters={};
        var targetwid="";
        var nexttargetwid="";
        var nextpreamble="";
        var eachresult="";
        var key="";
        var rightparameters={};
        dtoGlobalParameters={};

        proxyprinttodiv('Function aggressivedto()  level' , level, 20);
        proxyprinttodiv('Function aggressivedto()  widInput' , widInput,20);
        proxyprinttodiv('Function aggressivedto()  preamble' , preamble,20);
        if (!level) {level=99} else {level = level - 1}; //how many levels to try

        if (preamble === undefined) {preamble = "";}
        if (preamble !="") {preamble = preamble + ".";}
        proxyprinttodiv('Function aggressivedto()  processed preamble' , preamble);

        var executeobject={};
        targetwid=widInput;
        //executeobject["executethis"]="getwid";
        executeobject["wid"]=widInput;
        proxyprinttodiv('Function aggressivedto()  executeobject I' , executeobject, 20);
        var parameterObject=executethis(executeobject,getwid);
        // ** 11-1
        //var parameterObject=getfrommongo({"wid":widInput});

        proxyprinttodiv('Function aggressivedto()  parameterObject I' , parameterObject,20);

        if ((parameterObject!==undefined) && (parameterObject['metadata.method'] != "") && (parameterObject['metadata.method'] != targetwid))  {
            targetwid=parameterObject['metadata.method'];
            executeobject={};
            //executeobject["executethis"]=getwid;
            executeobject["wid"]=targetwid;
            proxyprinttodiv('Function aggressivedto()  executeobject II' , executeobject);
            moreDTOParameters=executethis(executeobject,getwid);
            if (Object.keys(moreDTOParameters).length !=0) {parameterObject=jsonConcat(parameterObject, moreDTOParameters)}
            // ** 11-1
            //parameterObject=getfrommongo({"wid":targetwid});
            proxyprinttodiv('Function aggressivedto()  parameterObject II' , parameterObject,20);
        }

        //for (eachresult in parameterObject) {
        //  parameterObject[eachresult] = 'string';
        //  }
        proxyprinttodiv('Function aggressivedto()  parameterObject III' , parameterObject);
        proxyprinttodiv('Function aggressivedto()  targetwid' , targetwid);

        executeobject = {};
        executeobject["mongowid"] = targetwid;
        executeobject["mongorelationshiptype"] = "attributes";
        executeobject["mongorelationshipmethod"] = "all";
        executeobject["mongorelationshipdirection"] = "forward";
        executeobject["mongowidmethod"] = "";
        executeobject["convertmethod"] = "";
        executeobject["dtotype"] = "";
        executeobject["executethis"] = querywid;
        // executeobject["executethis"] = mongoquery; /// *** Change by Saurabh 12/11 for checking #402 error
        proxyprinttodiv('Function aggressivedto()  executeobject III' , executeobject,20);
        // it does NOT seem to like this:
        //moreDTOParameters = executethis(executeobject,execute);

        //it does NOT seem to like:
        //var x = window['execute'];
        //moreDTOParameters = executethis(executeobject,x);

        // did NOT like this:
        //executeobject["executethis"] = "querywid";
        //moreDTOParameters = executethis(executeobject,execute);

        // did NOT like:
        //var x = window['execute'];
        //executeobject["executethis"] = "querywid";
        //moreDTOParameters = executethis(executeobject,x);

        //it seems to like the two below--then it did not
        var x = window['querywid'];
        moreDTOParameters = executethis(executeobject,x);

        //it seems to like the two below:
        //var x = window['querywidlocal'];
        //moreDTOParameters = executethis(executeobject,x);

        //it seems to like the two below:-- not any more
        //var x = window['mongoquery'];
        //moreDTOParameters = executethis(executeobject,x);

        proxyprinttodiv('Function aggressivedto()  moreDTOParameters' , moreDTOParameters, 20);
        //moreDTOParameters = querywidlocal(executeobject);
        //****** 100-31 also querywidlocal<>mongoquery

        //moreDTOParameters = simpleQuery(targetwid, "attributes", "all", "forward", "", "", "");

        for (eachresult in moreDTOParameters) {
            rightparameters={};
            for (key in moreDTOParameters[eachresult]) {
                rightparameters=moreDTOParameters[eachresult][key];
            }
            proxyprinttodiv('Function getWidMongo() left- ', key, 20);
            proxyprinttodiv('Function getWidMongo() right ', rightparameters, 20);

            // from dto create outgoing object
            if (moreDTOParameters[key]) {
                parameterObject[key]=moreDTOParameters[key]
            }

            proxyprinttodiv('Function aggressivedto()  parameterObject V' , parameterObject, 20);
            proxyprinttodiv('Function aggressivedto()  key key' , key, 20);
            if (level > 0) {parameterObject = jsonConcat(parameterObject, aggressivedto(key, key, level))};
        }

        var dtoGlobalParameters={};
        for (eachresult in parameterObject) {
            dtoGlobalParameters[preamble + eachresult] = parameterObject[eachresult];
        }
        //** added 11/12
        //delete dtoGlobalParameters['wid'];
        //delete dtoGlobalParameters['metadata.method'];
        proxyprinttodiv('Function aggressivedto()  dtoGlobalParameters' , dtoGlobalParameters, 20);
        //Debug='false';
        return dtoGlobalParameters
    }


    function getcleanparameters(resultObj, dtotype, accesstoken, cleanmethod, convertmethod) {
        proxyprinttodiv('Function getcleanparameteres() resultObj' , resultObj,83);
        proxyprinttodiv('Function getcleanparameteres()  dtotype' , dtotype,83);
        proxyprinttodiv('Function getcleanparameteres()  accesstoken' , accesstoken);
        proxyprinttodiv('Function getcleanparameteres()  convertmethod' , convertmethod,83);
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

        // goal of this section is to get inherited parameters
        if (
            ((resultObj['wid']!==undefined)) &&
                ((resultObj['wid']!==resultObj['metadata.method']) || (dtotype="defaultdto"))
            )
        {
            dtoobject=aggressivedto(resultObj['wid'],"",10);
            proxyprinttodiv('Function getcleanparameteres()  aggressivedto ' , dtoobject, 83);
            proxyprinttodiv('Function getcleanparameteres()  resultObj ' , resultObj,83);

            for (item in dtoobject) {
                preamble="";
                proposedLeft=item;
                proposedRight=dtoobject[item];

                if (proposedRight == 'inherit') {

                    dtoloc=proposedLeft.lastIndexOf(".");
                    if (dtoloc!=-1) {
                        preamble=proposedLeft.substring(0 ,dtoloc);
                        proposedLeft=proposedLeft.substring(dtoloc+1, proposedLeft.length);
                    }
                    executeobject={};
                    //executeobject["executethis"]=getwidmaster;
                    executeobject["command.convertmethod"]="nowid";
                    //executeobject["executethis"]=getwid;
                    executeobject["wid"]=proposedLeft;
                    //moreParameters=executethis(executeobject,execute);
                    moreParameters=executethis(executeobject,getwidmaster);
                    proxyprinttodiv('Function getcleanparameteres()  moreParameters----' , moreParameters,83);
                    for (eafield in moreParameters) {
                        if (preamble=="") {
                            resultObj[eafield]=moreParameters[eafield];
                        }
                        else {
                            resultObj[preamble+'.'+eafield]=moreParameters[eafield];
                        }
                    }


                    proxyprinttodiv('Function getcleanparameteres()  after each inherit' , resultObj,83);
                }
            }
        }
        proxyprinttodiv('Function getcleanparameteres()  after overall inherit' , resultObj,83);
        // read dto -- and delete what should not surive

        //childdto=dtotype;
        if (dtotype=="") {dtotype=resultObj["metadata.method"]};

        if (resultObj["metadata.method"] != dtotype) {

            for (item in resultObj) {  // now step through each record that could be changed
                proposedLeft=item;
                proposedRight=resultObj[item];
                // taken out 11-5
                //if ((item!='wid') && (item!='metadata.method')) {
                proxyprinttodiv('Function getcleanparameteres()  item' , item, 84);
                proposedLeft=""; // work on left first...check if add or remvove

                //dtoloc=item.indexOf(childdto+".");
                dtoloc=item.indexOf(dtotype+".");
                proxyprinttodiv('Function getcleanparameteres()  dtoloc' , dtoloc);
                if (dtoloc!=-1) {
                    proposedLeft=item.substring(dtoloc+dtotype.length+3 ,item.length);
                    // assume record looks like this authordto.booksdto.0.name
                    // if dtotype = booksdto default will convert that to name
                    // dtonum to booksdto.0.name
                    // num to 0.name
                    if (convertmethod=="dtonum") {
                        proposedLeft=item.substring(dtoloc ,item.length);
                    }
                    if (convertmethod=="num") {
                        proposedLeft=item.substring(dtoloc+dtotype.length+1 ,item.length);
                    }
                }

                // remove addthis from the results if it was getwidmaster
                dtoloc=item.indexOf("addthis.");
                proposedLeft=proposedLeft.replace("addthis.","");

                proxyprinttodiv('Function getcleanparameteres()  proposedLeft' , proposedLeft,84);
                proxyprinttodiv('Function getcleanparameteres()  proposedRight' , proposedRight,84);
                if (proposedLeft!="") {outputparameters[proposedLeft]=proposedRight}
                proxyprinttodiv('Function getcleanparameteres()  outputparameters' , outputparameters,84);
            }
        }

        else { // if resultObj["metadata.method"] = dtotype)
            outputparameters=resultObj;

        }

        proxyprinttodiv('Function getcleanparameteres() resultObj end end end' , resultObj,83);
        proxyprinttodiv('Function getcleanparameteres()  dtotype end end end' , dtotype,83);
        proxyprinttodiv('Function getcleanparameteres()  convertmethod end end end ' , convertmethod,83);
        proxyprinttodiv('Function getcleanparameteres()  outputparameters end end end ' , outputparameters, 83);
        proxyprinttodiv('Function getcleanparameteres()  dtoobject end end end' , dtoobject, 83);
        return {
            parms : outputparameters,
            dto : dtoobject
        };
    }


    exports.getwidmaster =  getwidmaster = function getwidmaster(parameters, callback){
        proxyprinttodiv('Function getwidmaster() incoming parameters, now go to getwidmasterLevel I ' , parameters, 10);
        parameters = tolowerparameters(parameters, {'wid':'add', 'metadata.method':'add', 'command.dtotype':'add', 'command.convertmethod':'add', 'command.checkflag':'add', 'command.inherit':'add', 'command.accesstoken':'add'});

        delete parameters['executethis']; //** added 11/2
        proxyprinttodiv('Function getwidmaster() incoming parameters, now go to getwidmasterLevel ' , parameters, 10);

        var wid = parameters.wid;
//  var resultObj = {};
        proxyprinttodiv('Function getwidmasterLevel() incoming parameters, to getWidMongo' , parameters,10);

        var dtotype=parameters["command.dtotype"];
        var inherit=parameters["command.inherit"];
        var accesstoken=parameters["command.accesstoken"];
        var checkflag=parameters["command.checkflag"];
        var convertMethod=parameters["command.convertmethod"];
        var resultObj = {};

        proxyprinttodiv('Function getwidmasterLevel() wid ' , wid,10);

        resultObj = getWidMongo(wid, convertMethod, accesstoken, dtotype);

        proxyprinttodiv('Function getwidmasterLevel() first get ' , resultObj,10);

// could be moved inside clean parm?
        if(inherit) { // inherit points to wid with more datan- Grab the params from mongo(local storage)
            executeobject={};
            executeobject["executethis"]=getwid;
            executeobject["wid"]=inherit;
            moreParameters=executethis(executeobject,getwid);
            //moreParameters = getfrommongo({'wid':inherit}); // if we find some, add them to the return object
            if(moreParameters) {
                resultObj = jsonConcat(resultObj, moreParameters);  // if duplicates then currentLevelObject{} wins
            }
        }

        if (checkflag!="") { // see if right side of output needs to be made mongo compatible
            dtoList=objectToList(dtoGlobalParameters);
            resultList = objectToList(resultObj);
            resultList = CleanBasedOnCheckflagList(checkflag, resultList, dtoList);
            resultObj = listToObject(resultList);
        }

        olddebug=Debug;
//  Debug=olddebug;
        proxyprinttodiv('Function getwidmasterLevel() ** before ' , resultObj,10);
        //if (Object.keys(resultObj).length !== 0) {
        if ((Object.keys(resultObj).length !== 0) && (resultObj['wid']!=resultObj['metadata.method'])) {
            resultObj=getcleanparameters(resultObj, dtotype, accesstoken, "remove", convertMethod);
            resultObj=resultObj.parms
        }
        //resultObj=resultObj.parms || {};   // ************

        proxyprinttodiv('Function getwidmasterLevel() ** after ' , resultObj,10);
        if ((convertMethod=="nowid") || (convertMethod=="dto")) { //(convertMethod=="nowid") { -- added 11/12 **
            delete resultObj["wid"];
            delete resultObj["metadata.method"];
        }

        if (convertMethod == "toobject") { resultObj = ConvertFromDOTdri(resultObj); }

//  Debug=olddebug;

        if(callback instanceof Function) { callback(resultObj); }
        else { return resultObj; }
    }


    function getWidMongo(widInput, convertMethod, accessToken, dtoin) {

        var olddebug=Debug;
//Debug=olddebug;
        proxyprinttodiv('Function getWidMongo() in widInput: ', widInput);
        proxyprinttodiv('Function getWidMongo() convertmethod', convertMethod);

        if (!widInput) {
            return;
        }
        var dtoGlobalParameters = {};
        var attr = "";
        var nextLevelParameters = {};
        var outgoingParameters = {};
        var moreDTOParameters = {};
        var moreParameters = {};
        var currentLevelObjectList = [];
        var dtoGlobalParametersList = [];
        var addedobject = {};
        var eachresult = "";
        var createdto ='false';
        var createrelationships = 'false';
        var savedto = 'false';
        var createid = widInput;
        var dtotype = "";

        var executeobject={};

        //executeobject["executethis"]=getwid;
        executeobject["wid"]=widInput;
        //Debug='true';
        proxyprinttodiv('Function getWidMongo()  executeobject' , executeobject);
        //var x = window['execute'];
        //var currentLevelObject=executethis(executeobject,execute);
        var currentLevelObject=executethis(executeobject,getwid);

        //var currentLevelObject = getfrommongo({'wid': widInput});
        // ++++ calling getwid is good calling it through execute not
        proxyprinttodiv('Function getWidMongo() currentLevelObject ++++++ top level object ', currentLevelObject,10);
        //Debug='false';
        // if dtotype not sent in, then figure it out -- dto type will be blank at all 1+ levels
        // first choide for dto is its method
        if ((currentLevelObject["metadata.method"]!==undefined) &&
            (currentLevelObject["metadata.method"]!=="")) {
            dtotype=currentLevelObject["metadata.method"];
            // Get the wid from mongo(local storage)
            executeobject={};
            //executeobject["executethis"]=getwid;
            executeobject["wid"]=dtotype;
            //dtoGlobalParameters=executethis(executeobject,execute);
            dtoGlobalParameters=executethis(executeobject,getwid);
            console.log(dtoGlobalParameters);
            proxyprinttodiv('Function getWidMongo() dtoGlobalParameters -- 111', dtoGlobalParameters,10);

            //dtoGlobalParameters = getFromMongo({'wid':dtotype});
        }
        proxyprinttodiv('Function getWidMongo() dtoGlobalParameters isEmpty', (isEmpty(dtoGlobalParameters)));
//  if (Object.keys(dtoGlobalParameters).length === 0) {
//  if (isEmpty(dtoGlobalParameters)) {
        //if (dtotype!="") {createid=dtotype}
        //dtotype='defaultdto'
        // executeobject={};
        // executeobject["mongowid"]=widInput;
        // executeobject["mongorelationshiptype"]="attributes";
        // executeobject["mongorelationshipmethod"]="all";
        // executeobject["mongorelationshipdirection"]="forward";
        // executeobject["mongowidmethod"]="";
        // executeobject["convertmethod"]="";
        // executeobject["dtotype"]="";
        // executeobject["executethis"]=querywid;
        // proxyprinttodiv('Function getWidMongo()  executeobject III' , executeobject);
        // //moreDTOParameters=querywidlocal(executeobject);    // ** mongoquery
        // proxyprinttodiv('Function getWidMongo()  executeobject III-result' , moreDTOParameters);
        // moreDTOParameters=executethis(executeobject,execute);
        // //*****10-31
        // //moreDTOParameters = simpleQuery(widInput, "attributes", "all", "forward", "", "", "");
        // for (eachresult in moreDTOParameters) {
        //  for (key in moreDTOParameters[eachresult]) {
        //      proxyprinttodiv('Function getWidMongo()eachresult[0] ',key);
        //      //dtoGlobalParameters[key] = 'onetomany'
        //      moreParameters[key] = 'onetomany'
        //      }
        //  }
        // for (eachresult in currentLevelObject) {
        //  //dtoGlobalParameters[eachresult] = 'string'
        //  moreParameters[eachresult] = 'string'
        //  }

        proxyprinttodiv('Function getWidMongo() widInput ', widInput,10);
        moreParameters=aggressivedto(widInput,"",1);
        proxyprinttodiv('Function getWidMongo() moreParameters ', moreParameters,10);
        //if ((isEmpty(dtoGlobalParameters)) || (dtoin=="defaultdto")) {
        if ((dtoGlobalParameters['metadata.method']=="") || (dtoin=="defaultdto")) {
            dtoGlobalParameters=moreParameters
        }

        //}

        proxyprinttodiv('Function getWidMongo() dtoGlobalParameters IV ', dtoGlobalParameters);

        currentLevelObjectList = objectToList(currentLevelObject);
        dtoGlobalParametersList = objectToList(dtoGlobalParameters);


        proxyprinttodiv('Function getWidMongo() dtoGlobalParameters near start', dtoGlobalParameters);
        proxyprinttodiv('Function getWidMongo() currentLevelObject II ', currentLevelObject,10);

        currentLevelObjectList = SplitObjectList(currentLevelObjectList, dtoGlobalParametersList);
        currentLevelObjectList = currentLevelObjectList.match;
        currentLevelObject = listToObject(currentLevelObjectList);

        proxyprinttodiv('Function getWidMongo() currentLevelObject ----about to start relationships----', currentLevelObject,10);


        outgoingParameters=currentLevelObject;

        dtoGlobalParameters=moreParameters; // line added 11-9 -- step through an agressive dto

        for (var item in dtoGlobalParameters) {
            proxyprinttodiv('Function getWidMongo() step through dto ', (item + ' ' + dtoGlobalParameters[item]),10);
            nextLevelParameters = {};
            attr = dtoGlobalParameters[item];
            if ((attr == "onetoone")  || (attr == "onetomany")) { // 10-24 || (attr == "inherit"))  {
                if (attr == "onetoone") { // if dto states 'onetoone' then search for related records that match property
                    nextLevelParameters = getAndFormatNextLevel(widInput, "attributes", "last", "forward", item, convertMethod, accessToken, dtoin); // removed inherit dtoGlobalParameters
                } // 10-5 took away dtotype --
                if (attr == "onetomany") { // if dto states 'onetomany' then search for related records that match property
                    nextLevelParameters = getAndFormatNextLevel(widInput, "attributes", "all", "forward", item, convertMethod, accessToken, dtoin); //removed dtoGlobalParameters
                } // 11-9 readded inherit from cleanparms here:
                // if ((attr == "inherit") && (convertMethod != 'dto')) {
                //              executeobject={};
                //              executeobject["executethis"]="getwidmaster"; // changed from getwidmaster
                //              executeobject["wid"]=item;
                //              executeobject["command.convertmethod"]="nowid";
                //              var x = window['execute'];
                //              nextLevelParameters=executethis(executeobject,x);
                //              proxyprinttodiv('Function getWidMongo nextLevelParameters - inherit', nextLevelParameters,1);
                //              }
                //  nextLevelParameters = getwidmaster({'wid':item, 'command.convertmethod':'nowid'});
                //  };
                // 11-15 line below commented
                //if (nextLevelParameters=="") {AddMongoRelationship(widInput,item,"attributes");} // if DTO existed, but no relationship at place hoder
                proxyprinttodiv('Function getWidMongo() came back from getAndFormatNextLevel, nextLevelParameters= ', nextLevelParameters);
                proxyprinttodiv('Function getWidMongo() step through dto ', (item+' '+dtoGlobalParameters[item]));
                outgoingParameters = jsonConcat(outgoingParameters, nextLevelParameters);
                proxyprinttodiv('Function getWidMongo() outgoingParameters ', outgoingParameters);
            } // if
            //proxyprinttodiv('Function getWidMongo() outgoingParameters ', outgoingParameters);
        } // for
        proxyprinttodiv('Function getWidMongo() end of relationsips---------------- : ', outgoingParameters);
        Debug=olddebug;
        return outgoingParameters
    }

// Starting of getAndFormatNextLevel function
    function getAndFormatNextLevel(widInput, mongorelationshiptype, mongorelationshipmethod, mongorelationshipdirection, mongowidmethod, convertmethod, accesstoken, dtoin) {

        proxyprinttodiv('Function getAndFormatNextLevel() arriving widInput', widInput,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongowidmethod', mongowidmethod,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : convertmethod', convertmethod,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : dtoin', dtoin,11);
        proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongorelationshipmethod', mongorelationshipmethod,11);

        var executeobject={};
        executeobject["mongowid"]=widInput;
        executeobject["mongorelationshiptype"]=mongorelationshiptype;
        executeobject["mongorelationshipmethod"]=mongorelationshipmethod;
        executeobject["mongorelationshipdirection"]=mongorelationshipdirection;
        executeobject["mongowidmethod"]=mongowidmethod;
        executeobject["convertmethod"]=convertmethod;
        executeobject["dtotype"]="";
        executeobject["executethis"]=querywid;
        proxyprinttodiv('Function getAndFormatNextLevel()  executeobject III' , executeobject);
        //var relatedParameters=querywidlocal(executeobject); //
        //var relatedParameters=executethis(executeobject,execute);
        var relatedParameters=executethis(executeobject,querywid);
        // ***** 10-31
        //var relatedParameters = simpleQuery(widInput, mongorelationshiptype, mongorelationshipmethod, mongorelationshipdirection, mongowidmethod, convertmethod, ""); // removed dto type from end
        var drillDownParameters = {};
        var rowresult = ""
        var nextLevelParameters = [];
        var nextLevelParametersObject = {};
        var proposedLeft = "";
        var proposedRight = "";
        var item = "";
        var iteration = 0

        proxyprinttodiv('Function getAndFormatNextLevel() in : relatedParameters  after simpleQuery++++ starting related ++++', relatedParameters,11);
        // proxyprinttodiv('-------Function getAndFormatNextLevel() in : relatedParameters.length', relatedParameters.length);

        if (Object.keys(relatedParameters).length == 0) {return nextLevelParametersObject};
        //if (relatedParameters == "") {
        //  return;
        //}

        //for (var rowresult in relatedParameters) { // for this iteration: wid1: {a:b, c:d}
//  for(iteration = 0 ; (iteration< relatedParameters.length ) ; iteration++ ) {
        for(iteration = 0 ; (iteration< countKeys(relatedParameters)) ; iteration++ ) {
            rowresult=relatedParameters[iteration];

            proxyprinttodiv('Function getAndFormatNextLevel() in : iteration in going through results from simpleQuery', iteration,11);
            //proxyprinttodiv('Function getAndFormatNextLevel() in : current row', rowresult);

            //var rowObject = relatedParameters[rowresult];
            //for (item in rowObject) {
            //  var proposedLeft = item;
            //  var proposedRight = rowObject[item];
            //}
            for (key in rowresult) {
                proposedLeft = key;
                proposedRight = rowresult[key];
            }

            //iteration++; // proposedRight = {a:b, c:d}



            // LM: Found commented. Should delete?
            // ************
            //if (dtotype == 'onetomany') {
            //  proposedLeft == proposedLeft + "<" + iteration + ">"; // if dtotype=x then proposedLeft x<1>
            //}

            //if (convertmethod = "" && relatedParameters.length == 1) {
            //  proposedLeft = dtotype; // proposedLeft=x if only one related and convertmethod="" -- change it to just widdto
            //}
            // ************
            //var proposedObject ={};

            if (convertmethod == "wid") {

                //proxyprinttodiv('Function getAndFormatNextLevel() convertmethod', convertmethod);
                //proposedRight = item; // proposedRight = wid1
                //proxyprinttodiv('Function getAndFormatNextLevel() item', proposedRight);
                //proposedObject[mongowidmethod] = proposedLeft;
                //nextLevelParameters.push({"key":proposedLeft,"value":proposedRight}); // NextLevelParameters =  x<1>: wid1

                nextLevelParameters.push({"key":mongowidmethod,"value":proposedLeft});

                //      proxyprinttodiv('----------Function getAndFormatNextLevel() proposed wid object', proposedObject);

            }
            //alert(convertmethod);
            if (convertmethod == "json") {

                //proposedObject[proposedLeft] = proposedRight;
                //nextLevelParameters.push({"key":proposedLeft,"value":proposedRight}); // NextLevelParameters =  x<1>: {a:b, c:d}

                nextLevelParameters.push({"key":mongowidmethod,"value":JSON.stringify(proposedRight)});

                //      proxyprinttodiv('----------Function getAndFormatNextLevel() proposed json object', proposedObject);

            }

            if ((convertmethod == "") || (convertmethod == "dto") || (convertmethod == "toobject") ||
                (convertmethod == "num") || (convertmethod == "dtonum")) {
                proxyprinttodiv('Function getAndFormatNextLevel() in convertmethod=blank, about to get drilldown: ', proposedLeft, 11);
                drillDownParameters = getWidMongo(proposedLeft, convertmethod, accesstoken, dtoin); //dtoGlobalParameters, mongowidmethod);
                proxyprinttodiv('Function getAndFormatNextLevel() after drillDown object: ', drillDownParameters, 11);
                //proxyprinttodiv('----------Function getAndFormatNextLevel() mongowidmethod: ', mongowidmethod);
                proxyprinttodiv('Function getAndFormatNextLevel() arriving widInput II', widInput, 11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongowidmethod II', mongowidmethod, 11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : convertmethod II', convertmethod, 11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : dtoin II', dtoin, 11);
                proxyprinttodiv('-------Function getAndFormatNextLevel() in : mongorelationshipmethod II', mongorelationshipmethod, 11);
                proxyprinttodiv('Function getAndFormatNextLevel() in : proposedLeft II', proposedLeft, 11);
                proxyprinttodiv('Function getAndFormatNextLevel() in : proposedRight II', proposedRight, 11);

                for(item in drillDownParameters) {
                    // LM: original line
                    if ((convertmethod == "dto") && ((item=="wid") || (item=="metadata.method"))) {
                    } // left empty by design
                    // ** do we need to replicate at top level?
                    else {

                        proposedLeft = mongowidmethod + "." + String(iteration) + "." + item;  // removed +1
//                  if ((convertmethod == "dto") && (relatedParameters.length == 1)) { 

                        // added 11-18
                        proxyprinttodiv('Function getAndFormatNextLevel() mongorelationshipmethod', mongorelationshipmethod,11);
                        if (((convertmethod == "dto") && (countKeys(relatedParameters) == 1)) ||
                            (mongorelationshipmethod=="last")) {
                            //if ((convertmethod == "dto") && (countKeys(relatedParameters) == 1)) {
                            proposedLeft = mongowidmethod+"."+item;
                        }
                        // this should not put brackets if only one child

                        proposedRight = drillDownParameters[item];

                    }
                    //proxyprinttodiv('Function getAndFormatNextLevel() in : proposedLeft - drilldown loop', proposedLeft);
                    //proxyprinttodiv('Function getAndFormatNextLevel() in : proposedRight - drilldown loop', proposedRight);

                    nextLevelParameters.push({"key":proposedLeft,"value":proposedRight});

                    proxyprinttodiv('Function getAndFormatNextLevel() forloop nextLevelParameters as it grows', nextLevelParameters,11);
                    //proxyprinttodiv('Function getAndFormatNextLevel() drillDown aftr dot: ', drillDownParameters);
                    //proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParameters after dot : ', nextLevelParameters);
                    //nextLevelParameters = jsonConcat(nextLevelParameters, drillDownParameters);
                    //proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParameters after concat : ', nextLevelParameters);
                }
            }

            //proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParameters list result : ', nextLevelParameters);
        }
        nextLevelParametersObject=listToObject(nextLevelParameters);

        proxyprinttodiv('Function getAndFormatNextLevel() nextLevelParametersObject +++++++finishing realted : ', nextLevelParametersObject,11);

        return nextLevelParametersObject;
    }


})(typeof window === "undefined" ? global : window);
