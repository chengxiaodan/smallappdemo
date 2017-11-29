// map.js
import QQMapWX from '../../common/qqmap-wx-jssdk.min.js'
var qqmapsdk;
Page({
  data: {
      markers: [
        {
        iconPath: "images/icon_map_pin_bule@3x.png",
        id: 0,
        latitude: 31.230010,
        longitude: 121.472000,
        width: 25,
        height: 30
      },
      {
        iconPath: "images/icon_map_pin_bule@3x.png",
        id: 0,
        latitude: 31.230000,
        longitude: 121.470000,
        width: 25,
        height: 30
      }
    ],
    circles:[{
      latitude: 31.230010,
      longitude: 121.472000,
      // color: '#0000ff33',
      fillColor: '#0000ff66',
      radius:100
    }]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'WWKBZ-3G2KP-YUQDN-VFCUV-D57X6-Y3FAX'
    });

  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 31.230416,
        longitude: 121.4,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 31.1,
        longitude: 121.0,
      }, {
        latitude: 31.0,
        longitude: 121.0,
      }]
    })
  }
})