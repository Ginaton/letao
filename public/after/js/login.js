// $(function () {
//   $("form").bootstrapValidator({
//     // feedbackIcons: {
//     //   valid: 'glyphicon glyphicon-ok',
//     //   invalid: 'glyphicon glyphicon-remove',
//     //   validating: 'glyphicon glyphicon-refresh'
//     // },
//     feedbackIcons: {
//       valid: 'glyphicon glyphicon-ok',
//       invalid: 'glyphicon glyphicon-remove',
//       validating: 'glyphicon glyphicon-refresh'
//   },
//     fields:{
//       username:{
//         validator:{
//           notEmpty:{
//             message:"。。。"
//           }
//         }
//       },
//       password:{
//         validator:{
//           notEmpty:{
//             message:"..."
//           }
//         }
//       }
//     }
//    })//.on("success.form.bv",function (e) {
//   //   e.preventDefault();
//   // })
// });
$(function () {
  // var $form = $('form')
  $('form').bootstrapValidator({
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
                    }
              }
          }
      }
  });


  // 表单校验成功之后会触发success.form.bv事件
  // $form.on("success.form.bv", function (e) {
  //     e.preventDefault();
  //     // console.log("1111")
  //     $.ajax({
  //         type: "post",
  //         url: "/employee/employeeLogin",
  //         data:$form.serialize(),
  //         dataType:"json",
  //         success: function (data) {
  //             console.log(data)
              
  //         }
  //     })
  // })
 
});

