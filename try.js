// document.getElementById("myButton").onclick = function(){



//     var charid1 = document.getElementById("myText1").value;
//     var charid2 = document.getElementById("myText2").value;

//     console.log("Hello",charid1);
//     console.log("Hello",charid2);


// }

// document.getElementById("myButton").onclick = function(){



//     var myName = document.getElementById("myText").value;

//     console.log("Hello",myName);

// }

// document.getElementById("myButton1").onclick = function(){



//     var charid1 = document.getElementById("myText1").value;

//     console.log("Hello",charid1);
//     // console.log("Hello",charid2);


// }
// document.getElementById("myButton2").onclick = function(){

//     var charid2 = document.getElementById("myText2").value;
//     console.log("Hello",charid2);
// }


var charid1 = prompt("Enter Char Name: ");
var charid2 = prompt("Enter Ship Flag Name: ");

main();

function CharBattle(ply1, ply2) {
    var res, valopp, valuser;
    valuser = 0;
    valopp = 0;
    var c
    var _pj_c = 0;
    var _pj_a = ply1
    var _pj_b = Object.keys(ply1).length

    for (; _pj_c < _pj_b; _pj_c += 1) {
        c = _pj_a[_pj_c];
        valuser = valuser+ parseInt(ply1[c]);
        // console.log(type(ply1[c]))
        console.log(typeof(ply1[c]))


    }
    // console.log(typeof(valuser))

    _pj_c = 0;
    _pj_a = ply2;
    _pj_b =  Object.keys(ply2).length
    for (; _pj_c < _pj_b; _pj_c += 1) {
        c = _pj_a[_pj_c];
        valopp += ply2[c];
    }
    console.log(valopp)
    if (valuser > valopp) {
        return "You Win Char Battle";
    } else {
        return "You Lost Char Battle";
    }
}

function FlagBattle(ply1, ply2) {
    var res, valopp, valuser;
    valuser = 0;
    valopp = 0;
    
    var c
    var _pj_c = 0;
    var _pj_a = ply1
    var _pj_b = Object.keys(ply1).length
    for (; _pj_c < _pj_b; _pj_c += 1) {
        c = _pj_a[_pj_c];
        valuser += ply1[c];
    }

    _pj_c = 0;
    _pj_a = ply2;
    _pj_b =  Object.keys(ply2).length
    for (; _pj_c < _pj_b; _pj_c += 1) {
        c = _pj_a[_pj_c];
        valopp += ply2[c];
    }

    if (valuser > valopp) {
        return "You Win Flag Battle";
    } else {
        return "You Lost Flag Battle";
    }


}

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
function main() {
    let prop_char = { "BlackEye": "ABC", "walt": "DEF" }
let prop_flag = { "Parasite": "123", "RAR": "456" }
let base_prop1 = { "Bounty": 65, "Ship Value": 55, "Crew Value": 60, "Popularity": 60, "Treasure": 65, "OVA": 62 }
let base_prop2 = { "Bounty": 52, "Ship Value": 55, "Crew Value": 50, "Popularity": 50, "Treasure": 55, "OVA": 52 }

    if (in_es6(charid1, prop_char)) {
        id1 = prop_char[charid1];
    } else {
        console.log("invalid char name");
    }

    if (in_es6(charid2, prop_flag)) {
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
        alert(CharBattle(user1, opp1));
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
        alert(CharBattle(user1, opp1));
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
        alert(FlagBattle(user2, opp2));
    }

    if (id2 === "456") {
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
        alert(FlagBattle(user2, opp2));
    }
}