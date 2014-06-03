require("should");
var _ = require("../lib/app");

describe("Merge Objects", function(){
	it("should merge all the properties of objects", function(){
		console.log("");
		var obj1 = {
			"a" : "1",
			"b"	: "2"
		};
		var obj2 = {
			"c"	: "3"
		};
		var obj = _.merge(obj1,obj2); 
		"1".should.equal(obj.a);
		"2".should.equal(obj.b);
		"3".should.equal(obj.c);
		console.log("Merged object is as follow:");
		console.log(obj);
	});

	it("should merge all the properties including complex properties of objects", function(){
		console.log("");
		var obj1 = {
			"a"	: { 
				"c"	: "100"
			},
			"b"	: [ "200", "201", "202" ]
		};
		var obj2 = {
			"c" : "3"
		};
		var obj = _.merge(obj2, obj1);
		"3".should.equal(obj.c);
		"200".should.equal(obj.b[0]);
		"100".should.equal(obj.a.c);
		console.log("Merged object is as follow:");
		console.log(obj);
	});

	it("should merge and overwrite some properties", function(){
		console.log("");
		var obj1 = {
			"a"	: { 
				"c"	: "100"
			},
			"b"	: [ "200", "201", "202" ]
		};
		var obj2 = {
			"a" : {
				"b" : "101"
			},
			"b" : ["210"],
			"c" : "3"
		};
		var obj = _.merge(obj1, obj2);
		"3".should.equal(obj.c);
		"210".should.equal(obj.b[0]);
		"100".should.equal(obj.a.c);
		"101".should.equal(obj.a.b);
		console.log("Merged object is as follow:");
		console.log(obj);
	});
});


