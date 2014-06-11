﻿#pragma strict
public var myCamera: GameObject;
public var lvlFinished: boolean;
public var goodSpawn: GameObject;
public var badSpawn: GameObject;

function Start () {
lvlFinished=false;
}

function Update () {

if(lvlFinished==true){
transform.eulerAngles = Vector3(0,180,0);
}
	

}

function OnCollisionEnter(collision : Collision) {
		// Debug-draw all contact points and normals
//	Debug.Log(collision.transform.tag);
//	Debug.Log(collision.transform.name);
	if(collision.transform.tag=="badSpawn"){
	
		Destroy(collision.gameObject);
		this.SendMessage("deadAnimation");	
		myCamera.SendMessage("decreaseHP");
		
	
	}
	if(collision.transform.tag=="goodSpawn"){
	

		Destroy(collision.gameObject);
		this.SendMessage("speedBoost");
		myCamera.SendMessage("increaseHP");
	
	}
	if(collision.transform.name=="LvlFinished"){
	

				lvlFinished=true;
				//Destroy(collision.gameObject);
				collision.gameObject.SendMessage("lvlFinished");
				this.SendMessage("lvlFinished");
		
	
	}





}




