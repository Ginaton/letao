$(function () {
    var $form = $('form')
    $form.bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            // 校验用户名
            username: {
                validators: {
                    // 不能为空 
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    callback: {
                        message:"用户名不存在"
                    }

                    
                }
            },
            password: {
                // 多个校验
                validators: {
                    notEmpty: {
                        message: "密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "密码长度是6-12位"
                    },
                    callback: {
                        message:"密码错误"
                    }
                }
            }
        }
    });


    // 表单校验成功之后会触发success.form.bv事件
    $form.on("success.form.bv", function (e) {
        e.preventDefault();
        // console.log("1111")
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data:$form.serialize(),
            dataType:"json",
            success: function (data) {
                // console.log(data)
                // 如果成功跳转到首页
                if (data.success) {
                    location.href = "index.html";
                }
                if (data.error == 1000) {
                    // 用户名不存在
                    $form.data("bootstrapValidator").updateStatus("username", "INVALID", "callback");

                }
                if (data.error == 1001) {
                    // 密码错误
                    $form.data("bootstrapValidator").updateStatus("password", "INVALID", "callback");

                }             
            }
        })
    })
    // 重置按钮
    $("[type='reset']").on('click', function () {
        // 重置样式
        $form.data("bootstrapValidator").resetForm();
    })
   
});
