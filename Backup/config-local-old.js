
if(!exports){
    var exports = {};
}

var configuration = {};

configuration.environment='local';

configuration.preExecute = [];
configuration.preExecute[0] = {};
configuration.preExecute[0].executeorder = 0;
configuration.preExecute[0].tryorder = 0;
configuration.preExecute[0].dothis = 'executeFn';
configuration.preExecute[1] = {};
configuration.preExecute[1].executeorder = 0;
configuration.preExecute[1].tryorder = 0;
configuration.preExecute[1].dothis = 'executeParam';
configuration.preExecute[2] = {};
configuration.preExecute[2].executeorder = 0;
configuration.preExecute[2].tryorder = 0;
configuration.preExecute[2].dothis = 'executeDefault';
configuration.preExecute[3] = {};
configuration.preExecute[3].executeorder = 0;
configuration.preExecute[3].tryorder = 0;
configuration.preExecute[3].dothis = 'server';

configuration.midExecute = [];
configuration.midExecute[0] = {};
configuration.midExecute[0].executeorder = 1;
configuration.midExecute[0].tryorder = 2;
configuration.midExecute[0].dothis = 'executeFn';
configuration.midExecute[1] = {};
configuration.midExecute[1].executeorder = 1;
configuration.midExecute[1].tryorder = 1;
configuration.midExecute[1].dothis = 'executeParam';
configuration.midExecute[2] = {};
configuration.midExecute[2].executeorder = 1;
configuration.midExecute[2].tryorder = 1;
configuration.midExecute[2].dothis = 'executeDefault';
configuration.midExecute[3] = {};
configuration.midExecute[3].executeorder = 1;
configuration.midExecute[3].tryorder = 1;
configuration.midExecute[3].dothis = 'server';

configuration.postExecute = [];
configuration.postExecute[0] = {};
configuration.postExecute[0].executeorder = 0;
configuration.postExecute[0].tryorder = 0;
configuration.postExecute[0].dothis = 'executeFn';
configuration.postExecute[1] = {};
configuration.postExecute[1].executeorder = 0;
configuration.postExecute[1].tryorder = 0;
configuration.postExecute[1].dothis = 'executeFn';
configuration.postExecute[2] = {};
configuration.postExecute[2].executeorder = 0;
configuration.postExecute[2].tryorder = 0;
configuration.postExecute[2].dothis = 'executeFn';
configuration.postExecute[2] = {};
configuration.postExecute[2].executeorder = 0;
configuration.postExecute[2].tryorder = 0;
configuration.postExecute[2].dothis = 'server';

exports['config'] = window['config'] = config =  configuration;

function executeAjax(allConfig,executeItem,callback,returnCallback) {
    var result;
    var success = false;
    result = "";
        
    //executeItem = "[" + JSON.stringify(executeItem) + "]";
    executeItem = JSON.stringify(executeItem);
    $.ajax({
        type: 'PUT',
        dataType: 'json',
        url: '/executethis',
        headers: {'content-type':'Application/json'},
        global: 'false',
        cache: 'false',
        async: 'false',
        data: executeItem,
        success: function(data) {
            // alert(JSON.stringify(data));
            if(data.error){
                result = "<pre> APPLICATION ERROR: </pre>"+JSON.stringify(data);
            }else{
                if(Object.keys(data).length > 0) {
                    result = "<pre> SUCCESS: </pre>"+JSON.stringify(data);
                } else {    
                    result = "<pre> <<< No Data Returned >>> </pre>";
                }
            }
            callback(data,allConfig,'html',returnCallback);
        },
        error: function(data) {
            alert(JSON.stringify(data));
            result = "FAILED TO CALL EXECUTETHIS "+JSON.stringify(data);
            callback(data,allConfig,'html',returnCallback);
        }
    });
}

// Primary execute function called after doThis
function test2(params, callback){
    callback({"test":"test2 on local called"});
}


 // Utility function to return json with all keys in lowercase
function toLowerKeys(obj){
    var key, keys = Object.keys(obj);
    var n = keys.length;
    var newobj={}
    while (n--) {
      key = keys[n];
      newobj[key.toLowerCase()] = obj[key];
    }
    return newobj;
};

function server(params, callback) {
    console.log('execute server called with ' + JSON.stringify(params));
    // delete params['configuration'];
    var params = toLowerKeys(params);
    // if (params['midexecute']) {
    //     params['executethis'] = params['midexecute'];
    //     delete params['midexecute'];
    // }
    // alert(JSON.stringify(params));
    executeAjax("", params, function (data) {
        console.log("Return from server: " + JSON.stringify(data));
        callback(data);
    });
}

function config555() {
    var configuration = {};
    configuration.environment='local';
    
    configuration.getwid = [];
    configuration.getwid[0] = {};
    configuration.getwid[0].order = 0;
    configuration.getwid[0].dothis = 'getwid';  

    configuration.updatewid = [];
    configuration.updatewid[0] = {};
    configuration.updatewid[0].order = 0;
    configuration.updatewid[0].dothis = 'updatewid';

    configuration.querywid = [];
    configuration.querywid[0] = {};
    configuration.querywid[0].order = 0;
    configuration.querywid[0].dothis = 'querywid';

    configuration.preexecute = [];
    configuration.preexecute[0] = {};
    configuration.preexecute[0].order = 0;
    configuration.preexecute[0].dothis = 'executeFn';

    configuration.midexecute = [];
    configuration.midexecute[0] = {};
    configuration.midexecute[0].order = 0;
    configuration.midexecute[0].dothis = 'executeFn';


    configuration.postexecute = [];
    configuration.postexecute[0] = {};
    configuration.postexecute[0].order = 0;
    configuration.postexecute[0].dothis = 'executeFn';

    return {
        "configuration": configuration
    }
} 

