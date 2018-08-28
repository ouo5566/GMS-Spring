"use strict" //에러가 나면 보여주겠다.
var app = app || {};
app = {
		init : x=>{
			console.log('step 1');
			app.session.context(x);	
			app.onCreate();
		},
		onCreate : ()=>{
			console.log('step 3');
			app.setContentView();
			$('#login_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/login";
			});
			$('#add_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/add";
			});
			$('#login_form_btn').click(()=>{
				$('#login-form')
					.attr({ action : app.x()+"/member/login",
							method : "POST"})
					.submit();
			});
			$('#add_form_btn').click(()=>{
				/*
				var form = document.getElementById('join-form');
				form.action = app.x() + "/member/add";
				form.method = "post";	
				form.submit();
				*/
				$('#join-form')
					.attr({	action : app.x() + "/member/add",
							method : "POST"	})
					.submit(); // 메소드체이닝
			});
			$('#logout_btn').click(()=>{
				location.href = app.x()+"/member/logout";
			});
			$('#update_move').click(()=>{
				location.href = app.x()+"/move/login/member/modify";
			});
			$('#update_btn').click(()=>{
				let form = document.getElementById('update-form');
				alert(form.password.value);
				if(form.password.value === ""){
					form.password.value = form.password.placeholder;
				}
				$('#update-form')
					.attr({ action : app.x() + "/member/modify",
							method : "POST"})
					.submit();
			});
			
			$("#update-form table tr:eq(0) td:eq(2)").text(app.session.getItem('memberId'));
			$("#update-form table tr:eq(1) td:eq(1)").text(app.session.getItem('name'));
			$("#update-form table tr:eq(4) td:eq(1)").text(app.session.getItem('age'));
			$("#update-form table tr:eq(3) td:eq(1)").text(app.session.getItem('gender'));
			
		},
		setContentView : ()=>{
			console.log('step 4'+app.j());
		}
};
app.session = {
		context : x=>{
			console.log('step 2'+x);
			sessionStorage.setItem('context', x);
			sessionStorage.setItem('js', x+'/resources/js');
			sessionStorage.setItem('css', x+'/resources/css');
			sessionStorage.setItem('img', x+'/resources/img');
		},
		getItem : x=>{
			return sessionStorage.getItem(x);
		}
}
app.x = ()=>{
	return app.session.getItem('context');
}
app.j = ()=>{
	return app.session.getItem('js');
}
app.c = ()=>{
	return app.session.getItem('css');
}
app.i = ()=>{
	return app.session.getItem('img');
}

var user = user || {};
user = {
	init : x =>{
		sessionStorage.setItem('memberId', x.memberId);
		sessionStorage.setItem('name', x.name);
		sessionStorage.setItem('age', x.age);
		sessionStorage.setItem('gender', x.gender);
		sessionStorage.setItem('teamId', x.teamId);
		sessionStorage.setItem('roll', x.roll);
	}
}
