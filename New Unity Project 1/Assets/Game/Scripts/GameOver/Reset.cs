﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Reset : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GlobalScore.score = 0;
		GlobalAmmo.CurrentAmmo = 0;
		GlobalAmmo.LoadedAmmo = 0;
	}
}
