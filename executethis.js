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
      , executethis
      , etexecute;

    exports.etexecute=window.etexecute = etexecute = function etexecute(params, callback) {
        execute(params, function (results) { var err = {}; callback(err, results)});
    }


    exports.execute = window.execute = execute = function execute(incomingparams,callback) {

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

                var cbfunction = function (results, results2) {
                    funcDone = true; 
                    if (results2) {retResult = results2}
                             else {retResult = results};
                    }

                while(!funcDone) {
                    if(!funcCalled) {
                        funcCalled = true;
                        targetfunction(params, cbfunction);
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

                delete params[target]; // ** moved by Roger
                delete params[targetfunction]; // ** added by Roger

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

        // based on a target fn and params this fn will create a sorted list of what to do -- params will be in list

    function CreateDoList(params, configtarget, configfn) {

        if ((params === undefined) || (params==="")) {params={}};
        if ((configtarget === undefined) || (configtarget==="")) {configtarget="executeerror"};
        if ((configfn === undefined) || (configfn==="")) {configfn=""};

        // get saved configuration
        var config0 = toLowerKeys(config.configuration); // config0 is working copy of current configuration

        // If there is no config object for current target make one
        if (typeof config0[configtarget] !== 'object') {
            config0[configtarget] = [];
        }   

// fish out incoming configuraton
        if ((params['configuration'] !== undefined) && (params['configuration'][configtarget] !== undefined)){
            var incomingConfig = [];
            var object = params['configuration'][configtarget][0]; // needs [0]
            object = toLowerKeys(object);
            incomingConfig.push(object); // get send in config
            // delete parms config
            delete params['configuration'][configtarget];
            // *** delete params['configuration'][configtarget][0];????????????? or above take out?
            proxyprinttodiv("CreateDoList - incomingConfig ", incomingConfig, 11);
        }

        if (incomingConfig) {
            config0[configtarget] = incomingConfig; // ** Joe - only load incoming config if there is an incoming config
        } // added by roger *******

        // // If there is no config object for current target make one
        // *** Joe - moved above
        // if (typeof config0[configtarget] !== 'object') {
        //     config0[configtarget] = {};   
        // }   

        // no idea what this was for - Joe
        // incomingConfig[target];  // load override 

        //combine parameters from incoming parameters & inconfig and savedconfig
        // *** section below unnessesary, maybe keep: delete params[configtarget];
        // *** Joe - commented out the following
        // var paramsobject={};
        // paramsobject = incomingConfig['params'];  // get extra parameters from incoming params config
        // params = jsonConcat(params,paramsobject); // join them with existing parameters
        // paramsobject = config0[configtarget]['params']; // get extra parameters from config
        // params = jsonConcat(params,paramsobject); // join them with existing parameters
                        // delete from parameters configtarget

        //} **** taken out by roger

        

        if (config0[configtarget] !== undefined) {
            //delete params[configtarget];  *** moved by Roger
            // pre, mid, post configs are going to have multiple params so we need to iterate
            for (var i = 0; i < config0[configtarget].length; i++) {
                //try a concat
                if((params !== undefined) && (config0[configtarget][i].params !== undefined)) {
                    config0[configtarget][i].params = jsonConcat(params, config0[configtarget][i].params); // concatenate with other pararms
                } 
                 //config0[configtarget][i].params= params; ** took out and put above, we should not change 'params'
            }
             // save distiled parameters back to list
             // in example deletes midexecute : <something>
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

        // *** commented out by joe
        // replaced with code below
        // if ((list === undefined) || (list === "")) { // would be always true --> || (list != "")) { // if list empty then make up a default record
        //     // if ((configtarget=="preexecute") || (configtarget=="midexecute") || (configtarget=="postexecute")) {
        //     //     configtarget="executeFn"; // default if howtodo config missing
        //     //     }
        //     // *** commneted by Rogr
        //     list = [];   // if no list so far then make a list so there is something to execute
        //     list[0] = {};
        //     list[0].executeorder = 0;
        //     list[0].tryorder = 0;
        //     list[0].params = params;
        //     list[0].dothis = configtarget;
        //     list[0].dofn = configfn;
        //     }

        // The folowing code attempts to fix the list if it is missing a property
        // I only build a single list entry object on postion [0] of the array
        if((list === undefined) || (list === "")) {
            list = [];
        }
        if(list[0] === undefined) {
            list[0] = {};
        }
        if(list[0].executeorder === undefined) {
            list[0].executeorder = 0;
        }
        if(list[0].tryorder === undefined) {
            list[0].tryorder = 0;
        }
        if(list[0].params === undefined) {
            list[0].params = params;
        }
        if(list[0].dothis === undefined) {
            list[0].dothis = configtarget;
        }
        // *** Joe I do a function look up here as theres a good chance of configfn being set to undefined or "" do to a remap
        // ie.. configtarget is redir_b but by looking up a config it remaped dothis = func_b so we need to set configtarget to dothis
        // this works but the problem is we are stuck on [0] for arrays so I think only one will remap and find the local function to stick in dofn
        // notes: typically the configfn comes in from doThis which is fine on non remaps.. 
        // on remaps the true function name to lookup is found while in createdolist
        // which is why i'm doing this here, let me know what you think roger
        if(list[0].dofn === undefined) {
            list[0].dofn = configfn;
            if((list[0].dofn === "") && (window[list[0].dothis])) {
                list[0].dofn = window[list[0].dothis];
            }
        }

        // *** took out, made getexcuteobject smarter
        // // On a remap we may not have loaded a doFn try it now
        // if((configtarget !== "preexecute") && (configtarget !=="midexecute") && (configtarget !=="postexecute")) {
        //     if(list[0].dofn === undefined) {
        //         configtarget = list[0].dothis;
        //         configfn = window[configtarget];
        //         list[0].dofn = configfn;
        //         // load the params in 
        //         if((params !== undefined) && (list[0].params !== undefined)) {
        //             list[0].params = params;
        //         }
        //     }
        // }

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
        executeobject,
        targetfn,
        foundfn,
        synchflag,
        howToDoParams,
        whatToDoParams; 

        // iterate over our how to do list
        proxyprinttodiv("executelist - howToDoList ",howToDoList,11);
        proxyprinttodiv("executelist - whatToDoList ",whatToDoList,11);

        for (h in howToDoList) { // go through each item in how list
            proxyprinttodiv("dothis - h ",h,11);
            howToDo = howToDoList[h]['dothis']; // get specific howToDo from list
            howToDoParams = howToDoList[h]['params']; // get params that were stored
            if ((howToDoParams === undefined) || (howToDoParams==="")) {howToDoParams={}};
            proxyprinttodiv("executelist Hparams ",howToDoParams,11);
            proxyprinttodiv("executelist howToDo ",howToDo,11);

            for (w in whatToDoList) { // step through whatlist
                whatToDo = whatToDoList[w]['dothis']; // get specific whattodo
                whatToDoFn = whatToDoList[w]['dofn'];
                whatToDoParams = whatToDoList[w]['params'];
                if ((whatToDoParams === undefined) || (whatToDoParams==="")) {whatToDoParams={}};
                // if((params !== undefined) && (whatToDoList !== undefined)) {
                //     params = jsonConcat(params, whatToDoList[w]['params']); // concatenate with other pararms
                // } 
                // else if(whatToDoList[w]['params'] !== undefined) { // if we cannot concat the params see if there are some params in the what to do list to load
                //     params = whatToDoList[w]['params'];
                // } 
                proxyprinttodiv("executelist Wparams ",whatToDoParams,11);
                proxyprinttodiv("executelist whatToDo ",whatToDoFn,11);
                proxyprinttodiv("executelist whatToDoFn ",whatToDoFn,11);
                executeobject = getexecuteobject(jsonConcat(howToDoParams, whatToDoParams), howToDo, whatToDo, whatToDoFn); // get status of that fn
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
        var fncheck=false;

        proxyprinttodiv("getexecuteobject",whatToDo,11);
        if ((howToDo) && (whatToDo)) {
            
            switch (howToDo) {

                case "executeFn":
                    targetfn = whatToDoFn;

                    if((targetfn === undefined)  || (targetfn === "")){
                        // we want to return undefined here so we try the next case
                        targetfn = undefined;
                        break;
                    };
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
                    else if(typeof targetfn === 'string') {
                        targetfn = window[targetfn];
                    }

                    break;
                    
                case "executegetwid":
                    tempobject = executethis({'wid':whatToDo}, getwid);
                    if ((tempobject === undefined) && (!tempobject['js'])) {targetfn = executeerror} 
                        else {targetfn = tempobject['js']};
                    break;

                case "server":
                    targetfn=window["server"];
                    params['executethis']=whatToDo;
                    fncheck=true;
                    break;    

                case "executeerror":
                    targetfn=window["executeerror"];
                    break;  
            }

            if(targetfn !== undefined) {
                synchflag = (targetfn.length == 1);
            }


            if (fncheck) {
                // check to see if it is a string fucntion
                // check to see if it is a 
                if (!targetfn instanceof Function) {
                    if (targetfn.indexOf('function')!=-1) {
                        if (window[targetfn]) {
                            targetfn = window[targetfn]
                        } 
                        else {
                            targetfn = executeerror;
                        }
                    }
                }
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
    }// fn


    exports.executeerror = window.executeerror = executeerror = function executeerror(params, callback) {
        callback({"etstatus":"executeerror"});
    }

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