﻿var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;
var AmmoDisplay : GameObject;
var PickUpAudio : AudioSource;

var ObjectiveLabel : GameObject;
var ObjectiveComplete : GameObject;



function Update(){
    TheDistance = PlayerCasting.DistanceFromTarget;


}

function OnMouseOver(){
    if(TheDistance <= 0.0002){
        TextDisplay.GetComponent.<Text>().text = "Take 9mm Pistol";
       
    }
    if(Input.GetButtonDown("Action")){
        if(TheDistance <= 1){
            TakeNineMil();
            if(ObjectiveLabel.activeSelf){
            ObjectiveComplete.SetActive(true);

            }

           

        }
    }
}

function OnMouseExit(){
    TextDisplay.GetComponent.<Text>().text = "";
}

function TakeNineMil(){
    PickUpAudio.Play();
    transform.position = Vector3(0,-1000, 0);
    FakeGun.SetActive(false);

    RealGun.SetActive(true);
    AmmoDisplay.SetActive(true);


}

