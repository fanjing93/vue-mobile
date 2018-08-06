(function() {
    /* 合并对象 */
    function _extend(a, b) {
        for (key in b) a[key] = b[key];
        return a;
    };
    /* 添加class */
    function _addClass(dom, cName) {
        var oCName = dom.getAttribute('class');
        dom.setAttribute('class', oCName + ' ' + cName);
    };

    //构造函数
    var dialog = function() {};
    //原型继承
    dialog.prototype.init = function(config) {
        var doc = document,
            body = doc.body,
            dialogBg = doc.getElementById('J_dialogBg');
        //如果没有弹窗背景dom则添加，有则删除
        if (!dialogBg) {
            var dialogBg = doc.createElement('div');
            dialogBg.className = 'dialog_bg';
            dialogBg.id = 'JS_dialogBg';
            dialogBg.style.height = '100%';
            body.appendChild(dialogBg);
        } else {
            body.removeChild(dialogBg);
        }
        //简易提示
        if (typeof config == 'string') {
            var dialogTips = doc.createElement('span');
            dialogTips.className = 'dialog_tips in1';
            dialogTips.innerHTML = config;
            dialogBg.style.background = 'none';
            dialogBg.appendChild(dialogTips);
            setTimeout(function() {
                _addClass(dialogTips, 'out1');
                setTimeout(function() {
                    body.removeChild(dialogBg);
                }, 600);
            }, 1000);
        }

        //复杂弹窗
        if (typeof config == 'object') {
            //一些活动弹窗，在页面写弹窗dom
            if (config.type == 'popup') {
                //设置容器样式名
                var popup = doc.getElementById(config.contain);
                if (config.bodyId) {
                    if (document.getElementById(config.bodyId)) {
                        document.getElementById(config.bodyId).getElementsByTagName('div')[0]
                    }
                }
                var popupHtml = '';
                //如果页面存在弹窗dom，获取弹窗innerHTML并添加到window对象，同时把弹窗从body中移除
                if (popup) {
                    popupHtml = popup.innerHTML;
                    window[config.contain] = popupHtml;
                    //body.removeChild(popup);
                    if (config.bodyId) {
                        // document.getElementById(config.bodyId).remove();
                        var elmBi = document.getElementById(config.bodyId);
                        elmBi.parentNode.removeChild(elmBi);
                    } else {
                        body.removeChild(popup);
                    }
                    //如果页面不存在弹窗dom，则从window里面取出
                } else {
                    popupHtml = window[config.contain];
                }
                var popupBg = doc.createElement('div');
                popupBg.className = 'popup_bg';
                popupBg.id = 'JS_popupBg';
                popupBg.innerHTML = popupHtml;
                body.appendChild(popupBg);
                //如果弹窗有进入动画
                if (config.inClass) {
                    //设置背景动画样式
                    _addClass(dialogBg, 'dialog_bg_in');
                    _addClass(doc.getElementById(config.popup), config.inClass);
                } else {
                    dialogBg.style.background = 'rgba(0,0,0,.6)';
                }

                if (config.offPopup) {
                    doc.getElementById(config.offPopup).onclick = function() {
                        if (config.outClass) {
                            _addClass(doc.getElementById(config.popup), config.outClass);
                            _addClass(dialogBg, 'dialog_bg_out');
                            setTimeout(function() {
                                body.removeChild(dialogBg);
                                body.removeChild(popupBg);
                            }, 300);
                            return;
                        }
                        body.removeChild(dialogBg);
                        body.removeChild(popupBg);
                    };
                }

            }
            //系统固定样式对话框，js渲染dom
            if (config.type == 'dialog' || !config.type) {
                dialogBg.style.background = 'rgba(0,0,0,.6)';
                var dialog = doc.createElement('div'),
                    dialogTitle = doc.createElement('p'),
                    dialogMsg = doc.createElement('div'),
                    dialogBtns = doc.createElement('div');
                dialog.className = 'dialog';
                dialogTitle.className = 'dialog_title';
                dialogTitle.innerHTML = config.title;
                dialogMsg.className = 'dialog_msg';
                dialogMsg.innerHTML = config.msg;
                dialogBtns.className = 'dialog_btns';
                //重绘按钮
                var btns = config.btns;
                if (typeof btns == 'string') {
                    dialogBtns.innerHTML = '<a href="javascript:;" id="J_dialogBtnsL">' + btns + '</a>';
                }
                if (btns instanceof Array && btns.length == 2) {
                    var btnsLeft = btns[0],
                        btnsRight = btns[1];
                    dialogBtns.innerHTML = '<a href="javascript:;" class="dialog_btns_left" id="J_dialogBtnsL">' + btnsLeft + '</a> <a href="javascript:;" class="dialog_btns_right" id="J_dialogBtnsR">' + btnsRight + '</a>';
                }
                dialog.appendChild(dialogTitle);
                dialog.appendChild(dialogMsg);
                dialog.appendChild(dialogBtns);
                dialogBg.appendChild(dialog);
                //关闭弹窗按钮
                doc.getElementById('J_dialogBtnsL').onclick = function() {
                    body.removeChild(dialogBg);
                };
            }
            //传入函数
            if (config.callBack && typeof config.callBack == 'function') config.callBack();
        }
    };
    //返回构造函数
    return window.dialog = dialog;

})();
/*===========================
dialog AMD Export
===========================*/
if (typeof(module) !== 'undefined') {
    module.exports = window.dialog;
} else if (typeof define === 'function' && define.amd) {
    define([], function() {
        'use strict';
        return window.dialog;
    });
}
