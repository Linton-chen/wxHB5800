// pages/cuttingpiece/shapePosition/StraightnessAndFlatness/StraightnessAndFlatness.js
let StraightnessAndFlatnessData = [{
  text: '≤10',
  'le1_6': '0.03',
  'gt1_6': '0.06'
},{
  text: '>10～16',
  'le1_6': '0.04',
  'gt1_6': '0.08'
},{
  text: '>16～25',
  'le1_6': '0.05',
  'gt1_6': '0.10'
},{
  text: '>25～40',
  'le1_6': '0.06',
  'gt1_6': '0.12'
},{
  text: '>40～63',
  'le1_6': '0.08',
  'gt1_6': '0.15'
},{
  text: '>63～100',
  'le1_6': '0.10',
  'gt1_6': '0.20'
},{
  text: '>100～160',
  'le1_6': '0.12',
  'gt1_6': '0.25'
},{
  text: '>160～250',
  'le1_6': '0.15',
  'gt1_6': '0.30'
},{
  text: '>250～400',
  'le1_6': '0.20',
  'gt1_6': '0.40'
},{
  text: '>400～630',
  'le1_6': '0.25',
  'gt1_6': '0.50'
},{
  text: '>630～1000',
  'le1_6': '0.30',
  'gt1_6': '0.60'
},{
  text: '>1000～1600',
  'le1_6': '0.40',
  'gt1_6': '0.80'
},{
  text: '>1600～2500',
  'le1_6': '0.5',
  'gt1_6': '1.0'
},{
  text: '>2500～3150',
  'le1_6': '0.6',
  'gt1_6': '1.2'
}];


Page({
  data: {
    StraightnessAndFlatnessData: StraightnessAndFlatnessData,
    StraightnessAndFlatnessResult: StraightnessAndFlatnessData[0],
  },
  selectedChange: function (e) {
    const val = e.detail.value[0]
    this.setData({
      StraightnessAndFlatnessResult: StraightnessAndFlatnessData[val]
    })
  }
})