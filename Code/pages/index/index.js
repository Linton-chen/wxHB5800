let PrefaceData = require('../../Data/Preface.js')
let ScopeData = require('../../Data/Scope.js')
let RefStandardData = require('../../Data/RefStandard.js')
let DefinitionData = require('../../Data/Definition.js')
let GeneralPrincipleData = require('../../Data/GeneralPrinciples.js')


Page({
    data: {
        PrefaceContent: PrefaceData,
        PrefaceContentShow: false,
        ScopeContent: ScopeData,
        ScopeContentShow: false,
        RefStandardContent: RefStandardData,
        RefStandardContentShow: false,
        DefinitionContent: DefinitionData,
        DefinitionContentShow: false,
        GeneralPrincipleContent: GeneralPrincipleData,
        GeneralPrincipleContentShow: false,
        CuttingPieceContentShow: false,
        LinerIndex: [{
            title: '孔D、轴d、及长度L',
            url: '/pages/cuttingpiece/liner/HoleAxisLength/HoleAxisLength'
        }, {
            title: '钻孔深度L1及螺纹长度L2',
            url: '/pages/cuttingpiece/liner/HoleAndScrewDepth/HoleAndScrewDepth'
        }, {
            title: '转接半径r和倒角L3及其角度45°',
            url: '/pages/cuttingpiece/liner/CornorChamAndAngle/CornorChamAndAngle'
        }, {
            title: '非转接半径R',
            url: '/pages/cuttingpiece/liner/RadiusR/RadiusR'
        }, {
            title: '零件内部和外部的棱角',
            url: '/pages/cuttingpiece/liner/Edges/Edges'
        }],
        PosShapeIndex: [{
            title: '直线度和平面度',
            url: '/pages/cuttingpiece/shapePosition/StraightnessAndFlatness/StraightnessAndFlatness'
        }, {
            title: '圆度',
            url: '/pages/cuttingpiece/shapePosition/Roundness/Roundness'
        }, {
            title: '圆柱度',
            url: '/pages/cuttingpiece/shapePosition/Cylindricity/Cylindricity'
        }, {
            title: '平行度',
            url: '/pages/cuttingpiece/shapePosition/Parallelism/Parallelism'
        }, {
            title: '垂直度、倾斜度',
            url: '/pages/cuttingpiece/shapePosition/VerticalnessAndInclination/VerticalnessAndInclination'
        }, {
            title: '同轴度',
            url: '/pages/cuttingpiece/shapePosition/Concentricity/Concentricity'
        }, {
            title: '径向圆跳动及对称度',
            url: '/pages/cuttingpiece/shapePosition/RadialRunoutAndSymmetry/RadialRunoutAndSymmetry'
        }]
    },
    togglePrefaceShowStatus: function () {
        let temp = !this.data.PrefaceContentShow
        this.setData({
            PrefaceContentShow: temp
        })
    },
    toggleScopeShowStatus: function () {
        this.setData({
            ScopeContentShow: !this.data.ScopeContentShow
        })
    },
    toggleRefStandardShowStatus: function () {
        this.setData({
            RefStandardContentShow: !this.data.RefStandardContentShow
        })
    },
    toggleDefinitionShowStatus: function () {
        this.setData({
            DefinitionContentShow: !this.data.DefinitionContentShow
        })
    },
    toggleGeneralPrincipleShowStatus: function () {
        this.setData({
            GeneralPrincipleContentShow: !this.data.GeneralPrincipleContentShow
        })
    },
    toggleCuttingPieceContentShowStatus: function () {
        this.setData({
            CuttingPieceContentShow: !this.data.CuttingPieceContentShow
        })
    }

})