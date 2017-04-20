// pages/cuttingpiece/angle/angle.js
let AngleData = [{
  text: '≤10',
  angleTol: '±1°',
  linerTol: '±0.0175L'
},{
  text: '＞10～50',
  angleTol: '±30′',
  linerTol: '±0.0087L'
},{
  text: '＞50～120',
  angleTol: '±20′',
  linerTol: '±0.0058L'
},{
  text: '＞120～400',
  angleTol: '±10′',
  linerTol: '±0.0029L'
},{
  text: '＞400',
  angleTol: '±5′',
  linerTol: '±0.0014L'
}];


Page({
  data: {
    AngleData: AngleData,
    AngleResult: AngleData[0],
  },
  selectedChange: function (e) {
    const val = e.detail.value[0]
    this.setData({
      AngleResult: AngleData[val]
    })
  }
})