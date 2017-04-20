// pages/cuttingpiece/shapePosition/RadialRunoutAndSymmetry/RadialRunoutAndSymmetry.js
let RadialRunoutAndSymmetryData=[{
  text: '≤3',
  tol:'0.12'
},{
  text: '>3～6',
  tol:'0.15'
},{
  text: '>6～10',
  tol:'0.20'
},{
  text: '>10～18',
  tol:'0.25'
},{
  text: '>18～30',
  tol:'0.3'
},{
  text: '>30～50',
  tol:'0.4'
},{
  text: '>50～120',
  tol:'0.5'
},{
  text: '>120～250',
  tol:'0.6'
},{
  text: '>250～500',
  tol:'0.8'
},{
  text: '>500～800',
  tol:'1.0'
},{
  text: '>800～1250',
  tol:'1.2'
},{
  text: '>1250～2000',
  tol:'1.5'
},{
  text: '>2000～3150',
  tol:'2.0'
}]
Page({
  data: {
    RadialRunoutAndSymmetryData: RadialRunoutAndSymmetryData,
    RadialRunoutAndSymmetryResult: RadialRunoutAndSymmetryData[0],
  },
  selectedChange: function (e) {
    const val = e.detail.value[0]
    this.setData({
      RadialRunoutAndSymmetryResult: RadialRunoutAndSymmetryData[val]
    })
  }
})