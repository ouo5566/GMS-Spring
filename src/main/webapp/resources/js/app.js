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
				location.href = app.x()+"/member/login";
			});
			$('#add_form_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/login";
			});
			$('#logout_btn').click(()=>{
				location.href = app.x()+"/member/logout";
			});
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
		path : x=>{
			return sessionStorage.getItem(x);
		}
}
app.x = ()=>{
	return app.session.path('context');
}
app.j = ()=>{
	return app.session.path('js');
}
app.c = ()=>{
	return app.session.path('css');
}
app.i = ()=>{
	return app.session.path('img');
}
