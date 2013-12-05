// executethis is a synchronous function that calls execute
// execute is the asynchronous version  has an etbypass option
// executelist executes list (howToDoList and whatToDoList).  It accepts a structure as in config
// 
// dothis creates a howToDoList, whatToDoList based on a target function, stored and sent in configuration.  Then calls executelist
// 
// getexecuteobject returns the status of a howtodo whatToDo combination
//
// config params
// config dofn
// 

(function (window) {
    // 'use strict';
    
    var execute
      , executethis;

    // add test ****
    // execute method --- method called numbered (1)
    exports.execute = window.execute = execute = function execute(incomingparams, callback) {
        console.log('arrived in execute ' + incomingparams);
        incomingparams = toLowerKeys(incomingparams);

        proxyprinttodiv("execute - inboundparms",incomingparams,11);
        proxyprinttodiv("execute - callback fn ",String(callback),11);


        console.log(' *** test2  '+ JSON.stringify(incomingparams));
        if ((incomingparams !== undefined) && (incomingparams["executethis"] === "test2")) {
            callback({'test2':'Reached test2 code.. execute function'});
        }
        else { 
            if ((incomingparams !== undefined) && (incomingparams['etbypass'])) {
                proxyprinttodiv("execute - etbypass incomingparams",incomingparams,11);
                // var executeFn = window[incomingparams["executethis"]];
                // var result = executethis(incomingparams, x);
                // proxyprinttodiv("execute - etbypass result",result,11);
                // callback(result)

                var x = undefined;          
                if(incomingparams["executethis"]){
                    if (incomingparams["executethis"] instanceof Function) {
                        x = incomingparams["executethis"];
                    } else {
                        x = window[incomingparams["executethis"]];
                    }
                    result = executethis(incomingparams, x);
                }else{
                    result = incomingparams;
                }
                callback(result);
            }
            else {

                incomingparams['midexecute'] = incomingparams['executethis'];            
                delete incomingparams['executethis'];
                console.log('starting preexecute ' + incomingparams);
                doThis(incomingparams, 'preexecute', function (preResults) {

                    console.log(' after preexecute >> '+ nonCircularStringify(preResults));
                    console.log('starting midexecute ' + preResults);
                    if(!preResults){preResults={};} // 
                    doThis(preResults, 'midexecute', function (midResults) {

                        console.log(' after midexecute >> ' + nonCircularStringify(midResults));
                        if(!midResults){midResults={};}
                        doThis(midResults, 'postexecute', function (postResults) {

                            console.log(' after postexecute >> ' + nonCircularStringify(postResults));
                            if(!postResults){postResults={};} 
                            callback(postResults);
                        });
                    });
                });
            }
        }
    };

    /// executethis is a function router that will return result synchronously
    /// 1st argument -- input parameters, 2nd parameter -- callback function
    /// second parameter must be a function, if not sent in will be defaulted to 'execute'
    /// if the function to be called has only one input object then this fn will wait for results (act asynch)
    exports.executethis = window.executethis = executethis = function executethis(inboundparms, targetfunction) {

        // if test1 ***
        if ((inboundparms !== undefined) && (inboundparms["executethis"] === "test1")) {
            return {'test1':'Reached test1 code.. executethis function'};
        }
        else {
        //console.log(' >>>> executethis function from executethis before calling execute with parameters >>> ' + nonCircularStringify(inboundparms));
        if (!targetfunction || !targetfunction instanceof Function) { targetfunction = execute; }

        var params = toLowerKeys(inboundparms)
            , argCount = 0

        proxyprinttodiv('Function executethis params',  params,11);
        proxyprinttodiv('Function executethis fn', targetfunction.name,11);
        proxyprinttodiv('Function executethis length', targetfunction.length,11);
        console.log('targetfunction length => ' + targetfunction.length);
        if (targetfunction.length !== undefined) { argCount = targetfunction.length; }

            if (argCount == 1) {
                return targetfunction (params); // if targetfn has only one parameter then fn is synchronous
            }

            else if (argCount > 1) {
                var retResult = undefined
                    , funcDone = false
                    , funcCalled = false
                    , count = 0;

                while (!funcDone) {
                    if(!funcCalled) {
                        funcCalled = true;
                        targetfunction(params, function (results) {
                            funcDone = true;
                            retResult = results;
                        });
                    }
                    count++
                    if (count>100){funcDone=true}
                }

                if (retResult === undefined){ retResult={}; }
                if (retResult["etstatus"]=="empty") {retResult={}}
                return retResult;
            }
        }
    };

    function doThis(params, target, callback) {
        var whatToDoList,
            howToDoList,
            targetname,
            targetfunction;

        proxyprinttodiv("dothis - inboundparms", params, 11);
        proxyprinttodiv("dothis - target ", target, 11);
        proxyprinttodiv("dothis - callback ", String(callback), 11);

        if (params["midexecute"] === "test4") {         // for debug purposes
            callback({'test4':'Reached test4 code.. doThis function '});
        }

        else {
            // Before we try to load our config we need to see if there is something to do
            // so we check to see if there is something on the right hand side for the target (pre, mid, post)
            if (params[target] !== undefined) {

                // it is possible the function sent in a string or an actual function...we need to convert to string for config lookup
                if (params[target] instanceof Function) { 
                    targetname = params[target].name;   // get the targetname
                    targetfunction = params[target];    // get targetfunction (whole function)
                    }  // function was passed in
                    else { 
                    targetname = params[target];             // get the targetname 
                    targetfunction = window[params[target]]; // get targetfunction (whole function)
                    }  // function name was passed in as string

                howToDoList = CreateDoList(params, target, targetfunction);       // generate list based on pre, mid, post
                proxyprinttodiv("dothis - howToDoList ", howToDoList, 11);
                whatToDoList =  CreateDoList(params, targetname, targetfunction); // generate list based on fn name
                proxyprinttodiv("dothis - whatToDoList ", whatToDoList, 11);
                executelist(howToDoList, whatToDoList, callback);                 // execute list

            } // params[target] undefined
            else { // execute the nextstage (mid or post), may need to remove target out of params
                callback(params);
            }
        } // else not test4
    } // fn

    function CreateDoList(params, configtarget, configfn) {
        var paramsobject={};
        // based on a target fn and params this fn will create a sorted list of what to do -- params will be in list
        var config0 = toLowerKeys(config.configuration); // config0 is working copy of current configuration

        if ((params === undefined) || (params==="")) {params={}};
        
        if (params['configuration'] !== undefined){
            var incomingConfig = params['configuration'][configtarget]; // get send in config
            proxyprinttodiv("CreateDoList - incomingConfig ", incomingConfig, 11);
        }

        if (incomingConfig) {
            incomingConfig = toLowerKeys(incomingConfig);

            if (typeof config0[configtarget] !== 'object') {
                config0[configtarget] = {};   
            }

            config0[configtarget] = incomingConfig;   // incomingConfig[target];  // load override 
            paramsobject = incomingConfig['params'];  // get extra parameters from incoming params config
            params = jsonconcat(params,paramsobject); // join them with existing parameters
            paramsobject = config0[target]['params']; // get extra parameters from config
            params = jsonconcat(params,paramsobject); // join them with existing parameters
                        // delete from parameters configtarget
        }

        if (config0[configtarget] !== undefined) {
            config0[configtarget].params = params; // save distiled parameters back to list
            delete params[configtarget]; // in example deletes midexecute : <something>
        }


        proxyprinttodiv("CreateDoList - config0 ", config0, 11);

        var list = config0[configtarget];
        if (list != undefined && list.length > 1) {
            list = list.sort(function (a, b) {
                if ( a.executeorder > b.executeorder )
                    return 1;
                else if ( a.executeorder < b.executeorder)
                    return -1;
                else if ( a.tryorder > b.tryorder )
                    return 1;
                else if ( a.tryorder < b.tryorder)
                    return -1;
                else
                    return 0;
            });
        }
        if ((list === undefined) || (list === "")) { // would be always true --> || (list != "")) { // if list empty then make up a default record
            if ((configtarget=="preexecute") || (configtarget=="midexecute") || (configtarget=="postexecute")) {
                configtarget="executeFn"; // default if howtodo config missing
                }
            list = [];   // if no list so far then make a list so there is something to execute
            list[0] = {};
            list[0].executeorder = 0;
            list[0].tryorder = 0;
            list[0].params = params;
            list[0].dothis = configtarget;
            list[0].dofn = configfn;
            }
        // On a remap we may not have loaded a doFn try it now
        if((configtarget !== "preexecute") && (configtarget !=="midexecute") && (configtarget !=="postexecute")) {
            if(list[0].dofn === undefined) {
                configtarget = list[0].dothis;
                configfn = window[configtarget];
                list[0].dofn = configfn;
                // load the params in 
                if((params !== undefined) && (list[0].params !== undefined)) {
                    list[0].params = jsonConcat(params, list[0].params);
                }
            }
        }

        proxyprinttodiv("CreateDoList - list ", list, 11);
        return list;
    }

    function executelist(howToDoList, whatToDoList, callback) {
        var 
        h,
        w,
        cb, 
        whatToDo,
        whatToDoFn,
        howToDo,
        params,
        executeobject,
        targetfn,
        foundfn,
        synchflag; 

        // iterate over our how to do list
        proxyprinttodiv("executelist - howToDoList ",howToDoList,11);
        proxyprinttodiv("executelist - whatToDoList ",whatToDoList,11);

        for (h in howToDoList) { // go through each item in how list
            proxyprinttodiv("dothis - h ",h,11);
            howToDo = howToDoList[h]['dothis']; // get specific howToDo from list
            params = howToDoList[h]['params']; // get params that were stored
            proxyprinttodiv("executelist params ",params,11);
            proxyprinttodiv("executelist howToDo ",howToDo,11);

            for (w in whatToDoList) { // step through whatlist
                whatToDo = whatToDoList[w]['dothis']; // get specific whattodo

                whatToDoFn = whatToDoList[w]['dofn'];
                if((params !== undefined) && (whatToDoList !== undefined)) {
                    params = jsonConcat(params, whatToDoList[w]['params']); // concatenate with other pararms
                } 
                else if(whatToDoList[w]['params'] !== undefined) { // if we cannot concat the params see if there are some params in the what to do list to load
                    params = whatToDoList[w]['params'];
                } 
                proxyprinttodiv("executelist params ",params,11);
                proxyprinttodiv("executelist whatToDo ",whatToDoFn,11);
                proxyprinttodiv("executelist whatToDoFn ",whatToDoFn,11);
                executeobject = getexecuteobject(params, howToDo, whatToDo, whatToDoFn); // get status of that fn
                proxyprinttodiv("executelist executeobject ",executeobject,11);
                if (executeobject) {break}; // if fnparams sent back (fn found) then end
                } // for w
            if (executeobject) {break}; 
            } // for h
        
        if (typeof executeobject ===  'object' && Object.keys(executeobject).length !=0)  { // need to check to see if execute is an object first (running object.keys on non object will blow it up)
            proxyprinttodiv("executelist executeobject ",executeobject,11);
            targetfn = executeobject.targetfn;
            whatToDo = executeobject.whatToDo;
            params = executeobject.params;
            synchflag = executeobject.synchflag;

            if (synchflag) { // if callback then call synch
                callback(executethis(params, targetfn));
                }
            else { // else call asynch
                targetfn(params, callback)
                }
            }
        else { // if no execute
            callback(params); // if nothing to execute return parameters 
            }
} //fn    


function getexecuteobject(params, howToDo, whatToDo, whatToDoFn) {
        var targetfn=undefined;
        var tempobject;
        var synchflag;

        proxyprinttodiv("getexecuteobject",whatToDo,11);
        if ((howToDo) && (whatToDo)) {
            
            switch (howToDo) {

                case "executeFn":
                    targetfn = whatToDoFn;

                    if (targetfn === undefined) {
                        break;
                    }; 

                    synchflag = (targetfn.length == 1);
                    break;

                case "executeParam" :
                    if (params === undefined) {
                        targetfn = undefined;
                        break;
                    }

                    targetfn = params[whatToDo];
                    
                    if (!targetfn instanceof Function) {
                        targetfn = window[targetfn];
                        }
                    synchflag = (targetfn.length == 1);
                    break;
                    
                case "executegetwid":
                    tempobject = executethis({'wid':whatToDo}, getwid);
                    targetfn=tempobject['js'];
                    if (!targetfn instanceof Function){
                        targetfn = window[targetfn];
                        }
                    synchflag = (targetfn.length == 1);
                    break;

                case "server":
                    targetfn=window["server"];
                    params['executethis']=whatToDo;
                    synchflag=false;
                    break;    
            }
            if (targetfn) {
                proxyprinttodiv("executelist targetfunction ",String(targetfn),11);
                return {
                    targetfn: targetfn ,
                    whatToDo: whatToDo,
                    params: params,
                    synchflag: synchflag
                    }
                }
            else{
                return undefined
                }
            }
        else { // if no exeucte this
            return undefined
            }
    }; // fn
        

    function nonCircularStringify(obj) {
        var cache = [];

        return JSON.stringify(obj, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    //found circular reference, discard key
                    return;
                }
                cache.push(value);
            }
            return value;
        });
    }

})(typeof window == "undefined" ? global : window);
