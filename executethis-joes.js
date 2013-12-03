// line 202 and 240 did these changes
// delete params['configuration.'+targetfunction];
// delete params['configuration.'+target]

(function (window) {
    // 'use strict';
    
    var execute
      , executethis
      , executeFn
      , doThis;
      // , exports = {};


    // add test ****
    // execute method --- method called numbered (1)
    exports.execute = window.execute = execute = function execute(incomingparams, callback) {
        console.log('arrived in execute ' + incomingparams);
        incomingparams = toLowerKeys(incomingparams);
        proxyprinttodiv("execute - inboundparms",incomingparams,11);
        //proxyprinttodiv("execute - callback ",callback.name,11);
        proxyprinttodiv("execute - callback fn ",String(callback),11);

        //*** add if 'test2'
        console.log(' *** test2  '+ JSON.stringify(incomingparams));
        if (incomingparams["executethis"]==="test2") {
            callback({'test2':'Reached test2 code.. execute function'});
        }
            else {
                incomingparams['midexecute'] = incomingparams['executethis'];
                // ** roger added line below 11-10
                delete incomingparams['executethis'];
                console.log('starting preexecute ' + incomingparams);
                // pre-execute method --- method called numbered (2)
                doThis(incomingparams, 'preexecute', function (preResults) {
                    console.log(' after preexecute >> '+ nonCircularStringify(preResults));
                    console.log('starting midexecute ' + preResults);
                    if(!preResults){preResults={};} // ** added by Roger
                    // mid-execute method --- method called numbered (3)
                    doThis(preResults, 'midexecute', function (midResults) {
                        console.log(' after midexecute >> ' + nonCircularStringify(midResults));
                        //if (midResults && midResults.midexecute) { delete midResults['midexecute']; }
                        // line above take anway by Roger, added below *** not sure why needed, but needed
                        if(!midResults){midResults={};}
                        // post-execute method --- method called numbered (4)
                        doThis(midResults, 'postexecute', function (postResults) {
                            console.log(' after postexecute >> ' + nonCircularStringify(postResults));
                            if(!postResults){postResults={};} // ** added by Roger
                            callback(postResults);
                        });
                    });
                });
            }
        
    };

    /// executethis is a function router that will return result synchronously
    /// 1st argument -- input parameters, 2nd parameter -- callback function
    /// second parameter must be a function, if not sent in will be defaulted to 'execute'
    /// if the function to be called has only one input object then this fn will wait for results (act asynch)
    exports.executethis = window.executethis = executethis = function executethis(inboundparms, targetfunction) {

        // if test1 ***
        if (inboundparms["executethis"]==="test1") {
            return {'test1':'Reached test1 code.. executethis function'};
            }
        else

        {
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
                    , funcCalled = false;

                while (!funcDone) {
                    if(!funcCalled) {
                        funcCalled = true;
                        targetfunction(params, function (results) {
                            funcDone = true;
                            retResult = results;
                        });
                    }
                }

                if (retResult === undefined){ retResult={}; }
                if (retResult["etstatus"]=="empty") {retResult={}}
                return retResult;
            }
        }
    };

    // primary command router based on what it reads from config and execeptions sent in parameter configuration.
    exports.doThis = doThis = function doThis(params, target, callback) {
        // local vars
        var whatToDo,
            whatToDoList,
            howToDo,
            howToDoList,
            config0,
            incomingConfig,
            targetfunction,
            parmobject; // added by roger

        // debug info
        proxyprinttodiv("dothis - inboundparms", params, 11);
        proxyprinttodiv("dothis - target ", target, 11);
        proxyprinttodiv("dothis - callback ", String(callback), 11);

        // This is here for debug
        if (params["midexecute"] === "test4") {
            callback({'test4':'Reached test4 code.. doThis function '});
        }
        else {
            // Before we try to load our config we need to see if there is something to do
            // so we check to see if there is something on the right hand side for the target (pre, mid, post)
            if (params[target] !== undefined) {
                // it is possible the function sent in a string or an actual function...we need to convert to string 
                // so we can look up config -- line below added by Roger ***
                if(params[target] instanceof Function) { targetfunction = params[target].name; }  // function was passed in
                    else { targetfunction = params[target]; }  // function name was passed in as string

                console.log(' Beginning doThis => '+ target +' >>> '+ nonCircularStringify(params));

                console.log(JSON.stringify(config.configuration));
                config0 = toLowerKeys(config.configuration);

                // override config for howToDo if we have one
                if ((incomingConfig !== undefined) && (incomingConfig[target] !== '')) {
                    incomingConfig = toLowerKeys(incomingConfig);

                    //if ((typeof config0[params[target]]) !== 'object') {  *** line below changed by Roger -- look by string
                    if (typeof config0[targetfunction] !== 'object') {
                        // console.log('Found a new config entry for "' + params[target] + '" building new object for it in config0...');
                        config0[target] = {};
                    }

                    // console.log('Loading"' + JSON.stringify(incomingConfiguration[target]) + ' onto config0...');
                    config0[target] = incomingConfig[target];
                    // delete params['configuration'];
                    // delete incomingConfig[target];
                    parmobject = params['configuration'][target]['params']; // get extra parameters from incoming param config
                    parms = jsonconcat(parms,parmobject); // join them with existing parameters
                    parmobject = config0[target]['params']; // get extra parameters from config
                    parms = jsonconcat(parms,parmobject); // join them with existing parameters
                    delete params['configuration'][target] // delete right config parm
                }

                // Load up our how to do list based on what stage we are in (pre, mid, post), then sort it
                howToDoList = config0[target];
                // sort out how to do list
                howToDoList = doThisListSort(howToDoList);

                // Place holder until i get the proper functions created to do this cleaner
                for (var h in howToDoList) {
                    howToDo = howToDoList[h]['dothis'];
                    whatToDo = params[target];
                    // check for a config remap of whatToDo
                    if(config0[whatToDo] !== undefined) {
                        // need an iterator and list for this eventually, maybe...
                        whatToDo = config0[whatToDo][0]['dothis'];
                    }
                    // check in exports for a local function, I think only executefn and server will run with this logic
                    if(exports[whatToDo] !== undefined) {               
                        params['executethis'] = whatToDo;
                        processhowtodo(params, howToDo, callback);
                    }
                    else if(howToDo == 'server') {
                        params['executethis'] = whatToDo;
                        processhowtodo(params, howToDo, callback);
                    }
                    else {
                        continue;
                    }
                }
            }
            else { // there was no right hand side to pre, mid, post (there was nothing to do)
                // we execute the callback here which will go to the next stage of execution
                callback(params);
            }
        }
    }


        //     console.log(" howToDoList => " + JSON.stringify(howToDoList));

        //     // iterate over our how to do list
        //     proxyprinttodiv("dothis - howToDoList ",howToDoList,11);
        //     for (h in howToDoList) {
        //         proxyprinttodiv("dothis - h ",h,11);
        //         // Override config0 for whatToDo
        //         // if ((incomingConfig !== 'undefined') && (incomingConfig[params[target]] !== '')) { -- changed by Roger **
        //         if ((incomingConfig !== 'undefined') && (incomingConfig[targetfunction] !== '')) {
        //             incomingConfig = toLowerKeys(incomingConfig);
        //             // if ((typeof config0[params[target]]) !== 'object') { -- changed by Roger **
        //             if ((typeof config0[targetfunction]) !== 'object') {
        //                 // console.log('Found a new config entry for "' + params[target] + '" building new object for it in config0...');
        //                 //config0[params[target]] = {};  changed by roger **
        //                 config0[targetfunction] = {};
        //             }
        //             // console.log('Loading"' + JSON.stringify(incomingConfiguration[params[target]]) + ' onto config0...');
        //             //config0[params[target]] = incomingConfig[params[target]]; -- changed by roger **
        //             config0[targetfunction] = incomingConfig[targetfunction];
        //             //delete params['configuration'];
        //             //delete incomingConfig[targetfunction];
        //             parmobject=config0[targetfunction]['params']; // get extra parameters from config
        //             parms=jsonconcat(parms,parmobject); // join them with existing parameters
        //             parmobject=params['configuration'][targetfunction]['params']; // get extra parameters from incoming param config
        //             parms=jsonconcat(parms,parmobject); // join them with existing parameters
        //             delete params['configuration'][targetfunction]; // delete right configuration parm
        //         }
        //         proxyprinttodiv("dothis - config0",config0,11);

        //         //whatToDoList = config0[params[target]]; -- changed by roger **
        //         whatToDoList = config0[targetfunction];
        //         proxyprinttodiv("dothis - whatToDoList ",whatToDoList,11);
        //         if (whatToDoList !== undefined && whatToDoList.length > 1) {
        //             // sort by executeorder and tryorder
        //             whatToDoList = whatToDoList.sort(function (a, b) {
        //                 if ( a.tryorder > b.tryorder )
        //                     return 1;
        //                 else if ( a.tryorder < b.tryorder)
        //                     return -1;
        //                 else if ( a.executeorder > b.executeorder )
        //                     return 1;
        //                 else if ( a.executeorder < b.executeorder)
        //                     return -1;
        //                 else
        //                     return 0;
        //             });
        //         }

        //         if (howToDoList.hasOwnProperty(h)) {
        //         //if (howToDoList[h]) {
        //             howToDo = window[howToDoList[h]['dothis']];
        //         }

        //         console.log(" What to do list: " + JSON.stringify(whatToDoList));

        //         // proxyprinttodiv("doThis processhowtodo - howToDo *** ",howToDo.name,11);
        //         proxyprinttodiv("doThis processhowtodo - howToDo *** ",howToDo,11);

        //         if ((whatToDoList !== undefined) && (whatToDoList != "")) { // make sure we have a list from config, if not just go execute it
        //             for (w in whatToDoList) {
        //                 // console.log('>>>>>>>>>>>> configuration <'+ target +'> >>> '+JSON.stringify(howToDoList));

        //                 if (whatToDoList.hasOwnProperty(w)){
        //                     whatToDo = whatToDoList[w]['dothis'];
        //                 }
        //                 params['executethis'] = whatToDo;
        //                 // clean up params
        //                 delete params[target];
        //                 //if (howToDo instanceof Function) {
        //                     //howToDo(params, function(results) { callback(results); });  *** changed by roger
        //                     proxyprinttodiv("dothis II - inboundparms",params,11);
        //                     proxyprinttodiv("dothis II - callback ",String(callback),11);
        //                     // Joe - changed to use a callback
        //                     // processhowtodo(params, howtodo);
        //                     processhowtodo(params, howToDo, callback);
        //                     //howToDo(params, callback);
        //                 //}
        //             }
        //         }
        //         else {
        //             // console.log("No config for whatToDo trying to execute directly: " + JSON.stringify(howToDo) + ' with: {"executethis":"' + params[target] + '"}');
        //             if (howToDo instanceof Function && params[target]) {
        //             // if (howToDo instanceof Function && params[target]) {
        //                 params['executethis'] = params[target]; 
        //                 //params['executethis'] = targetfunction; 
        //                 // ** we really should use this line, but lukes tests check for returned executethis, thus we need string
        //                 //
        //                 // Clean up the params, do not want executethis: something and a midexecute : something
        //                 delete params[target];
        //                 //if (howToDo instanceof Function) {
        //                 // howToDo(params, function(results) { callback(results); }); *** changed by roger
        //                 proxyprinttodiv("dothis III - parms",params,11);
        //                 proxyprinttodiv("dothis III - callback ",String(callback),11);
        //                 // Joe - changed to use a callback
        //                 // processhowtodo(params, howtodo);
        //                 processhowtodo(params, howToDo, callback);
        //                 //howToDo(params, callback);
        //                 //}
        //             }else {
        //                 console.log(" Nothing to do in dothis, sending back params...");
        //                 continue;
        //                 // delete params[target]; // added by roger
        //                 // callback(params);
        //             }
        //         }
        //         //}
        //     } // for h
        // } // test 4
    // }; // do this

    exports.processhowtodo = window.processhowtodo = processhowtodo = function processhowtodo(params, howtodo, callback) {
        var windowFunc;
        if ((params['executethis'] !== undefined) && (params['executethis'] != "")) {

            var howtodoName = undefined;
            if(howtodo instanceof Function){
                howtodoName = howtodo.name;
            }else{
                howtodoName = howtodo;
            }

            proxyprinttodiv("processhowtodo - howtodoName ",howtodoName,11);
            proxyprinttodiv("processhowtodo - params ",params,11);
            
            // no callback here 
            //proxyprinttodiv("processhowtodo - callback ",String(callback),11);
            //return executethis(params, howtodoName);
            switch(howtodoName) {

                case "executeFn": 
                    proxyprinttodiv("processhowtodo - executeFn ",howtodoName,11);
                    executeFn(params,callback);
                    break;

                case "executeParam" :
                    proxyprinttodiv("processhowtodo - executeParam ",howtodoName,11);
                    executeParam(params,callback);
                    break;
                    
                case "executegetwid":
                    proxyprinttodiv("processhowtodo - executegetwid ",howtodoName,11);
                    executegetwid(params,callback);
                    break;

                case "server":
                    proxyprinttodiv("processhowtodo - server ",howtodoName,11);
                    server(params, callback);
                    break;    
            }

        }
    }


    exports.executeFn = window.executeFn = executeFn = function executeFn(params, callback) {
        // Primary execute function called from doThis
        // this is a function router, it looks inside parm executethis...accepts strings or functions
        // it is the reponsability of what gets called to remove paramter executethis from results
        proxyprinttodiv("executeFn outside - params ",params,11);
        if ((window[params['executethis']] || params['executethis'] instanceof Function)) { 
            proxyprinttodiv("executeFn inside - params ",params,11);
            // first load windowFunc with actual function
            if(params['executethis'] instanceof Function) { 
                windowFunc = params['executethis']; 
                }  // function was passed in
            else { 
                windowFunc = window[params['executethis']]; 
                }  // function name was passed in as string

            if (windowFunc.length === 1) {
                proxyprinttodiv("executeFn windowFunc-1 ",windowFunc.name,11);
                //callback(windowFunc(params));
                } 
            else {
                proxyprinttodiv("executeFn windowFunc-other ",windowFunc.name,11);
                windowFunc(params, callback);
                }
            } 
            //else {
            //callback(params); 
            // if no function or funciton name found nothing to do
            //}
    }

    exports.executeParam = window.executeParam = executeParam = function executeParam(params, callback) {
        // executeParam remaps from the params and then trys to execute a function by that name
        // {"executeThis":"a", "a":"functionToExecute"} maps to {"executeThis":"functionToExecute"}
        windowFunc=params['executethis'];
        params['executethis']=params[windowFunc];
        delete params[windowFunc];
        executeFn(params, callback);
    }

    exports.executegetwid = window.executegetwid = executegetwid = function executegetwid(params, callback) {
        // read the wid pointed to by parameter execuetthis...then execute it
        params['wid']=params['executethis'];
        params = executethis(params, getwid);
        execute(params, callback); // start the execute process from the parameters recevied in the wid
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

    function doThisListSort(list) {
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
        return list;
    }

})(typeof window == "undefined" ? global : window);