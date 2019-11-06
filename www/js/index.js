/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        var _this = this;
        document.getElementById("record").onclick = function(){
            _this.audioCapture();
        }
    },
    audioCapture: function() {
      // 开始录音（最长录制时间：10秒）
      navigator.device.capture.captureAudio(onSuccess, onError, {duration: 10});
 
      // 录制成功
      function onSuccess(mediaFiles) {
         var i, len;
        // 遍历获取录制的文件
                // 注意：iOS只支持一次录制一个视频或音频
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          console.log(mediaFiles[i]);
          var path = mediaFiles[i].fullPath;
                        path = decodeURIComponent(path);
                    var localURL = mediaFiles[i].localURL;
                        localURL = decodeURIComponent(localURL);
          alert("录制成功！\n\n"
             + "文件名：" + mediaFiles[i].name + "\n"
             + "大小：" + mediaFiles[i].size + "\n\n"
             + "localURL地址：" + localURL + "\n\n"
             + "fullPath地址：" + path);
         }
       }
 
       //录制失败
       function onError(error) {
          alert('录制失败！错误码：' + error.code);
       }
     }
 
};
 

app.initialize();
