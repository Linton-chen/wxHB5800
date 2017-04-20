// pages/cuttingpiece/liner/HoleAxisLength/HoleAxisLength.js
var HoleAxisLength = require("./HoleAxisLengthData.js")

Page({
  data: {
    ToleranceType: 'D',
    ToleranceLevel: 'I',
    basicDim: 0,
    result: undefined
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  selectToleranceTypeHole: function () {
    this.setData({
      ToleranceType: 'D'
    })
    if (this.data.basicDim === "" || this.data.basicDim === 0) {
      return
    } else {
      this.formSubmit()
    }
  },
  selectToleranceTypeAxis: function (e) {
    console.log(e)
    this.setData({
      ToleranceType: 'd'
    })
    if (this.data.basicDim === "" || this.data.basicDim === 0) {
      return
    } else {
      this.formSubmit()
    }
  },
  selectToleranceTypeLength: function () {
    this.setData({
      ToleranceType: 'L'
    })
    if (this.data.basicDim === "" || this.data.basicDim === 0) {
      return
    } else {
      this.formSubmit()
    }
  },
  selectToleranceLevelI: function () {
    this.setData({
      ToleranceLevel: 'I'
    })
    if (this.data.basicDim === "" || this.data.basicDim === 0) {
      return
    } else {
      this.formSubmit()
    }
  },
  selectToleranceLevelII: function () {
    this.setData({
      ToleranceLevel: 'II'
    })
    if (this.data.basicDim === "" || this.data.basicDim === 0) {
      return
    } else {
      this.formSubmit()
    }
  },
  dimInput: function (e) {
    this.setData({
      basicDim: e.detail.value
    })
    // console.log(HoleAxisLength.maxSize)
    // console.log(HoleAxisLength.minSize)
    // if (this.data.basicDim !== "" &&  this.data.basicDim !== 0 && this.data.basicDim <= HoleAxisLength.maxSize && this.data.basicDim >= HoleAxisLength.minSize) {
    //   this.formSubmit()
    // }
    // return {
    //   value: e.detail.value,
    // }
  },
  formSubmit: function (e) {
    try {
      let holeaxislength = new HoleAxisLength(this.data.basicDim);
      switch (this.data.ToleranceType) {
        case 'D':
          switch (this.data.ToleranceLevel) {
            case 'I':
              result = holeaxislength.getLevelIHole();
              console.log(result)
              this.setData({
                result: result
              })
              break;
            case 'II':
              result = holeaxislength.getLevelIIHole();
              this.setData({
                result: result
              })
              break;
          }
          break;
        case 'd':
          switch (this.data.ToleranceLevel) {
            case 'I':
              result = holeaxislength.getLevelIAxis();
              this.setData({
                result: result
              })
              break;
            case 'II':
              result = holeaxislength.getLevelIIAxis();
              this.setData({
                result: result
              })
              break;
          }
          break;
        case 'L':
          result = holeaxislength.getLength();
          console.log(result)
          this.setData({
            result: result
          })
          break;
      }
    } catch (err) {
      console.log(err)
      wx.showModal({
        title: '查询出错',
        content: err.message,
        showCancel: false,
      })

    }
  },
  formReset: function () {
    this.setData({
      basicDim: 0
    })
  }
})