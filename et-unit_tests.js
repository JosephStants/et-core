// at stands for 'all tests', this will run a suite 
// of tests that are known to pass
exports.at = at = function at(params, callback) {
	bootprocess();

	var result={};
	result = jsonConcat(result, tt());
	result = jsonConcat(result, astt());
	result = jsonConcat(result, ctt());
	result = jsonConcat(result, alphatt());
	
    if (callback instanceof Function) { 
    	callback(result); 
    } else { 
    	return result; 
    }
    // return result;
}
// This test uses a gojs
exports.rt1 = rt1 = function rt1(params, callback) {
	testclearstorage();
	// Set up the gojs object in local storage
	rogeri();
	// Check the results against the assertions
	params = logverify("readstartwid","resultwid1" ,"startwid_get_result","","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
	params = logverify("readstartwid","resultwid2" ,"startwid_authordto" ,"","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
	params = logverify("readstartwid","resultwid3" ,"startwid_dtonum_bookdto" ,"","",{"booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00"});
	params = logverify("readstartwid","resultwid4" ,"startwid_num_bookdto" ,"","",{"0.metadata.method":"booksdto","0.wid":"1","0.title":"none","0.pages":"00"});
	params = logverify("readstartwid","resultwid5" ,"startwid_bookdto" ,"","",{"metadata.method":"booksdto","wid":"1","title":"none","pages":"00"});
	params = logverify("readstartwid","resultwid6" ,"startwid_palettedto" ,"","",{"metadata.method":"palettedto","wid":"16","widname":"joe_jamison","category":"human","subcategory":"author"});
	params = logverify("readstartwid","resultwid7" ,"startwid_adddto" ,"","",{"metadata.method":"adddto","wid":"13","actiondto.0.metadata.method":"actiondto","actiondto.0.wid":"14","actiondto.0.action":"none","palettedto.0.metadata.method":"palettedto","palettedto.0.wid":"16","palettedto.0.widname":"joe_jamison","palettedto.0.category":"human","palettedto.0.subcategory":"author","addfield.0.metadata.method":"addfield","addfield.0.wid":"18","addfield.0.fieldname":"name","linkrules.0.metadata.method":"linkrules","linkrules.0.wid":"20","linkrules.0.linkclass":"1","linkrules.0.min":"0","linkrules.0.max":"10","dfield.fieldname":"name","dfield.display":"true","dfield.editable":"true","dfield.onreadactions":"none","dfield.oneditactions":"pop_up_alert","dfield.wid":"addfielddefault","dfield.metadata.method":"defaultdto"});
	params = logverify("readstartwid","resultwid8" ,"startwid_addfield" ,"","",{"metadata.method":"addfield","wid":"18","fieldname":"name","eldname":"name","splay":"true","itable":"true","readactions":"none","editactions":"pop_up_alert","d":"addfielddefault","tadata.method":"defaultdto"});
	params = logverify("readstartwid","resultwid9" ,"startwid_actiondto" ,"","",{"metadata.method":"actiondto","wid":"14","action":"none"});
	params = logverify("readstartwid","resultwid10","startwid_linkrules" ,"","",{"metadata.method":"linkrules","wid":"20","linkclass":"1","min":"0","max":"10"});
	params = logverify("readstartwid","resultwid11","startwid_gojsobject" ,"","",{});
	params = logverify("readstartwid","resultwid12","startwid_nodeDataArray" ,"","",{});
	params = logverify("readstartwid","resultwid13","startwid_linkdataarray" ,"","",{});
	params = logverify("readstartwid","resultwid14","startwid_leftarray" ,"","",{});
	params = logverify("readstartwid","resultwid15","startwid_rightarray" ,"","",{});
	params = logverify("readstartwid","resultwid16","startwid_bottomarray" ,"","",{});
	params = logverify("readstartwid","resultwid17","startwid_toparray" ,"","",{});
	return verifysummary("test_results");
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// This series of tests will send parameters to func_b.
// There are variations of pre and post execute applied to 
// the calling of func_b. In pre, mid, and post, a parameter is 
// deleted, and a parameters is added to verify that each level of  
// the executethis is being accessed.
exports.tt = tt = function tt (params, callback) {
	t1();
	t2();
	t3();
	t3a();
	t4();
	t4a();
	t5();
	t6();
	var x = test_results;
    if (callback instanceof Function) { 
    	callback(x); 
    } else {  
    	return x; 
    }
}
// This series is identical to tt, except that the functions called 
// by executethis are async, and therefore use callbacks to return data
// to the calling function.
exports.astt = astt =function astt (params, callback) {
	ast1();
	ast2();
	ast3();
	ast3a();
	ast4();
	ast4a();
	ast5();
	ast6();
	var x = test_results;
    if (callback instanceof Function) { 
    	callback(x); 
    } else { 
    	return x; 
    }
}
// This series uses the sync functions of a,b, and c with changes to the
// configuration parameters. This allows for calling func_b by calling
// redir_b instead of func_b, redir_a instead of func_a, and so on.
exports.ctt = ctt = function ctt (params, callback) {
	ct1();
	ct2();
	ct3();
	ct3a();
	ct4();
	ct4a();
	ct5();
	ct6();
	ct7();
	ct8();
	ct9();
	ct10();
	ct11();
	// ct14();
	var x = test_results;
    if (callback instanceof Function) { 
    	callback(x); 
    } else { 
    	return x; 
    }
}
// Testb is a simple test: create a soundDTO and then get it.
// This is to test the dto portion of add/get. Teste is a 
// continuation of testb, in that a colorDTO is created, and 2 colorwids
// are created using the colorDTO. A get_color1 confirms the creation is
// successful.
exports.alphatt = alphatt = function alphatt (params, callback) {
	testb();
	teste();
	var x = test_results;
    if (callback instanceof Function) { 
    	callback(x); 
    } else { 
    	return x; 
    }
}

exports.xtt = xtt = function xtt (params, callback) {
	test1();
	test2();
	test3();
	test4();
	test99();
	var x = verifysummary("test_results");
    if (callback instanceof Function) { 
    	callback(x); 
    } else { 
    	return x; 
    }
}


// Call test99 with only pre func_c -- same result as t4
exports.test99 = test99 = function test99 (params, callback) {
	testclearstorage();
	config = executetest("executethis", {"executethis":"mongoquery", "wid" : "test1"},"t99_output","");
	params = logverify("unit_tests","test99_result","test99_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// functions a,b,c manipulate parameters
// Call func_b with no pre or post
exports.t1 = t1 = function t1 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, "t1_output", "");
	params = logverify("unit_tests","t1_result","t1_output","","",{"d":"1","c":"0","g":"4"});
	// params = logverify("unit_tests","t1_result","t1_output","","",{"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.tfail = tfail = function tfail (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, "t1_output", "");
	params = logverify("unit_tests","t1_result","t1_output","","",{"d":"1","c":"0","g":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// Call func_b with pre and post
exports.t2 = t2 = function t2 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_a","postexecute":"func_c"}, "t2_output", "");	
	params = logverify("unit_tests","t2_result","t2_output","","",{"f":"3","g":"4","h":"5"});
	// params = logverify("readstartwid","resultwid","startwid_authordto" ,"","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with only pre func_a
exports.t3 = t3 = function t3 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_a"}, "t3_output", "");
	params = logverify("unit_tests","t3_result","t3_output","","",{"c":"0","f":"3","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with only post func_a -- same result as t3
exports.t3a = t3a = function t3a (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","postexecute":"func_a"}, "t3a_output", "");
	params = logverify("unit_tests","t3a_result","t3a_output","","",{"c":"0","g":"4","f":"3"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with only post
exports.t4 = t4 = function t4 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","postexecute":"func_c"}, "t4_output", "");
	params = logverify("unit_tests","t4_result","t4_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with only pre func_c -- same result as t4
exports.t4a = t4a = function t4a (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_c"}, "t4a_output", "");
	params = logverify("unit_tests","t4a_result","t4a_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with func_a for pre and post
exports.t5 = t5 = function t5 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_a","postexecute":"func_a"}, "t5_output", "");
	params = logverify("unit_tests","t5_result","t5_output","","",{"c":"0","f":"3","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with func_c for pre and post
exports.t6 = t6 = function t6 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_c","postexecute":"func_c"}, "t6_output", "");
	params = logverify("unit_tests","t6_result","t6_output","","",{"d":"1","h":"5","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call func_b with executefn
exports.t7 = t7 = function t7 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, "t7_output", "");
	params = logverify("unit_tests","t7_result","t7_output","","",{"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call widb where widb does not exist as a function, or a parameter...but is a wid that can be loaded with executegetwid 
exports.t8 = t8 = function t8 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("addwidmaster",{"wid":"widb","animal":"giraffe"}, "", "");
	executetest("executethis", {"executethis":"widb"}, "t8_output", "");
	params = logverify("unit_tests","t8_result","t8_output","","",{"animal":"giraffe"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call 
exports.t9 = t9 = function t9 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("addwidmaster",{"wid":"widb","animal":"giraffe"}, "", "");
	executetest("executethis", {"executethis":"widb"}, "t9_output", "");
	params = logverify("unit_tests","t9_result","t9_output","","",{"animal":"giraffe"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

exports.ast1 = ast1 = function ast1 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2"}, "as_t1_output", "");
	params = logverify("as_unit_tests","as_t1_result","as_t1_output","","",{"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with pre and post
exports.ast2 = ast2 = function ast2 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","preexecute":"async_func_a","postexecute":"async_func_c"}, "as_t2_output", "");
	params = logverify("as_unit_tests","as_t2_result","as_t2_output","","",{"f":"3","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with only pre async_func_a
exports.ast3 = ast3 = function ast3 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","preexecute":"async_func_a"}, "as_t3_output", "");
	params = logverify("as_unit_tests","as_t3_result","as_t3_output","","",{"c":"0","f":"3","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with only post async_func_a -- same result as t3
exports.ast3a = ast3a = function ast3a (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","postexecute":"async_func_a"}, "as_t3a_output", "");
	params = logverify("as_unit_tests","as_t3a_result","as_t3a_output","","",{"c":"0","g":"4","f":"3"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with only post
exports.ast4 = ast4 = function ast4 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","postexecute":"async_func_c"}, "as_t4_output", "");
	params = logverify("as_unit_tests","as_t4_result","as_t4_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with only pre async_func_c -- same result as t4
exports.ast4a = ast4a = function ast4a (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","preexecute":"async_func_c"}, "as_t4a_output", "");
	params = logverify("as_unit_tests","as_t4a_result","as_t4a_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with async_func_a for pre and post
exports.ast5 = ast5 = function ast5 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","preexecute":"async_func_a","postexecute":"async_func_a"}, "as_t5_output", "");
	params = logverify("as_unit_tests","as_t5_result","as_t5_output","","",{"c":"0","f":"3","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_b with async_func_c for pre and post
exports.ast6 = ast6 = function ast6 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_b", "c":"0", "d":"1", "e":"2","preexecute":"async_func_c","postexecute":"async_func_c"}, "as_t6_output", "");
	params = logverify("as_unit_tests","as_t6_result","as_t6_output","","",{"d":"1","h":"5","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_d that will, in turn, call async_func_e  
exports.ast7 = ast7 = function ast7 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_d", "c":"0", "d":"1", "e":"2"}, "as_t7_output", "");
	params = logverify("as_unit_tests","as_t7_result","as_t7_output","","",{"c":"0","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call async_func_d_1 that will, in turn, call async_func_e_1, and then async_func_f, async_func_g, and async_func_h.
// If the diamond makes out of async_func_h...it will show executethis can go five layers deep into et and return with a parameter
// to the as_t8_output...pretty cool 
exports.ast8 = ast8 = function ast8 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"async_func_d1", "c":"0", "d":"1", "e":"2"}, "as_t8_output", "");
	params = logverify("as_unit_tests","as_t8_result","as_t8_output","","",{"c":"0","d":"1","e":"2","rubies":"red","emeralds":"green","diamonds":"you are rich!!","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// Call redir_b with no pre or post
exports.ct1 = ct1 = function ct1 (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2"}, "c_t1_output", "");
	params = logverify("c_unit_tests","c_t1_result","c_t1_output","","",{"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with pre and post
exports.ct2 = ct2 = function ct2 (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","preexecute":"redir_a","postexecute":"redir_c"}, "c_t2_output", "");
	params = logverify("c_unit_tests","c_t2_result","c_t2_output","","",{"f":"3","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with only pre redir_a
exports.ct3 = ct3 = function ct3 (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","preexecute":"redir_a"}, "c_t3_output", "");
	params = logverify("c_unit_tests","c_t3_result","c_t3_output","","",{"c":"0","f":"3","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with only post redir_a -- same result as t3
exports.ct3a = ct3a = function ct3a (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","postexecute":"redir_a"}, "c_t3a_output", "");
	params = logverify("c_unit_tests","c_t3a_result","c_t3a_output","","",{"c":"0","g":"4","f":"3"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with only post
exports.ct4 = ct4 = function ct4 (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","postexecute":"redir_c"}, "c_t4_output", "");
	params = logverify("c_unit_tests","c_t4_result","c_t4_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with only pre redir_c -- same result as t4
exports.ct4a = ct4a = function ct4a (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","preexecute":"redir_c"}, "c_t4a_output", "");
	params = logverify("c_unit_tests","c_t4a_result","c_t4a_output","","",{"d":"1","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with redir_a for pre and post
exports.ct5 = ct5 = function ct5 (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","preexecute":"redir_a","postexecute":"redir_a"}, "c_t5_output", "");
	params = logverify("c_unit_tests","c_t5_result","c_t5_output","","",{"c":"0","f":"3","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Call redir_b with redir_c for pre and post
exports.ct6 = ct6 = function ct6 (params, callback) {
	testclearstorage();
	config = setconfig2();
	executetest("executethis", {"executethis":"redir_b", "c":"0", "d":"1", "e":"2","preexecute":"redir_c","postexecute":"redir_c"}, "c_t6_output", "");
	params = logverify("c_unit_tests","c_t6_result","c_t6_output","","",{"d":"1","h":"5","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This will try pre with func a, but remapped with a configuration that
// is passed into executethis...it still wants to hit func_b with mid
exports.ct7 = ct7 = function ct7 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"c":"0", "d":"1", "e":"2", "preexecute": "a", "executethis":"func_b",
    "configuration": {
        "preexecute": [
            {
                "dothis": "executeFn",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }
        ],
        "a": [
            {
                "dothis": "alertFn1",
                "tryorder": 0,
                "executeorder": 0,
                "params": {}
            }
        ]
    }}, "ct7_output", "");
	// params = logverify("c_unit_tests","ct7_result","ct7_output","","",{"c":"0","d":"1","executethis":"func_b","ct7":"did some alerting","g":"4","howtodooverride":"you got your hottodooverwritten"});
	params = logverify("c_unit_tests","ct7_result","ct7_output","","",{"ct7":"did some alerting","configuration":{},"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This will try pre with func a, 
exports.ct7a = ct7a = function ct7a (params, callback) {
	testclearstorage();
	config = setconfig6();
	executetest("executethis", {"c":"0", "d":"1", "e":"2", "preexecute": "a",
    "configuration": {
        "preexecute": [
            {
                "dothis": "executeFn",
                "tryorder": "0",
                "executeorder": "0"
            }
        ],
        "a": [
            {
                "dothis": "alertFn1",
                "tryorder": "0",
                "executeorder": "0"
            }
        ]
    }}, "c_t7_output", "");
	// params = logverify("c_unit_tests","c_t7_result","c_t7_output","","",{"c":"0","d":"1","executethis":"func_b","ct7a":"did some alerting","g":"4","howtodooverride":"you got your hottodooverwritten"});
	params = logverify("c_unit_tests","ct7a_result","ct7a_output","","",{"c":"0","d":"1","ct7a":"did some alerting","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}


// This test asserts that the tryorder in the config is successful
// and causes executethis to call executeFn, not server, or the others
exports.ct8 = ct8 = function ct8 (params, callback) {
	testclearstorage();
	config = setconfig5();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, "ct8_output", "");
	params = logverify("c_unit_tests","ct8_result","ct8_output","","",{"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This test is to call func_b, add in the parameters to remap does_not_exist to func_b and execute...so far it doesn't work....
exports.ct9 = ct9 = function ct9 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"does_not_exist", "does_not_exist":"func_b", "c":"0", "d":"1", "e":"2"}, "ct9_output", "");
	params = logverify("c_unit_tests","ct9_result","ct9_output","","",{"d":"1","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This test is to call func_b, add in the parameters to remap does_not_exist to func_b and execute...so far it doesn't work....
exports.ct9a = ct9a = function ct9a (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"does_not_exist", "does_not_exist":"function () { return 'Keg of Beer'; }"}, "ct9a_output", "");
	params = logverify("c_unit_tests","ct9a_result","ct9a_output","","",{"data":"Keg of Beer"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}


// This test is to call func_b, remap does_not_exist to func_a and execute params to func_a and then to func_b
exports.ct10 = ct10 = function ct10 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "preexecute":"does_not_exist","does_not_exist":"func_a", "c":"0", "d":"1", "e":"2"}, "ct10_output", "");
	params = logverify("c_unit_tests","ct10_result","ct10_output","","",{"f":"3","c":"0","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// This test is to call func_b, remap does_not_exist_1 to func_a,
// remap does_not_exist_2 to func_c, and execute params to func_a, and then to func_b, and then func_c.
exports.ct11 = ct11 = function ct11 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "preexecute":"does_not_exist_1","does_not_exist_1":"func_a", "postexecute":"does_not_exist_2","does_not_exist_2":"func_c", "c":"0", "d":"1", "e":"2"}, "ct11_output", "");
	params = logverify("c_unit_tests","ct11_result","ct11_output","","",{"f":"3","h":"5","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// This test is to send in a config as parameter of a config. This allows for the server to recieve a config
// from a config that is passed in the parameters.
exports.ct12 = ct12 = function ct12 (params, callback) {
	testclearstorage();
	config = setconfig1();

	executetest ("executethis", 
				{"c":"0", "d":"1", "e":"2", "preexecute": "a",
				    "configuration": {
								        "preexecute": [
								            {
								                "dothis": "executeFn",
								                "tryorder": "0",
								                "executeorder": "0"
								            }
								        ],
								        "a": [
								            {
								                "dothis": "alertFn1",
								                "tryorder": "0",
								                "executeorder": "0"
								            }
								        ],
								        "params": [
								            {
								                "a": "b",
								                "c": "d",
								                "e": "f"
								            }
								        ]}},
				"c_t12_output",
				"");

	params = logverify("c_unit_tests","c_t12_result","c_t12_output","","",{"c":"0","d":"1","ct12":"did some alerting","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// --------------not implemnted yet

// This test is to test a config where a and b do not exist, but c does and c will execute. You
// should not see any data for ct13_output_a, or b.
exports.ct13 = ct13 = function ct13 (params, callback) {
	testclearstorage();
	config = setconfig6();
	executetest("executethis", {"executethis":"a"}, "ct13_output_a", "");
	executetest("executethis", {"executethis":"b"}, "ct13_output_b", "");
	executetest("executethis", {"executethis":"c"}, "ct13_output_c", "");
	params = logverify("c_unit_tests","ct13_result","ct13_output_c","","",{"fire_c":"0"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// This test is to test a config where a config with params is sent to pre, mid, and post.
// The results should have the a,b,c cereals, along with the regular params.
exports.ct14 = ct14 = function ct14 (params, callback) {
	testclearstorage();
	config = setconfig6();
	executetest("executethis", {"executethis":"func_b","preexecute":"func_a","postexecute":"func_c", "c":"0", "d":"1", "e":"2"}, "ct14_output", "");
	params = logverify("c_unit_tests","ct14_result","ct14_output","","",{"g":"4","cer2":"booberry","cer1":"alphabits","f":"3","cer3":"chex","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

// This will send the alphabits param in the preexecute config, but will overriding it in the args to
// win out? It does not...the args are lost and the params from the config win out.
exports.ct15 = ct15 = function ct15 (params, callback) {
	testclearstorage();
	config = setconfig6();
	executetest("executethis", {"executethis":"func_b","preexecute":"func_a", "cer1":"booberry","c":"0", "d":"1", "e":"2"}, "ct15_output", "");
	params = logverify("c_unit_tests","ct15_result","ct15_output","","",{"g":"4","cer1":"alphabits","cer2":"booberry","f":"3","c":"0"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// Template for a new test, yet to be determined
exports.ct1000 = ct1000 = function ct1000 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, "ct1000_output", "");
	params = logverify("c_unit_tests","ct1000_result","ct1000_output","","",{"c":"0","d":"1","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.other_func = other_func = function other_func(params, callback) {
	params['howtodooverride'] = 'you got your hottodooverwritten';
	window[params['executethis']] (params, callback);
	callback(params);
}

exports.alertFn1 = alertFn1 = function alertFn1 (params, callback) {
	alert('ct7 has alerted');
	params["ct7"] = "did some alerting";
	// delete params["configuration"];
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// Test to call a function
exports.ft1 = ft1 = function ft1 (params, callback) {
	testclearstorage();
	config = setconfig1();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2"}, "ft1_output", "");
	params = logverify("c_unit_tests","ft1_result","ft1_output","","",{"c":"0","d":"1","g":"4"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}




// ---------------------- Functions to use in pre, mid and post
// to test the flow of parameters through executethis
exports.func_a = func_a = function func_a (parameters) {
	console.log('from func_a');
	printToDiv('func_a',parameters,1);
	delete parameters["d"];
	parameters["f"] = "3";
	return parameters;
}

exports.func_b = func_b = function func_b (parameters) {
	console.log('from func_b');
	delete parameters["e"];
	parameters["g"] = "4";
	// alert('b');
	return parameters;
}

exports.func_c = func_c = function func_c (parameters) {
	console.log('from func_c');
	printToDiv('func_c',parameters,1);
	delete parameters["c"];
	parameters ["h"] = "5";
	return parameters;
}
// This is used when a and b do not exist, but 
exports.fire_c = fire_c = function fire_c (parameters) {
	parameters ["fire_c"] = "fire_c is now fired";
	return parameters;
}


// These are the async versions of the above calls
exports.async_func_a = async_func_a = function async_func_a (parameters,   callback) {
	delete parameters["d"];
	parameters["f"] = "3";
	//sleep(500);
	callback(parameters);
}

exports.async_func_b = async_func_b = function async_func_b (parameters,  callback) {
	delete parameters["e"];
	parameters["g"] = "4";
	sleep(500);
	callback (parameters);
}

exports.async_func_c = async_func_c = function async_func_c (parameters,  callback) {
	delete parameters["c"];
	parameters ["h"] = "5";
	//sleep(500);
	callback (parameters);
}

exports.async_func_d = async_func_d = function async_func_d (parameters,  callback) {
	var t = parameters["d"];
	parameters['executethis'] = 'async_func_e';
	parameters = executethis(parameters);
	sleep(500);
	if (parameters["d"] == t) parameters["d"] = t + ":added";
	delete parameters["e"];
	parameters ["h"] = "5";
	callback (parameters);
}	

exports.async_func_e = async_func_e = function async_func_e (parameters) {
	sleep(500);
	// alert('func_e');
	delete parameters["d"];
	parameters ["h"] = "7";
	return parameters;
}

exports.async_func_d1 = async_func_d1 = function async_func_d1 (parameters) {
	parameters['executethis'] = 'async_func_e1';
	parameters = executethis(parameters, "execute");
	sleep(500);
	parameters ["h"] = "5";
	return parameters;
	// callback (parameters);
}

exports.async_func_e1 = async_func_e1 = function async_func_e1 (parameters, callback) {
	sleep(500);
	// alert('func_e1');
	parameters['executethis'] = 'async_func_f';
	parameters = executethis(parameters, execute);
	callback (parameters);
	// return parameters;
}

exports.async_func_f = async_func_f = function async_func_f (parameters, callback) {
	sleep(500);
	// alert('func_f');
	parameters ["rubies"] = "red";
	parameters['executethis'] = async_func_g;
	parameters = executethis(parameters, execute);
	callback (parameters);
	// return parameters;
}

exports.async_func_g = async_func_g = function async_func_g (parameters, callback) {
	sleep(500);
	// alert('func_g');
	parameters ["emeralds"] = "green";
	parameters ['executethis'] = async_func_h;
	parameters = executethis(parameters, execute);
	callback (parameters);
	// return parameters;
}

exports.async_func_h = async_func_h = function async_func_h (parameters, callback) {
	sleep(500);
	// alert('diamonds');
	parameters ["diamonds"] = "you are rich!!";
	console.log('Struck diamonds -- five levels deep in executethis');
	callback (parameters);
	// return parameters;
}
//--------------------------

exports.getwidtest = getwidtest = function getwidtest(params, callback) {
    executetest('getwid', {wid:'test1'});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.updatewidtest = updatewidtest = function updatewidtest(params, callback) {
    executetest('updatewid', {wid:'test1',this:'that',something:'else'}, '', '');
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.jasontesta = jasontesta = function jasontesta(params, callback) {
    executetest('updatewid', {wid:'jasontestwid',this:'that',something:'else'}, '', '');
    executetest('getwid', {wid:'jasontestwid'});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.jasontestb = jasontestb = function jasontestb(params, callback) {
    executetest('addwidmaster', {wid:'jasontestwid5',testnum:'5',black:'white',pair:'3'});
    executetest('getwidmaster', {wid:'jasontestwid5'});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testa = testa = function testa (params, callback) {
		// executetest("test2",{"wid":"colordto"}, "blue", "");
		// executetest("test2",{"wid":"colordto"}, "", "");
		// the above 2 work as of oct 30
		// 
		//executetest("test4",{"wid":"colordto"}, "", "");
		// the above works as of oct 30
		executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
		// executetest("updatewid",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
		executetest("updatewid",{"wid":"color1","hue":"red"}, "", "");
		executetest("addwidmaster",{"wid":"color2","hue":"blue","metadata.method":"colordto"}, "", "");
	    // executetest("getwidmaster", {"wid":"color1"}, "", "");	
//		params = logverify("this_test","test_result","actual","","",getFromLocalStorage("assertion"));
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testb_setup = testb_setup = function testb_setup (params, callback) {
    executetest("addwidmaster",{"wid":"sounddto","metadata.method":"sounddto","note":"string"}, "", "");
    // executetest("getwidmaster", {"wid":"sounddto"}, "get_sounddto_result", "");
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testc_setup = testc_setup = function testc_setup (params, callback) {
		executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
		executetest("addwidmaster",{"wid":"color1","hue":"red"}, "", "");
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testd_setup = testd_setup = function testd_setup (params, callback) {
		executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
		executetest("addwidmaster",{"wid":"color1","hue":"red"}, "", "");
		executetest("addwidmaster",{"wid":"color2","hue":"blue"}, "", "");
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.teste_setup = teste_setup = function teste_setup (params, callback) {
		executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string"}, "", "");
		executetest("addwidmaster",{"wid":"color1","hue":"red"}, "", "");
		executetest("addwidmaster",{"wid":"color2","hue":"blue"}, "", "");
	    executetest("getwidmaster", {"wid":"color1"}, "get_color1_result", "");	
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testg_setup = testg_setup = function testg_setup (params, callback) {
	executetest("addwidmaster",{"wid":"defaultforauthor","name":"roger"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testh_setup = testh_setup = function testh_setup (params, callback) {
	executetest("addwidmaster",{"wid":"defaultforauthor","name":"roger","metadata.method":"test"});
	executetest("getwidmaster", {"wid":"defaultforauthor"}, "get_color1_result", "");
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
exports.testi_setup = testi_setup = function testi_setup (params, callback) {
    executetest("addwidmaster",{"wid":"sounddto","metadata.method":"sounddto","note":"string"}, "", "");
	// executetest("addwidmaster",{"wid":"colordto","metadata.method":"colordto","hue":"string","sounddto":"onetomany"}, "", "");
	// executetest("addwidmaster",{"wid":"color1","hue":"red","metadata.method":"colordto"}, "", "");
	// executetest("addwidmaster",{"metadata.method":"gojsrel3","wid":"color_sound_relationship","primarywid":"sounddto","secondarywid":"colordto","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");

    // executetest("getwidmaster", {"wid":"sounddto"}, "get_sounddto_result", "");
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This will test the ability to write a dto to the db and retrieve it
exports.testb = testb = function testb (params, callback) {
	config = setconfig1();
	testclearstorage();
	testb_setup();
	params = logverify("alpha_unit_tests","testb_result","get_sounddto_result","","", {"note":"string","wid":"sounddto","metadata.method":"sounddto"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
	// return verifysummary("test_results");
}
// This will test the ability to write a dto to the db, use that dto to write
// a wid with that dto, and get the results of getting that wid.
exports.teste = teste = function teste (params, callback) {
	config = setconfig1();
	testclearstorage();
	teste_setup();
	params = logverify("alpha_unit_tests","teste_result","get_color1_result","","", {"hue":"red","wid":"color1","metadata.method":"defaultdto"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
	// return verifysummary("test_results");
}

exports.testf = testf = function testf (params, callback) {
	config = setconfig1();
	testclearstorage();
	etexecutetest("addwidmaster",{"wid":"sounddto","metadata.method":"sounddto","note":"string"}, "", "");
    executetest("getwidmaster", {"wid":"sounddto"}, "get_sounddto_result", "");
	params = logverify("alpha_unit_tests","testf_result","get_color1_result","","", {"hue":"red","wid":"color1","metadata.method":"defaultdto"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
	// return verifysummary("test_results");
}


exports.testf = testf = function testf (params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {};
	parameters ["wid"] = "green";
	parameters ['executethis'] = addwidmaster;
	var abc = executethis(parameters);
	var jkl = executethis(parameters, execute);
	parameters ["wid"] = "yellow";
	parameters ['executethis'] = "addwidmaster";
	var mno = executethis(parameters, execute);
	delete parameters['executethis'];
	parameters ["wid"] = "blue";
	var def = executethis(parameters, addwidmaster);
	parameters ["wid"] = "red";
	var ghi = 'boo'; //executethis(parameters, "addwidmaster");
	executetest("addwidmaster", {"wid":"different_add_wids","a":abc,"b":def,"a":ghi }, "testf_output", "");
	params = logverify("unit_tests","testf_result","testf_output","","",{"f":"3","g":"4","h":"5"});
	// params = logverify("readstartwid","resultwid","startwid_authordto" ,"","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}

exports.testf_fail = testf_fail = function testf_fail (params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {};
	// parameters ["wid"] = "green";
	// parameters ['executethis'] = addwidmaster;
	// var abc = executethis(parameters);
	// delete parameters['executethis'];
	// parameters ["wid"] = "blue";
	// var def = executethis(parameters, addwidmaster);
	parameters ["wid"] = "red";
	var ghi = executethis(parameters, "addwidmaster");
	executetest("addwidmaster", {"wid":"different_add_wids","a":abc,"b":def,"a":ghi }, "testf_output", "");
	params = logverify("unit_tests","testf_result","testf_output","","",{"executethis":"func_c","f":"3","g":"4","h":"5"});
	// params = logverify("readstartwid","resultwid","startwid_authordto" ,"","",{"age":"00","name":"start wid","wid":"startwid","metadata.method":"authordto","booksdto.0.metadata.method":"booksdto","booksdto.0.wid":"1","booksdto.0.title":"none","booksdto.0.pages":"00","adddto.0.metadata.method":"adddto","adddto.0.wid":"13","adddto.0.actiondto.0.metadata.method":"actiondto","adddto.0.actiondto.0.wid":"14","adddto.0.actiondto.0.action":"none","adddto.0.palettedto.0.metadata.method":"palettedto","adddto.0.palettedto.0.wid":"16","adddto.0.palettedto.0.widname":"joe_jamison","adddto.0.palettedto.0.category":"human","adddto.0.palettedto.0.subcategory":"author","adddto.0.addfield.0.metadata.method":"addfield","adddto.0.addfield.0.wid":"18","adddto.0.addfield.0.fieldname":"name","adddto.0.linkrules.0.metadata.method":"linkrules","adddto.0.linkrules.0.wid":"20","adddto.0.linkrules.0.linkclass":"1","adddto.0.linkrules.0.min":"0","adddto.0.linkrules.0.max":"10","adddto.addfield.fieldname":"name","adddto.addfield.display":"true","adddto.addfield.editable":"true","adddto.addfield.onreadactions":"none","adddto.addfield.oneditactions":"pop_up_alert","adddto.addfield.wid":"addfielddefault","adddto.addfield.metadata.method":"defaultdto"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// To test executethis by sending a function
exports.testg = testg = function testg (params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {"wid":"green", "executethis": addwidmaster};
	var abc = executethis(parameters);
	executetest("addwidmaster", {"this_wid_was_added":abc }, "testg_output", "");
	params = logverify("unit_tests","testg_result","testg_output","","",{"f":"3","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This test passes since execute is not in quotes
exports.testh = testh = function testh () {
	testclearstorage();
	config = setconfig1();
	var parameters = {"executethis": addwidmaster, "wid":"green"};
	var abc = executethis(parameters, execute);
	executetest("addwidmaster", {"this_wid_was_added":abc }, "testh_output", "");
	params = logverify("unit_tests","testh_result","testh_output","","",{"f":"3","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This test fails since execute is in quotes
exports.testi = testi = function testi (params, callback) {
	testclearstorage();
	config = setconfig1();
	var parameters = {"executethis": addwidmaster, "wid":"green"};
	var abc = executethis(parameters, "execute");
	executetest("addwidmaster", {"this_wid_was_added":abc }, "testi_output", "");
	params = logverify("unit_tests","testi_result","testi_output","","",{"f":"3","g":"4","h":"5"});
    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}
// This test tries to call executeparam
exports.testj = testj = function testj (params, callback) {
	testclearstorage();
	config = setconfig1();

	var parameters = {"executethis": executeParam, "wid":"green"};
	var abc = executethis(parameters, "execute");
	executetest("addwidmaster", {"this_wid_was_added":abc }, "testi_output", "");
	params = logverify("unit_tests","testi_result","testi_output","","",{"f":"3","g":"4","h":"5"});

    if (callback instanceof Function) { 
    	callback(params); 
    } else { 
    	return params; 
    }
}


// This will test the ability to have a relationship between 2 wids and use that
// relationship to get the related wids.

//------------------------
exports.ex1 = ex1 = function ex1 () {
	var data = null; 
	data = func_a ({"d":"1", "e":"2"});
	data = func_b (data);
	data = func_c (data); 
	return data;
}

exports.ex3 = ex3 = function ex3 () {
	var data = null; 
	data = {"executethis":"func_a", "d":"1", "e":"2"};
	data = executethis (data);
	data ['executethis'] = 'func_b';
	data = executethis (data);	
	return data;
}

exports.ex4 = ex4 = function ex4 () {
	var data = null; 
	data = {"executethis":"func_a", "d":"1", "e":"2"};
		data = executethis (data);

	data ['executethis'] = 'func_b';
		data = executethis (data);	

	data ['executethis'] = 'func_c';
		data = executethis (data);	
	return data;
}

exports.ex5 = ex5 = function ex5 () {
	var data = null; 
	data = {"executethis":"func_a", "d":"1", "e":"2"};
	data = execute (data, callback);
	return data;
}
// Required for the delay in testing the async portionis
exports.sleep = sleep = function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// Here are the different configs used in the tests


exports.func_f = func_f = function func_f (parameters,  callback) {
	delete parameters["d"];
	parameters["l"] = "you hijacked preexecute...cool";
	printToDiv('func_f',parameters,1);	
	callback(parameters);
}

exports.func_g = func_g = function func_g (parameters,  callback) {
	delete parameters["d"];
	parameters ["l"] = "you hijacked preexecute...cool";
	//func_h (parameters,  callback);
	printToDiv('func_g',parameters,1);	
	callback(func_h (parameters,  callback));
}

exports.func_h = func_h = function func_h (parameters,  callback) {
	delete parameters["d"];
	sleep(1000);
	parameters["m"] = "now you waited for 1000 ms";
	printToDiv('func_h',parameters,1);	
	// callback(parameters);
	target(parameters);
}

exports.func_j = func_j = function func_j (parameters,  callback) {
	delete parameters["d"];
	parameters["j"] = "you hijacked preexecute...hot";
	printToDiv('func_j',parameters,1);	
	callback(parameters);
}

exports.func_k = func_k = function func_k (parameters,  callback) {
	delete parameters["d"];
	parameters["j"] = "did this happen last";
	printToDiv('func_k',parameters,1);	
	callback(parameters);
}

exports.func_m = func_m = function func_m (parameters) {
	delete parameters["d"];
	parameters["m"] = "single parameters";
	printToDiv('func_m',parameters,1);	
	// return executethis(parameters,'func_h');
	return executethis(parameters,'func_async');
}

exports.func_async = func_async = function func_async (parameters,  callback) {
	delete parameters["d"];
	console.log('from func_async');
	// var f = function(){
		// sleep(3000);
		// parameters["m"] = "now you waited for 1000 ms";
		// printToDiv('func_async',parameters,1);	
	// };
	// f();

	// echo ajax request
	echoCall('/echo','GET',false,
		function(data) {
	    	parameters["m"] = "now you waited for the async call";
			printToDiv('func_async_success',parameters,1);
			console.log('from func_async success');
	    },
	    function(data) {
        	parameters["m"] = "now you waited for the async call";
			printToDiv('func_async_error',parameters,1);
			console.log('from func_async error');
	    }
	);
	printToDiv('func_async -- ',parameters,1);		
	// callback(parameters);
	callback(parameters);
}

exports.echoCall = echoCall = function echoCall(url, type,asyncVal, successCallback, errorCallback) {
  jQuery.ajax({
    url: url,
    tupe: type,
    async: asyncVal,
    cache: false,
    dataType: "html",
    success: successCallback,
    error : errorCallback
  });
}

exports.pt2 = pt2 = function pt2 (params, callback) {
	config = setconfig3();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_a","postexecute":"func_c"}, "pt2_output", "");
	params = logverify("unit_tests","pt2_result","pt2_output","","",{"f":"3","g":"4","h":"5"});
}

exports.pt3 = pt3 = function pt3 (params, callback) {
	config = setconfig1();
	executetest("executethis", {"preexecute":"func_j","postexecute":"func_f","executethis":"func_g", "c":"0", "d":"1", "e":"2"}, "pt3_output", "");
	executetest("executethis", {"executethis":"func_k", "x":"0", "y":"1", "z":"2"}, "pt4_output", "");
	params = logverify("unit_tests","pt3_result","pt3_output","","",{"f":"3","g":"4","h":"5"});
}

exports.pt4 = pt4 = function pt4 (params, callback) {
	config = setconfig3();
	executetest("executethis", {"executethis":"func_b", "c":"0", "d":"1", "e":"2","preexecute":"func_a","postexecute":"func_c"}, "pt2_output", "");
	params = logverify("unit_tests","pt2_result","pt2_output","","",{"f":"3","g":"4","h":"5"});
}

exports.pt5 = pt5 = function pt5 (params, callback) {
	config = setconfig3();
	executetest("executethis", {"executethis":"func_m", "c":"0", "d":"1", "e":"2","preexecute":"testa","postexecute":"testc"}, "pt5_output", "");
	// params = logverify("unit_tests","pt5_result","pt5_output","","",{"f":"3","g":"4","h":"5"});
}

exports.q1 = q1 = function q1 (params, callback) {
	executetest("addwidmaster",{"metadata.method":"actiondto","wid":"actiondto","action":"string"}, "", "");
}

exports.rogeri = rogeri = function rogeri (params, callback) {
	//executetest("debugon");
	executetest("addwidmaster",{"metadata.method":"actiondto","wid":"actiondto","action":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"palettedto","wid":"palettedto","widname":"string","category":"string","subcategory":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"addfield","wid":"addfield","fieldname":"string","editable":"string","display":"string","oneditactions":"string","addfielddefault":"inherit"}, "", "");
	
	
	//gojs object
	executetest("addwidmaster",{"metadata.method":"gojsobject","wid":"gojsobject","class":"string","linkFromPortIdProperty":"string","linkToPortIdProperty":"string","nodeDataArray":"onetomany","linkDataArray":"onetomany"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"nodeDataArray","wid":"nodeDataArray", "key":"string", "loc":"string", "leftArray":"onetomany", "topArray":"onetomany", "bottomArray":"onetomany", "rightArray":"onetomany"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"leftArray","wid":"leftArray","class":"string","portColor":"string", "portId":"string"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"topArray","wid":"topArray","class":"string","portColor":"string", "portId":"string"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"bottomArray","wid":"bottomArray","portColor":"string", "portId":"string"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"rightArray","wid":"rightArray","portColor":"string", "portId":"string"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"linkDataArray","wid":"linkDataArray","from":"string", "to":"string", "fromPort":"string", "toPort":"string"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"gojsrel1","wid":"gojsrel1","primarywid":"gojsobject","secondarywid":"nodedataarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"gojsrel2","wid":"gojsrel2","class":"string","primarywid":"gojsobject","secondarywid":"linkdataarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"gojsrel3","wid":"gojsrel3","primarywid":"nodedataarray","secondarywid":"leftarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel4","wid":"gojsrel4","primarywid":"nodedataarray","secondarywid":"toparray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel5","wid":"gojsrel5","primarywid":"nodedataarray","secondarywid":"bottomarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"gojsrel6","wid":"gojsrel6","primarywid":"nodedataarray","secondarywid":"rightarray","relationshiptype":"attributes","metadata.method":"relationshipdto"}, "", "");
	//end gojs object
	
	executetest("addwidmaster",{"metadata.method":"linkrules","wid":"linkrules","linkclass":"string","min":"string","max":"string"}, "", "");	
	executetest("addwidmaster",{"metadata.method":"adddto","wid":"adddto","actiondto":"onetomany","palettedto":"onetomany","addfield":"onetomany","gojsobject":"onetoone","linkrules":"onetomany"}, "", "");
	//create adddto relationships
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_actiondto_adddto","primarywid":"adddto","secondarywid":"actiondto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_palettedto_adddto","primarywid":"adddto","secondarywid":"palettedto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_addfield_adddto","primarywid":"adddto","secondarywid":"addfield"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_gojsobject_adddto","primarywid":"adddto","secondarywid":"gojsobject"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"rel_linkrules_adddto","primarywid":"adddto","secondarywid":"linkrules"}, "", "");
		
	//create book and author dtos
	//sequenceObjList.push({"seq":"seq01","command.action":"add","wid":"booksdto","title":"string","pages":"string","metadata.method":"booksdto"});
	executetest("addwidmaster",{"metadata.method":"booksdto","wid":"booksdto","title":"string","pages":"string"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"authordto","name":"string","age":"string","booksdto":"onetomany","adddto":"onetoone"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"relbooktoauthor","primarywid":"authordto","secondarywid":"booksdto"}, "", "");
	executetest("addwidmaster",{"metadata.method":"relationshipdto","wid":"reladddtotoauthor","primarywid":"authordto","secondarywid":"adddto"}, "", "");
	
	//create a default addfield record
	executetest("addwidmaster",{"wid":"addfielddefault","fieldname":"name","display":"true","editable":"true","onreadactions":"none","oneditactions":"pop_up_alert"}, "", "");
	
	//add some authors and books
	//executetest("debugon");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"startwid","name":"start wid","age":"00","booksdto.title":"none","booksdto.pages":"00"}, "", "");
	//executetest("debugoff");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"joe_jamison","name":"Joe Jamison","age":"32","booksdto.title":"Hello World!","booksdto.pages":"40"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"sarah_jones","name":"Sarah Jones","age":"40","booksdto.title":"The Sands of Time","booksdto.pages":"378"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"mike_williams","name":"Mike Williams","age":"36","booksdto.title":"Attack on the Mainframe","booksdto.pages":"600"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"jerry_stone","name":"Jerry Stone","age":"41","booksdto.title":"Carpentry 101","booksdto.pages":"120"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"elizabeth_heart","name":"Elizabeth Heart","age":"50","booksdto.title":"The X Factor","booksdto.pages":"300"}, "", "");
	
	//add system info (adddto info) to those author wids
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"startwid","adddto.actiondto.action":"none","adddto.palettedto.0.widname":"joe_jamison","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"joe_jamison","adddto.actiondto.action":"{'color_screen':'blue'}","adddto.palettedto.0.widname":"joe_jamison","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"jessica_jamison","adddto.palettedto.1.category":"human","adddto.palettedto.1.subcategory":"wife","adddto.palettedto.2.widname":"mary_morris","adddto.palettedto.2.category":"human","adddto.palettedto.2.subcategory":"sister","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"sarah_jones","adddto.actiondto.action":"{'color_screen':'red'}","adddto.palettedto.0.widname":"sarah_jones","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"james_jones","adddto.palettedto.1.category":"human","adddto.palettedto.1.subcategory":"husband","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"mike_williams","adddto.actiondto.action":"none","adddto.palettedto.0.widname":"mike_williams","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"mister_scruffy","adddto.palettedto.1.category":"pet","adddto.palettedto.1.subcategory":"dog","adddto.palettedto.2.widname":"misses_fluffy","adddto.palettedto.2.category":"pet","adddto.palettedto.2.subcategory":"cat","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"jerry_stone","adddto.actiondto.action":"none","adddto.palettedto.0.widname":"jerry_stone","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.palettedto.1.widname":"lynne_stone","adddto.palettedto.1.category":"human","adddto.palettedto.1.subcategory":"wife","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");
	executetest("addwidmaster",{"metadata.method":"authordto","wid":"elizabeth_heart","adddto.actiondto.action":"{'play_sound':'trumpet.ogg'}","adddto.palettedto.0.widname":"elizabeth_heart","adddto.palettedto.0.category":"human","adddto.palettedto.0.subcategory":"author","adddto.addfield.fieldname":"name","adddto.linkrules.linkclass":"1","adddto.linkrules.min":"0","adddto.linkrules.max":"10"}, "", "");

	//executetest("debugon")
	executetest("getwidmaster", {"wid":"startwid"}, "startwid_get_result", "");

	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"authordto"}, "startwid_authordto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto", "command.convertmethod":"dtonum"}, "startwid_dtonum_bookdto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto", "command.convertmethod":"num"}, "startwid_num_bookdto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"booksdto"}, "startwid_bookdto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"palettedto"}, "startwid_palettedto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"adddto"}, "startwid_adddto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"addfield"}, "startwid_addfield", "");	
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"actiondto"}, "startwid_actiondto", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"linkrules"}, "startwid_linkrules", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"gojsobject"}, "startwid_gojsobject", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"nodeDataArray"}, "startwid_nodeDataArray", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"linkDataArray"}, "startwid_linkdataarray", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"leftarray"}, "startwid_leftarray", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"rightarray"}, "startwid_rightarray", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"bottomarray"}, "startwid_bottomarray", "");
	executetest("getwidmaster", {"wid":"startwid","command.dtotype":"toparray"}, "startwid_toparray", "");
}
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// The standard config with normal order and no redirects
exports.setconfig1 = setconfig1 = function setconfig1() {
    configuration = {};
	configuration.environment='local';

    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 0;
    configuration.preExecute[0].tryorder = 0;
    configuration.preExecute[0].dothis = 'executeFn';
    configuration.preExecute[0].params = {};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 0;
    configuration.preExecute[1].tryorder = 0;
    configuration.preExecute[1].dothis = 'executeParam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 0;
    configuration.preExecute[2].tryorder = 0;
    configuration.preExecute[2].dothis = 'executeDefault';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 0;
    configuration.preExecute[3].tryorder = 0;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 0;
    configuration.midExecute[0].tryorder = 0;
    configuration.midExecute[0].dothis = 'executeFn';
    configuration.midExecute[0].params = {};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 0;
    configuration.midExecute[1].tryorder = 0;
    configuration.midExecute[1].dothis = 'executeParam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 0;
    configuration.midExecute[2].tryorder = 0;
    configuration.midExecute[2].dothis = 'executeDefault';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 0;
    configuration.midExecute[3].tryorder = 0;
    configuration.midExecute[3].dothis = 'server';
    configuration.midExecute[3].params = {};

    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 0;
    configuration.postExecute[0].tryorder = 0;
    configuration.postExecute[0].dothis = 'executeFn';
    configuration.postExecute[0].params = {};
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 0;
    configuration.postExecute[1].tryorder = 0;
    configuration.postExecute[1].dothis = 'executeParam';
    configuration.postExecute[1].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'executeDefault';
    configuration.postExecute[2].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'server';
    configuration.postExecute[2].params = {};

    return {
        "configuration": configuration
    }
}

// This config is to test the redirection of functions. The various ct(x)
// tests make calls to redir_a mapped to func_a, redir_b to func_b and
// redir_c to func_c. The idea is that the tests will have the same output 
// as the tt tests, but with calling all the redir_(x) functions instead.
exports.setconfig2 = setconfig2 = function setconfig2() {
    configuration = {};
	configuration.environment='local';

    configuration.getwid = [];
    configuration.getwid[0] = {};
    configuration.getwid[0].executeorder = 0;
    configuration.getwid[0].tryorder = 0;
    configuration.getwid[0].dothis = 'getfrommongo';
    configuration.getwid[0].params = {};

    configuration.updatewid = [];
    configuration.updatewid[0] = {};
    configuration.updatewid[0].order = 0;
    configuration.updatewid[0].dothis = 'addtomongo';
    configuration.updatewid[0].params = {};

    configuration.querywid = [];
    configuration.querywid[0] = {};
    configuration.querywid[0].order = 0;
    configuration.querywid[0].dothis = 'querywid';
    configuration.querywid[0].params = {};


    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 0;
    configuration.preExecute[0].tryorder = 0;
    configuration.preExecute[0].dothis = 'executeFn';
    configuration.preExecute[0].params = {};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 0;
    configuration.preExecute[1].tryorder = 0;
    configuration.preExecute[1].dothis = 'executeParam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 0;
    configuration.preExecute[2].tryorder = 0;
    configuration.preExecute[2].dothis = 'executeDefault';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 0;
    configuration.preExecute[3].tryorder = 0;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 0;
    configuration.midExecute[0].tryorder = 0;
    configuration.midExecute[0].dothis = 'executeFn';
    configuration.midExecute[0].params = {};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 0;
    configuration.midExecute[1].tryorder = 0;
    configuration.midExecute[1].dothis = 'executeParam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 0;
    configuration.midExecute[2].tryorder = 0;
    configuration.midExecute[2].dothis = 'executeDefault';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 0;
    configuration.midExecute[3].tryorder = 0;
    configuration.midExecute[3].dothis = 'server';
    configuration.midExecute[3].params = {};

    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 0;
    configuration.postExecute[0].tryorder = 0;
    configuration.postExecute[0].dothis = 'executeFn';
    configuration.postExecute[0].params = {};
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 0;
    configuration.postExecute[1].tryorder = 0;
    configuration.postExecute[1].dothis = 'executeParam';
    configuration.postExecute[1].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'executeDefault';
    configuration.postExecute[2].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'server';
    configuration.postExecute[2].params = {};


    configuration.redir_a = [];
    configuration.redir_a[0] = {};
    configuration.redir_a[0].executeorder = 0;
    configuration.redir_a[0].tryorder = 0;
    configuration.redir_a[0].dothis = 'func_a';
    configuration.redir_a[0].params = {};

    configuration.redir_b = [];
    configuration.redir_b[0] = {};
    configuration.redir_b[0].executeorder = 0;
    configuration.redir_b[0].tryorder = 0;
    configuration.redir_b[0].dothis = 'func_b';
    configuration.redir_b[0].params = {};

    
    configuration.redir_c = [];
    configuration.redir_c[0] = {};
    configuration.redir_c[0].executeorder = 0;
    configuration.redir_c[0].tryorder = 0;
    configuration.redir_c[0].dothis = 'func_c';
    configuration.redir_c[0].params = {};

    return {
        "configuration": configuration
    }
   }

// This config is to test redirecting preexecute to function_f and see what happens
exports.setconfig3 = setconfig3 = function setconfig3() {
    configuration = {};
	configuration.environment='local';

    configuration.getwid = [];
    configuration.getwid[0] = {};
    configuration.getwid[0].order = 0;
    configuration.getwid[0].dothis = 'getfrommongo';	
    configuration.getwid[0].params = {};

    configuration.updatewid = [];
    configuration.updatewid[0] = {};
    configuration.updatewid[0].order = 0;
    configuration.updatewid[0].dothis = 'addtomongo';
    configuration.updatewid[0].params = {};

    configuration.querywid = [];
    configuration.querywid[0] = {};
    configuration.querywid[0].order = 0;
    configuration.querywid[0].dothis = 'querywid';
    configuration.querywid[0].params = {};

    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 0;
    configuration.preExecute[0].tryorder = 0;
    configuration.preExecute[0].dothis = 'executeFn';
    configuration.preExecute[0].params = {};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 0;
    configuration.preExecute[1].tryorder = 0;
    configuration.preExecute[1].dothis = 'executeParam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 0;
    configuration.preExecute[2].tryorder = 0;
    configuration.preExecute[2].dothis = 'executeDefault';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 0;
    configuration.preExecute[3].tryorder = 0;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 0;
    configuration.midExecute[0].tryorder = 0;
    configuration.midExecute[0].dothis = 'executeFn';
    configuration.midExecute[0].params = {};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 0;
    configuration.midExecute[1].tryorder = 0;
    configuration.midExecute[1].dothis = 'executeParam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 0;
    configuration.midExecute[2].tryorder = 0;
    configuration.midExecute[2].dothis = 'executeDefault';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 0;
    configuration.midExecute[3].tryorder = 0;
    configuration.midExecute[3].dothis = 'server';
    configuration.midExecute[3].params = {};

    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 0;
    configuration.postExecute[0].tryorder = 0;
    configuration.postExecute[0].dothis = 'executeFn';
    configuration.postExecute[0].params = {};
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 0;
    configuration.postExecute[1].tryorder = 0;
    configuration.postExecute[1].dothis = 'executeParam';
    configuration.postExecute[1].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'executeDefault';
    configuration.postExecute[2].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'server';
    configuration.postExecute[2].params = {};

    return {
        "configuration": configuration
    }
}
// Looking to get preexecute to acually fire func_g...not func_a, as the test calls for
exports.setconfig4 = setconfig4 = function setconfig4() {
    configuration = {};

    configuration.getwid = [];
    configuration.getwid[0] = {};
    configuration.getwid[0].order = 0;
    configuration.getwid[0].dothis = 'getfrommongo';	
    configuration.getwid[0].params = {};

    configuration.updatewid = [];
    configuration.updatewid[0] = {};
    configuration.updatewid[0].order = 0;
    configuration.updatewid[0].dothis = 'addtomongo';
    configuration.updatewid[0].params = {};

    configuration.querywid = [];
    configuration.querywid[0] = {};
    configuration.querywid[0].order = 0;
    configuration.querywid[0].dothis = 'querywid';
    configuration.querywid[0].params = {};

    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 0;
    configuration.preExecute[0].tryorder = 0;
    configuration.preExecute[0].dothis = 'func_g'; // This is the change to remark
    configuration.preExecute[0].params = {};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 0;
    configuration.preExecute[1].tryorder = 0;
    configuration.preExecute[1].dothis = 'executeParam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 0;
    configuration.preExecute[2].tryorder = 0;
    configuration.preExecute[2].dothis = 'executeDefault';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 0;
    configuration.preExecute[3].tryorder = 0;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 0;
    configuration.midExecute[0].tryorder = 0;
    configuration.midExecute[0].dothis = 'executeFn';
    configuration.midExecute[0].params = {};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 0;
    configuration.midExecute[1].tryorder = 0;
    configuration.midExecute[1].dothis = 'executeParam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 0;
    configuration.midExecute[2].tryorder = 0;
    configuration.midExecute[2].dothis = 'executeDefault';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 0;
    configuration.midExecute[3].tryorder = 0;
    configuration.midExecute[3].dothis = 'server';
    configuration.midExecute[3].params = {};

    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 0;
    configuration.postExecute[0].tryorder = 0;
    configuration.postExecute[0].dothis = 'executeFn';
    configuration.postExecute[0].params = {};
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 0;
    configuration.postExecute[1].tryorder = 0;
    configuration.postExecute[1].dothis = 'executeParam';
    configuration.postExecute[1].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'executeDefault';
    configuration.postExecute[2].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'server';
    configuration.postExecute[2].params = {};

    return {
        "configuration": configuration
    }
}
// This is the config to use to test the tryorder...
// mid has the usual settings in an order that should
// be resorted by dothis...if successful, the mid order should
// be the same as it always is, not the way this config is set
exports.setconfig5 = setconfig5 = function setconfig5() {
    configuration = {};
	configuration.environment='local';

    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 0;
    configuration.preExecute[0].tryorder = 0;
    configuration.preExecute[0].dothis = 'executeFn';
    configuration.preExecute[0].params = {};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 0;
    configuration.preExecute[1].tryorder = 0;
    configuration.preExecute[1].dothis = 'executeParam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 0;
    configuration.preExecute[2].tryorder = 0;
    configuration.preExecute[2].dothis = 'executeDefault';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 0;
    configuration.preExecute[3].tryorder = 0;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 10;
    configuration.midExecute[0].tryorder = 10;
    configuration.midExecute[0].dothis = 'server';
    configuration.midExecute[0].params = {};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 4;
    configuration.midExecute[1].tryorder = 4;
    configuration.midExecute[1].dothis = 'executeParam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 7;
    configuration.midExecute[2].tryorder = 7;
    configuration.midExecute[2].dothis = 'executeDefault';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 1;
    configuration.midExecute[3].tryorder = 1;
    configuration.midExecute[3].dothis = 'executeFn';
    configuration.midExecute[3].params = {};

    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 0;
    configuration.postExecute[0].tryorder = 0;
    configuration.postExecute[0].dothis = 'executeFn';
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 0;
    configuration.postExecute[1].tryorder = 0;
    configuration.postExecute[1].dothis = 'executeParam';
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'executeDefault';
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'server';

    return {
        "configuration": configuration
    }
}
// This config is for testing a and b not there, but c is
exports.setconfig6 = setconfig6 = function setconfig6() {
    configuration = {};
	configuration.environment='local';
    
    configuration.preExecute = [];
    configuration.preExecute[0] = {};
    configuration.preExecute[0].executeorder = 0;
    configuration.preExecute[0].tryorder = 0;
    configuration.preExecute[0].dothis = 'executeFn';
    configuration.preExecute[0].params = {'cer1':'alphabits'};
    configuration.preExecute[1] = {};
    configuration.preExecute[1].executeorder = 0;
    configuration.preExecute[1].tryorder = 0;
    configuration.preExecute[1].dothis = 'executeParam';
    configuration.preExecute[1].params = {};
    configuration.preExecute[2] = {};
    configuration.preExecute[2].executeorder = 0;
    configuration.preExecute[2].tryorder = 0;
    configuration.preExecute[2].dothis = 'executeDefault';
    configuration.preExecute[2].params = {};
    configuration.preExecute[3] = {};
    configuration.preExecute[3].executeorder = 0;
    configuration.preExecute[3].tryorder = 0;
    configuration.preExecute[3].dothis = 'server';
    configuration.preExecute[3].params = {};

    configuration.midExecute = [];
    configuration.midExecute[0] = {};
    configuration.midExecute[0].executeorder = 0;
    configuration.midExecute[0].tryorder = 0;
    configuration.midExecute[0].dothis = 'executeFn';
    configuration.midExecute[0].params = {'cer2':'booberry'};
    configuration.midExecute[1] = {};
    configuration.midExecute[1].executeorder = 0;
    configuration.midExecute[1].tryorder = 0;
    configuration.midExecute[1].dothis = 'executeParam';
    configuration.midExecute[1].params = {};
    configuration.midExecute[2] = {};
    configuration.midExecute[2].executeorder = 0;
    configuration.midExecute[2].tryorder = 0;
    configuration.midExecute[2].dothis = 'executeDefault';
    configuration.midExecute[2].params = {};
    configuration.midExecute[3] = {};
    configuration.midExecute[3].executeorder = 0;
    configuration.midExecute[3].tryorder = 0;
    configuration.midExecute[3].dothis = 'server';
    configuration.midExecute[3].params = {};
    configuration.postExecute = [];
    configuration.postExecute[0] = {};
    configuration.postExecute[0].executeorder = 0;
    configuration.postExecute[0].tryorder = 0;
    configuration.postExecute[0].dothis = 'executeFn';
    configuration.postExecute[0].params = {'cer3':'chex'};
    configuration.postExecute[1] = {};
    configuration.postExecute[1].executeorder = 0;
    configuration.postExecute[1].tryorder = 0;
    configuration.postExecute[1].dothis = 'executeParam';
    configuration.postExecute[1].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'executeDefault';
    configuration.postExecute[2].params = {};
    configuration.postExecute[2] = {};
    configuration.postExecute[2].executeorder = 0;
    configuration.postExecute[2].tryorder = 0;
    configuration.postExecute[2].dothis = 'server';
    configuration.postExecute[2].params = {};

    return {
        "configuration": configuration
    }
}

	// configuration.c = [];
    // configuration.c[0] = {};
    // configuration.c[0].executeorder = 0;
    // configuration.c[0].tryorder = 0;
    // configuration.c[0].dothis = 'fire_c';
    // configuration.c[0].params = {};

    // configuration.a = [];
    // configuration.a[0] = {};
    // configuration.a[0].executeorder = 0;
    // configuration.a[0].tryorder = 0;
    // configuration.a[0].dothis = 'func_a';
    // configuration.a[0].params = {'cereal':'alphabits'};

    // configuration.a[0].dothis = {"configuration":"[
				// 									{
				// 									  	configuration.newparam:[];
				// 									    configuration.newparam[0] = {};
				// 									    configuration.newparam[0].executeorder = 0;
				// 									    configuration.newparam[0].tryorder = 0;
				// 									    configuration.newparam[0].dothis = 'do_new_func';       
				// 									}
    // 											]"};