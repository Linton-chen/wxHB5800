// pages/cuttingpiece/liner/CornorChamAndAngle/CornorChamAndAngle.js
let CornorChamData = [{
  text: '0.1',
  value: '±0.07',
  angleTol: '±5°'
}, {
  text: '>0.1～<0.3',
  value: '±0.1',
  angleTol: '±5°'
}, {
  text: '0.3～0.5',
  value: '±0.2',
  angleTol: '±5°'
}, {
  text: '>0.5～1',
  value: '±0.3',
  angleTol: '±5°'
}, {
  text: '>1～3',
  value: '±0.5',
  angleTol: '±5°'
}, {
  text: '>3～6',
  value: '±1.0',
  angleTol: '±5°'
}, {
  text: '>6～30',
  value: '±2.0',
  angleTol: '±5°'
}, {
  text: '>30～120',
  value: '±3.0',
  angleTol: '±5°'
}];


Page({
  data: {
    CornorChamData: CornorChamData,
    CornorChamResult: CornorChamData[0],
  },
  selectedChange: function (e) {
    const val = e.detail.value[0]
    this.setData({
      CornorChamResult: CornorChamData[val]
    })
  }
})