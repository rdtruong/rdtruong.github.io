    // QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
    //   var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
    //   assert.deepEqual( objectValues(data), ["one","two","crayons","dangle"]);

  
   function objectValues(data){
     var testObject=[];
       for (var key in data){
          testObject.push(data[key]);
       } return testObject;
   }
    //   /* global keysToString */
    // QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
    //   var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
    //   assert.equal(keysToString(data), "a b ponies dingle");
    // });
//     function keysToString(data){
//       var testString="";
//       for (var key in data){
//           testString+=key;
//       }return testString;
//   }
      function keysToString(data){
		return Object.keys(data).join(" ");
       }
   //  // /* global valuesToString */
   //  // QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
   //  //   var data = {a: "one", boolean: false, b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
   //  //   assert.equal(valuesToString(data), "one two crayons dangle");
   //  // });
        function valuesToString(data){
          var test=[];
          for(var key in data){
              if (typeof (data[key]) === "string"){
                test.push(data[key]);
              }
          }  return test.join(" ");
        }
   //     /* global arrayOrObject  */
   //  QUnit.test("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
   //    assert.equal(arrayOrObject({a:"one"}), "object");
   //    assert.equal(arrayOrObject([1,2,{}]), "array");
   //  });
 function arrayOrObject(test1){
  if (Array.isArray(test1)){
   return "array";
  }if (typeof test1==="object"){return "object";}
 }
   //  /* global capitalizeWord*/
   //  QUnit.test("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", function(assert){
   //    assert.equal(capitalizeWord("greg"), "Greg");
   //    assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
   //    assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
   //  });

function capitalizeWord(paraa){
return  paraa[0].toUpperCase()+paraa.slice(1);
}
   //  /* global  capitalizeAllWords*/
   //  QUnit.test("capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ", function(assert){
   //    assert.equal(capitalizeAllWords("one two three four"), "One Two Three Four");
   //    assert.equal(capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
   //  });
function capitalizeAllWords(capthis) {
     capthis = capthis.toLowerCase().split(' ');               

     for(var i = 0; i < capthis.length; i++){                
      capthis[i] = capthis[i].split('');                    
		capthis[i][0] = capthis[i][0].toUpperCase();
		capthis[i] = capthis[i].join(''); 
     }
     return capthis.join(' '); 
}
   //  /* global  welcomeMessage*/
   //  QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
   //    assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
   //    assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
   //  });
function welcomeMessage(data){
    return "Welcome "+ data.name[0].toUpperCase()+data.name.slice(1)+"!";
}
   //  /* global  profileInfo*/
   //  QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
   //    assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
   //    assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
   //  });
function profileInfo(data){
    return  data.name[0].toUpperCase()+data.name.slice(1)+" is a "+ data.species[0].toUpperCase()+data.species.slice(1);
}
   //  /* global  maybeNoises*/
   //  QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
   //    assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
   //    assert.equal(maybeNoises({noises: []}), "there are no noises");
   //    assert.equal(maybeNoises({}), "there are no noises");
   //  });
function maybeNoises(data){
  if(data.noises==0){return "there are no noises"}
  if(data.noises===undefined){return "there are no noises"}
  if(data.noises!=0){return data.noises.join(" ");} 
}
   //  /* global  hasWord*/
   //  QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
   //    var data = "This is a super awesome string of words";
   //    assert.strictEqual(hasWord(data, "awesome"), true);
   //    assert.strictEqual(hasWord(data, "words"), true);
   //    assert.strictEqual(hasWord(data, "turtle"), false);
   //  });
function hasWord(data,word){
    return data.includes(word);
}
   //  /* global addFriend */
   //  QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
   //    assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
   //    assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
   //  });
function addFriend(name,obj){
        obj.friends.push(name);  //.push into array
          return obj;
}
   //  /* global isFriend */
   //  QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
   //    assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
   //    assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
   //    assert.equal(isFriend("chuck",{}), false);
   //  });
   function isFriend(name,obj){
 if(obj.friends===undefined){return false;}
 for (var i=0; i<obj.friends.length;i++)
   if (name===obj.friends[i]){return true;}
   if (name!==obj.friends[i]){return false;}
}
   
// function isFriend(name,obj){
//   if(Object.keys(obj)==0){return false}
//   for (var i=0; i<obj.friends.length;i++)
//   if(name===obj.friends[i]){return true;}
//   if(name===obj.friends[i]){return false;}
//   else{return false;}
//   }


   //  /* global nonFriends */
   //  QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
   //    var data = [
   //      {name: "Jimmy", friends:["Sara", "Liza"]},
   //      {name: "Bob", friends:[]},
   //      {name: "Liza", friends: ["Jimmy"]},
   //      {name: "Sara", friends: ["Jimmy"]}
   //    ];
   //    assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
   //    assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
   //    assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
   //  });
function nonFriends(name, data){
    var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<data.length; i++){
        if(name === data[i].name){
            current = data[i];
        }else{
            nameList.push(data[i].name);
        }
    }
    if(current === null){
        return nameList;
    }
    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }
    return result;
}
   //  /* global updateObject */
   //  QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
var data = {a: "one", b: "two", "hokey": false};
   //    assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
                               //replace key b with with value "three"..............................................
var data = {a: "one", b: "two", "hokey": false};
   //    assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
                               // add key ponies with value "yes"....................................................................
var data = {a: "one", b: "two", "hokey": false};
   //    assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
                               //replace key a with value Infinity.................................................
   //  });
function updateObject(data, key1,value1){
 data[key1]=value1;
return data;
}
   //  /* global removeProperties */
   //  QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
var data = {a: "one", b: "two", "hokey": false};
   //    removeProperties(data, ["a","hokey"]);
   //    assert.deepEqual(data, {b: "two"});
   //    removeProperties(data, ["b"])
   //    assert.deepEqual(data, {a: "one", "hokey": false});
   //    removeProperties(data, []);
   //    assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
   //  });

function removeProperties(data, array){
array.forEach(function(key){
  delete data[key];
});
  return data;
}
   //  /* global dedup */
   //  QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
var data = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];

   //    assert.deepEqual( dedup(data), [1,2,3,4,5,"a","b","c"]);
   //  });
   
// function dedup(data){
//     var temp=[];
//     var j=1;
//     for (var i =0; i<data.length; i++){
//         temp[data[i]]=j;
//     }var final=[];
//     for(var key in temp)
//     final.push(key);
//   return final;
// }
   
function dedup(data){
  var nodupe = [];
  for(var x = 0; x < data.length; x++){
    if(nodupe.indexOf(data[x]) == -1)nodupe.push(data[x]);
  }
  return nodupe;
}
console.log(dedup([1,4,2,7,1,5,9,2,4,7,2]));
