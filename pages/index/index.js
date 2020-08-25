// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    width:0,
    height:0,
    name: "谢思阳",
    spell: "Scion Xie",
    job: "深度学习算法工程师",
    exp: "1年相关经验",
    tel: "13510861210",
    gender:"男",
    age:31,
    email: "xiesiyang@126.com",
    address: "广东省深圳市南山区蛇口街道工业七路",
    skill:[
      {name: "Java", percent: 85},
      {name: "HTML/CSS/JavaScript", percent: 90},
      {name: "Python", percent: 90},
      {name: "C++", percent: 80},
    ],
    education:[
      {
        school: "International Technological University", 
        major: "软件工程(硕士)", 
        year: "2017-2019",
        desc: "International Technological University是一所位于美国加利福尼亚州圣荷西市的私立院校。本人在此获得理学硕士学位，主修专业为软件工程。在校期间表现良好，成绩优秀，获得过优秀毕业生荣誉。"
      },
      {
        school: "西安交通大学",
        major:"自动化(本科)",
        year:"2007-2013",
        desc:"西安交通大学是一所位于陕西省西安市的985和211重点院校。本人在此获得工学学士学位，主修专业为自动化。在校期间表现良好，成绩优秀，曾担任校学生会干事。"
      }
    ],
    work:[
      {
        company: "广州致讯科技有限公司",
        job:"嵌入式算法移植工程师",
        year:"2020/04-至今",
        desc:"广州致讯科技有限公司是位于广州市黄浦区的一家国有企业，是隶属于云南电网的一家子公司，主要从事南方电网领导的智能电网管理平台项目建设。"
      },
      {
        company:"东莞先知大数据有限公司",
        job:"软件工程师",
        year:"2019/08-2020/04",
        desc:"东莞先知大数据有限公司是位于东莞市南城区的一家人工智能和大数据创业公司，主要经营政府招标的重工业设备安全维护项目，提供安全生产和智能化管理解决方案。"
      },
      {
        company: "深圳市金远东科技有限公司",
        job:"销售工程师",
        year:"2014/08-2015/03",
        desc:"深圳市金远东科技有限公司是位于深圳市南山区的一家半导体产品代理商，主要经营工业用高精度晶振，长期供应国内手机、雷达、基站等设备的生产商。"
      },
      {
        company: "深圳市健思研科技有限公司",
        job:"软件工程师",
        year:"2013/08-2014/08",
        desc:"深圳市健思研科技有限公司是位于深圳市南山区的一家创新企业，主要致力于研发和生产各类电测模块，提供工业、家庭用电优化方案。"
      }
    ],
    project:[
      {
        name:"南方电网智能电网机巡项目",
        company:"广州致讯科技有限公司",
        year:"2020/04-至今",
        desc:"该项目是南方电网智能电网管理平台的一部分，主要包括无人机、机载AI、可见光图像、红外摄像、激光雷达等模块。该项目采用激光点云建模，在手动设定好飞行航路后，无人机可以自主完成机巡业务。巡检的内容包括：输电通道、高塔、绝缘子、防爆锤、连接金具等。机载AI模块采用YOLOv3算法，根据不同等机载计算机的性能会采用不同的算法模型。在本人与四名同事的共同努力下，实现了目标识别、缺陷检测的机载AI模块和其他部分飞控功能的开发、测试和移植工作。本人负责算法移植、优化和部分飞控功能开发。参与测试和调试工作，编写软件开发文档。"
      },
      {
        name:"成都铁路局“扁鹊”轨道探伤工程车项目",
        company:"东莞先知大数据有限公司",
        year:"2019/08-2020/04",
        desc:"该项目是与成都铁路局合作，基于超声波检测、视觉检测和大数据分析平台开发的国家级工程项目。设备用于检测钢轨内部和外部由于摩擦受力产生的裂纹、伤痕、掉块，以及相关配件的断裂和缺失。该项目节省了人力、钢材和时间成本，提高了传统探伤方法的检测精度，为铁路、高铁和地铁等有轨列车安全行驶提供保障。本人在项目中主要从事相关配件（如钢轨扣件）断裂缺失等视觉检测算法工作。"
      },
      {
        name:"“明厨亮灶”智慧监管大数据平台",
        company:"东莞先知大数据有限公司",
        year:"2019/08-2020/04",
        desc:"该项目是东莞市政府带头相应国家监管部门要求，搭建的智慧监管平台。本人主要负责目标检测方面的算法工作，通过视频监管食品加工区的违规行为。可以检测的违规行为包括：缺勤、未按要求佩戴口罩帽子、工作时间玩手机、非工作时间进入工作区间等。使用等算法主要是YOLOv3。"
      },
      {
        name:"开封市公安局刑侦系统",
        company:"深圳健思研科技有限公司",
        year:"2013/10-2014/05",
        desc:"该项目是开封市公安局刑侦大平台的一部分功能，使用追踪设备追踪定位犯罪嫌疑人的地理位置和运动状态分析。设备主要由追踪器、卫星定位、基站定位、地磁传感等模块组成，通过卫星定位和基站定位锁定目标的三维坐标，通过地磁传感器和经纬变化来分析其运动状态。本人在该项目中承担设备的定位和姿态分析算法开发。"
      }
    ]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight

    this.setData({
      width:width,
      height:height
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})