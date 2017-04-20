// pages/cuttingpiece/liner/RadiusR/RadiusR.js
let RadiusRData = [{
  text: '≤6',
  value: {
    concaveR: [0.3, 0],
    onvexR: [0, -0.3]
  }
}, {
  text: '>6～18',
  value: {
    concaveR: [0.4, 0],
    onvexR: [0, -0.4]
  }
}, {
  text: '>18～50',
  value: {
    concaveR: [0.6, 0],
    onvexR: [0, -0.6]
  }
}, {
  text: '>50～120',
  value: {
    concaveR: [0.8, 0],
    onvexR: [0, -0.8]
  }
}, {
  text: '>120～250',
  value: {
    concaveR: [1.2, 0],
    onvexR: [0, -1.2]
  }
}, {
  text: '>250～500',
  value: {
    concaveR: [1.6, 0],
    onvexR: [0, -1.6]
  }
}, {
  text: '>500～800',
  value: {
    concaveR: [2, 0],
    onvexR: [0, -2]
  }
}, {
  text: '>800',
  value: {
    concaveR: [2.6, 0],
    onvexR: [0, -2.6]
  }
}];


Page({
  data: {
    imgUrls: [
      '../../../../imgs/RadiusTolerance1.gif',
      '../../../../imgs/RadiusTolerance2.gif'
    ],
    RadiusRData:RadiusRData,
    RadiusRResult:RadiusRData[0]
  },
  selectedChange: function (e) {
    const val = e.detail.value[0]
    this.setData({
      RadiusRResult: RadiusRData[val]
    })
  }
})