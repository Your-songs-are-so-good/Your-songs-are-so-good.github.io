// ==UserScript==
// @name         校园网快速填充登录
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  校园网快速填充登录
// @author       jack.chenyuana@gmail.com
// @match        http://222.204.3.154/*
// @icon         https://www.google.com/s2/favicons?domain=3.154
// @grant        none
// ==/UserScript==

//校园网账号
var username = '';
//校园网密码
var userpassword = '';
//网络类型 1表示移动 2表示校园网 3表示电信 4表示联通
var network = 1;
//开启自动登录,默认开启1，关闭0
var login = 1;


    (function () {
        var flag = localStorage.getItem('flag');
        if (flag == null) {
            flag = '1';
            localStorage.setItem('flag', '1');
        }
        if (window.location.pathname == "/srun_portal_success" && flag == '1') {
            window.location.href = 'http://222.204.3.154/';
            localStorage.setItem('flag', '0');
        }
        if (window.location.pathname == "/srun_portal_success" && flag == '0') {
            localStorage.setItem('flag', '1');
        }
        if (window.location.pathname == "/srun_portal_pc") {
            //填充信息
            let name = $('.form-control')[0];
            let password = $('.form-control')[1];
            name.value = username;
            password.value = userpassword;
            document.querySelector('#domain').options[network].selected = true;
            //自动登录
            if (login == 1) {
                window.addEventListener('load', function () {
                    $('#login').click().addClass('active');
                    setTimeout(function () { $('#login').removeClass('active'); }, 100);
                });
            }
        }
    })();