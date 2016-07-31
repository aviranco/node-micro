'use strict';

const MAX_MICRO_NODES = 10;

/**
* Micro Node instance.
**/
class MicroNode{
	constructor(cb, options){
		this._maxMicroNodes = options.maxMicroNodes MAX_MICRO_NODES;
		this._job = cb;
	}

	run(){
		this._job();
	}
}