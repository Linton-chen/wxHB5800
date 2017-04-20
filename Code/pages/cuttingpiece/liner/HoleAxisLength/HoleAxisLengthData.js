// 定义获取行索引
function HoleAxisLength(bs) {
	// 基本尺寸表格
	this.HoleAxisLengthData = [{
		"dimension": [0.1,0.3],
		"condition":["=","="],
		"D":{
			"I":{
				"upper":0.05,
				"lower":0
			},
			"II":{
				"upper":0.06,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.05
			},
			"II":{
				"upper":0,
				"lower":-0.06
			}
		},
		"L":0.05
	},{
		"dimension": [0.3,0.6],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.06,
				"lower":0
			},
			"II":{
				"upper":0.08,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.06
			},
			"II":{
				"upper":0,
				"lower":-0.08
			}
		},
		"L":0.1
	},{
		"dimension": [0.6,1],
		"condition":[">","<"],
		"D":{
			"I":{
				"upper":0.07,
				"lower":0
			},
			"II":{
				"upper":0.11,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.07
			},
			"II":{
				"upper":0,
				"lower":-0.11
			}
		},
		"L":0.1
	},{
		"dimension": [1,3],
		"condition":["=","="],
		"D":{
			"I":{
				"upper":0.1,
				"lower":0
			},
			"II":{
				"upper":0.14,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.1
			},
			"II":{
				"upper":0,
				"lower":-0.14
			}
		},
		"L":0.12
	},{
		"dimension": [3,6],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.12,
				"lower":0
			},
			"II":{
				"upper":0.18,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.12
			},
			"II":{
				"upper":0,
				"lower":-0.18
			}
		},
		"L":0.15
	},{
		"dimension": [6,10],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.15,
				"lower":0
			},
			"II":{
				"upper":0.22,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.15
			},
			"II":{
				"upper":0,
				"lower":-0.22
			}
		},
		"L":0.18
	},{
		"dimension": [10,18],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.18,
				"lower":0
			},
			"II":{
				"upper":0.27,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.18
			},
			"II":{
				"upper":0,
				"lower":-0.27
			}
		},
		"L":0.21
	},{
		"dimension": [18,30],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.21,
				"lower":0
			},
			"II":{
				"upper":0.33,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.21
			},
			"II":{
				"upper":0,
				"lower":-0.33
			}
		},
		"L":0.26
	},{
		"dimension": [30,50],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.25,
				"lower":0
			},
			"II":{
				"upper":0.39,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.25
			},
			"II":{
				"upper":0,
				"lower":-0.39
			}
		},
		"L":0.31
	},{
		"dimension": [50,80],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.3,
				"lower":0
			},
			"II":{
				"upper":0.46,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.3
			},
			"II":{
				"upper":0,
				"lower":-0.46
			}
		},
		"L":0.37
	},{
		"dimension": [80,120],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.35,
				"lower":0
			},
			"II":{
				"upper":0.54,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.35
			},
			"II":{
				"upper":0,
				"lower":-0.54
			}
		},
		"L":0.43
	},{
		"dimension": [120,180],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.4,
				"lower":0
			},
			"II":{
				"upper":0.63,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.4
			},
			"II":{
				"upper":0,
				"lower":-0.63
			}
		},
		"L":0.5
	},{
		"dimension": [180,250],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.46,
				"lower":0
			},
			"II":{
				"upper":0.72,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.46
			},
			"II":{
				"upper":0,
				"lower":-0.72
			}
		},
		"L":0.57
	},{
		"dimension": [250,315],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.52,
				"lower":0
			},
			"II":{
				"upper":0.81,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.52
			},
			"II":{
				"upper":0,
				"lower":-0.81
			}
		},
		"L":0.65
	},{
		"dimension": [315,400],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.57,
				"lower":0
			},
			"II":{
				"upper":0.89,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.57
			},
			"II":{
				"upper":0,
				"lower":-0.89
			}
		},
		"L":0.7
	},{
		"dimension": [400,500],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.63,
				"lower":0
			},
			"II":{
				"upper":0.97,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.63
			},
			"II":{
				"upper":0,
				"lower":-0.97
			}
		},
		"L":0.77
	},{
		"dimension": [500,630],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.7,
				"lower":0
			},
			"II":{
				"upper":1.1,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.7
			},
			"II":{
				"upper":0,
				"lower":-1.1
			}
		},
		"L":0.87
	},{
		"dimension": [630,800],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.8,
				"lower":0
			},
			"II":{
				"upper":1.25,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.8
			},
			"II":{
				"upper":0,
				"lower":-1.25
			}
		},
		"L":1
	},{
		"dimension": [800,1000],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":0.9,
				"lower":0
			},
			"II":{
				"upper":1.4,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-0.9
			},
			"II":{
				"upper":0,
				"lower":-1.4
			}
		},
		"L":1.15
	},{
		"dimension": [1000,1250],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":1.05,
				"lower":0
			},
			"II":{
				"upper":1.65,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-1.05
			},
			"II":{
				"upper":0,
				"lower":-1.65
			}
		},
		"L":1.3
	},{
		"dimension": [1250,1600],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":1.25,
				"lower":0
			},
			"II":{
				"upper":1.95,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-1.25
			},
			"II":{
				"upper":0,
				"lower":-1.95
			}
		},
		"L":1.55
	},{
		"dimension": [1600,2000],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":1.5,
				"lower":0
			},
			"II":{
				"upper":2.3,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-1.5
			},
			"II":{
				"upper":0,
				"lower":-2.3
			}
		},
		"L":1.85
	},{
		"dimension": [2000,2500],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":1.75,
				"lower":0
			},
			"II":{
				"upper":2.8,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-1.75
			},
			"II":{
				"upper":0,
				"lower":-2.8
			}
		},
		"L":2.2
	},{
		"dimension": [2500,3150],
		"condition":[">","="],
		"D":{
			"I":{
				"upper":2.1,
				"lower":0
			},
			"II":{
				"upper":3.3,
				"lower":0
			}
		},
		"d":{
			"I":{
				"upper":0,
				"lower":-2.1
			},
			"II":{
				"upper":0,
				"lower":-3.3
			}
		},
		"L":2.7
	}];
	
	var minSize = this.HoleAxisLengthData[0]['dimension'][0];
	var maxSize = this.HoleAxisLengthData[this.HoleAxisLengthData.length-1].dimension[1];
	if (bs<minSize || bs > maxSize) {
		throw new Error("超出查询范围！"); 
	}
	this.basicSize = bs;
	this.index = this._getIndex();
}
 

HoleAxisLength.prototype._getIndex = function(){
	if (Math.abs(this.basicSize - 0.1)<0.000001) {
		return 0;
	}
	if (Math.abs(this.basicSize - 1)<0.000001) {
		return 3;
	}  
	for(var i = 0 ; i< this.HoleAxisLengthData.length; i++) {
		var temp = this.HoleAxisLengthData[i]; 
		if (this.basicSize > temp.dimension[0] && this.basicSize <= temp.dimension[1]) {
			return i;
		} 
	}
}
HoleAxisLength.prototype.getLevelIHole = function() {
	return this.HoleAxisLengthData[this.index].D.I;
}

HoleAxisLength.prototype.getLevelIAxis = function() {
	return this.HoleAxisLengthData[this.index].d.I;
}

HoleAxisLength.prototype.getLevelIIHole = function() {
	return this.HoleAxisLengthData[this.index].D.II;
}

HoleAxisLength.prototype.getLevelIIAxis = function() {
	return this.HoleAxisLengthData[this.index].d.II;
}

HoleAxisLength.prototype.getLength = function() {
	return this.HoleAxisLengthData[this.index].L;
}


module.exports = HoleAxisLength;