# from flask import *
# import json, time

# app=Flask(__name__)

 

def CharBattle(ply1,ply2):
    valuser=0
    valopp=0
    for c in ply1:
        valuser+=ply1[c]
    for c in ply2:
        valopp+=ply2[c]
    
    if valuser>valopp:
        res="You Win Char Battle"
    else:
        res="You Lost Char Battle"
    return res

def FlagBattle(ply1,ply2):
    valuser=0
    valopp=0
    for c in ply1:
        valuser+=ply1[c]
    for c in ply2:
        valopp+=ply2[c]
    
    if valuser>valopp:
        res="You Win Flag Battle"
    else:
        res="You Lost Flag Battle"
    return res





#  if __name__ == "__main__":
charid1 = input("Enter Char Name: ")
charid2 = input("Enter Ship Flag Name: ")
prop_char={"BlackEye":"ABC","walt":"DEF"}
prop_flag={"Parasite":"123", "RAR":"456"}
base_prop1={"Bounty":65, "Ship Value": 55, "Crew Value": 60, "Popularity": 60, "Treasure": 65, "OVA": 62}
base_prop2={"Bounty":52, "Ship Value": 55, "Crew Value": 50, "Popularity": 50, "Treasure": 55, "OVA": 52}
if charid1 in prop_char:
    id1 = prop_char[charid1]
else:
    print("invalid char name")
if charid2 in prop_flag:
    id2 = prop_flag[charid2]
else: 
    print("Invalid Flag Name")
if id1 == "ABC":
    user1={"Bounty":65, "Ship Value": 55, "Crew Value": 60, "Popularity": 60, "Treasure": 65, "OVA": 62}
    opp1={"Bounty":52, "Ship Value": 55, "Crew Value": 50, "Popularity": 50, "Treasure": 55, "OVA": 52}
    print(CharBattle(user1,opp1))
if id1 =="DEF":
    user1={"Bounty":52, "Ship Value": 55, "Crew Value": 50, "Popularity": 50, "Treasure": 55, "OVA": 52}
    opp1={"Bounty":65, "Ship Value": 55, "Crew Value": 60, "Popularity": 60, "Treasure": 65, "OVA": 62}
    print(CharBattle(user1,opp1))

if id2 == "123":
    user2={"Hull":62, "Rudder": 56, "Sail": 60, "Popularity": 61, "Anchor": 64, "Mast": 62}
    opp2={"Hull":72, "Rudder": 53, "Sail": 75, "Popularity": 61, "Anchor": 64, "Mast": 67}
    print(FlagBattle(user2,opp2))
if id1 =="456":
    user2={"Hull":72, "Rudder": 53, "Sail": 75, "Popularity": 61, "Anchor": 64, "Mast": 67}
    opp2={"Hull":62, "Rudder": 56, "Sail": 60, "Popularity": 61, "Anchor": 64, "Mast": 62}
    print(FlagBattle(user2,opp2))
