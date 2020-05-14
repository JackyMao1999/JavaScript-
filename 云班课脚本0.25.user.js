// ==UserScript==
// @name         云班课脚本
// @namespace    http://tampermonkey.net/
// @version      0.25
// @description  云班课脚本【持续更新】1.可取消老师不可快进的视频2.添加电脑下载文件，本来只能在手机上下载文件3.优化，将下载按钮放至旁边，避免一起打开文件
// @author       JackyMao
// @match        https://www.mosoteach.cn/web/index.php?c=res&m=index&clazz_course_id=*
// @grant        none
// ==/UserScript==
// version 0.1：
// 1.可取消老师不可快进的视频
// version 0.2：
// 2.添加电脑下载文件，本来只能在手机上下载文件
// version 0.25:
// 3.优化，将下载按钮放至旁边，避免一起打开文件

(function() {
    'use strict'
    var i=0;
    var row_video = document.getElementsByClassName("res-row-open-enable res-row preview  drag-res-row")
    var row_file = document.getElementsByClassName("res-row-open-enable res-row preview-file  drag-res-row")

    //视频处理
    for (i=0;i<row_video.length;i++)
    {
        row_video[i].onclick= function(){video()};
    }
    function video(){
        var x = document.getElementsByTagName("video");
        x[0].controls=true;
        console.log(x[0]);
        var y = document.getElementsByClassName("mejs__controls");
        y[0].remove();
        console.log(y[0]);
    }
    //文件下载
    for (i=0;i<row_file.length;i++)
    {
        var file_path = row_file[i].getAttribute("data-href");
        var file_title = row_file[i].getElementsByClassName('res-name');
        console.log(file_path)
        var information = row_file[i].getElementsByClassName("create-box manual-order-hide-part");
        //新建一个节点
        var para = document.createElement("a");
        para.href=file_path;
        var node = document.createTextNode("下载"+file_title[0].title);
        para.append(node)
        //在父节点前添加一个超链接节点
        row_file[i].parentNode.insertBefore(para, row_file[i])
        //information[0].appendChild(para);
    }

    // Your code here...
})();
