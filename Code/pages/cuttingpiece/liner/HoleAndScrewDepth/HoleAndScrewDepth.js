// pages/cuttingpiece/liner/HoleAndScrewDepth/HoleAndScrewDepth.js
let HoleLengthData = [{
  text: '0.1～0.3',
  value: {
    upper: "+0.10",
    lower: "-0.05"
  }
}, {
  text: '>0.3～<1',
  value: {
    upper: "+0.20",
    lower: "-0.10"
  }
}, {
  text: '1～10',
  value: {
    upper: "+0.50",
    lower: "-0.25"
  }
}, {
  text: '>10～315',
  value: {
    upper: "+1.0",
    lower: "-0.5"
  }
},]

let ScrewLengthData = [{
  text: '≤0.6',
  value: {
    upper: "+0.5",
    lower: "-0.5"
  }
}, {
  text: '0.7～1.25',
  value: {
    upper: "+1.0",
    lower: "-0.5"
  }
}, {
  text: '1.5～2.5',
  value: {
    upper: "+1.5",
    lower: "-1.0"
  }
}, {
  text: '3～4',
  value: {
    upper: "+2.0",
    lower: "-1.0"
  }
},]

let HoleLengthDataIndex = HoleLengthData.map(function (item) {
  return item.text;
})
let ScrewLengthDataIndex = ScrewLengthData.map(function (item) {
  return item.text;
})

Page({
  data: {
    HoleLengthResult: null,
    ScrewLengthResult: null
  },
  showHoleLengthActionSheet: function () {
    let _this = this;
    wx.showActionSheet({
      itemList: HoleLengthDataIndex,
      success: function (tapObj) {
        let tapIndex = tapObj.tapIndex
        if (tapIndex !== undefined) {
          _this.setData({
            HoleLengthResult: HoleLengthData[tapIndex]
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  showScrewLengthActionSheet: function () {
    let _this = this;
    wx.showActionSheet({
      itemList: ScrewLengthDataIndex,
      success: function (tapObj) {
        let tapIndex = tapObj.tapIndex
        if (tapObj.tapIndex !== undefined) {
          _this.setData({
            ScrewLengthResult: ScrewLengthData[tapIndex]
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})