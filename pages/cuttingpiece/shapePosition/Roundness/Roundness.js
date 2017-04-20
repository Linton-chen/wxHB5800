// pages/cuttingpiece/shapePosition/Roundness/Roundness.js
let RoundnessData = [{
  text: '≤3',
  tol:'0.060'
},{
  text: '>3～6',
  tol:'0.075'
},{
  text: '>6～10',
  tol:'0.090'
},{
  text: '>10～18',
  tol:'0.11'
},{
  text: '>18～30',
  tol:'0.13'
},{
  text: '>30～50',
  tol:'0.16'
},{
  text: '>50～80',
  tol:'0.19'
},{
  text: '>80～120',
  tol:'0.22'
},{
  text: '>120～180',
  tol:'0.25'
},{
  text: '>180～250',
  tol:'0.29'
},{
  text: '>250～315',
  tol:'0.32'
},{
  text: '>315～400',
  tol:'0.36'
},{
  text: '>400～500',
  tol:'0.40'
},{
  text: '>500～630',
  tol:'0.44'
},{
  text: '>630～800',
  tol:'0.50'
},{
  text: '>800～1000',
  tol:'0.56'
},{
  text: '>1000～1250',
  tol:'0.66'
},{
  text: '>1250～1600',
  tol:'0.78'
},{
  text: '>1600～2000',
  tol:'0.92'
},{
  text: '>2000～2500',
  tol:'1.10'
},{
  text: '>2500～3150',
  tol:'1.35'
}];


Page({
  data: {
    RoundnessData: RoundnessData,
    RoundnessResult: RoundnessData[0],
  },
  selectedChange: function (e) {
    const val = e.detail.value[0]
    this.setData({
      RoundnessResult: RoundnessData[val]
    })
  }
})