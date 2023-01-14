// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var _pj;

var base_prop1, base_prop2, charid1, charid2, id1, id2, opp1, opp2, prop_char, prop_flag, user1, user2;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

function CharBattle(ply1, ply2) {
  var res, valopp, valuser;
  valuser = 0;
  valopp = 0;

  for (var c, _pj_c = 0, _pj_a = ply1, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    c = _pj_a[_pj_c];
    valuser += ply1[c];
  }

  for (var c, _pj_c = 0, _pj_a = ply2, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    c = _pj_a[_pj_c];
    valopp += ply2[c];
  }

  if (valuser > valopp) {
    res = "You Win Char Battle";
  } else {
    res = "You Lost Char Battle";
  }

  return res;
}

function FlagBattle(ply1, ply2) {
  var res, valopp, valuser;
  valuser = 0;
  valopp = 0;

  for (var c, _pj_c = 0, _pj_a = ply1, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    c = _pj_a[_pj_c];
    valuser += ply1[c];
  }

  for (var c, _pj_c = 0, _pj_a = ply2, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    c = _pj_a[_pj_c];
    valopp += ply2[c];
  }

  if (valuser > valopp) {
    res = "You Win Flag Battle";
  } else {
    res = "You Lost Flag Battle";
  }

  return res;
}

// charid1 = prompt("Enter Char Name: ");
// charid2 = prompt("Enter Ship Flag Name: ");
document.getElementById("myButton").onclick = function(){



    var charid1 = document.getElementById("myText1").value;
    var charid2 = document.getElementById("myText2").value;

    console.log(new main(charid1, charid2));
    
    // console.log("Hello",charid2);


}
// document.getElementById("myButton").onclick = function(){

//     var charid2 = document.getElementById("myText2").value;
//     console.log(new main(charid2));
// }

function main(charid1, charid2){
    prop_char = {
    "BlackEye": "ABC",
    "walt": "DEF"
    };
    prop_flag = {
    "Parasite": "123",
    "RAR": "456"
    };
    base_prop1 = {
    "Bounty": 65,
    "Ship Value": 55,
    "Crew Value": 60,
    "Popularity": 60,
    "Treasure": 65,
    "OVA": 62
    };
    base_prop2 = {
    "Bounty": 52,
    "Ship Value": 55,
    "Crew Value": 50,
    "Popularity": 50,
    "Treasure": 55,
    "OVA": 52
    };

    console.log(1)

    if (_pj.in_es6(charid1, prop_char)) {
    id1 = prop_char[charid1];
    } else {
    console.log("invalid char name");
    }

    if (_pj.in_es6(charid2, prop_flag)) {
    id2 = prop_flag[charid2];
    } else {
    console.log("Invalid Flag Name");
    }

    if (id1 === "ABC") {
    user1 = {
        "Bounty": 65,
        "Ship Value": 55,
        "Crew Value": 60,
        "Popularity": 60,
        "Treasure": 65,
        "OVA": 62
    };
    opp1 = {
        "Bounty": 52,
        "Ship Value": 55,
        "Crew Value": 50,
        "Popularity": 50,
        "Treasure": 55,
        "OVA": 52
    };
    alert(new CharBattle(user1, opp1));
    }

    if (id1 === "DEF") {
    user1 = {
        "Bounty": 52,
        "Ship Value": 55,
        "Crew Value": 50,
        "Popularity": 50,
        "Treasure": 55,
        "OVA": 52
    };
    opp1 = {
        "Bounty": 65,
        "Ship Value": 55,
        "Crew Value": 60,
        "Popularity": 60,
        "Treasure": 65,
        "OVA": 62
    };
    console.log(new CharBattle(user1, opp1));
    }

    if (id2 === "123") {
    user2 = {
        "Hull": 62,
        "Rudder": 56,
        "Sail": 60,
        "Popularity": 61,
        "Anchor": 64,
        "Mast": 62
    };
    opp2 = {
        "Hull": 72,
        "Rudder": 53,
        "Sail": 75,
        "Popularity": 61,
        "Anchor": 64,
        "Mast": 67
    };
    console.log(new FlagBattle(user2, opp2));
    }

    if (id1 === "456") {
    user2 = {
        "Hull": 72,
        "Rudder": 53,
        "Sail": 75,
        "Popularity": 61,
        "Anchor": 64,
        "Mast": 67
    };
    opp2 = {
        "Hull": 62,
        "Rudder": 56,
        "Sail": 60,
        "Popularity": 61,
        "Anchor": 64,
        "Mast": 62
    };
    console.log(new FlagBattle(user2, opp2));
    }
}