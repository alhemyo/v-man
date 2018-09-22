## Endpoint

[GET] /thisuser

[GET] /user

[GET] /user/&lt;id>

[GET] /user/&lt;umcn>/projects

[GET] /myprojects

[GET] /project

[GET] /project/&lt;project_id>/tasks

[GET] /task/&lt;id>/notes

[POST] /login

[POST] /user

{
	"IdExpireDate": "01-01-2018",
	"IdNumber":"",
	"accNumber":"",
	"address":"",
	"admin_type":"uber admin",
	"bank":"",
	"birthday":"01-01-2018",
	"city":"",
	"education":"",
	"email":"ignat14@gmail.com",
	"employmentDate":"01-01-2018",
	"gender":"",
	"is_admin":true,
	"name":"Ignat",
	"payment":"",
	"phone":"",
	"position":"",
	"surname":"Petrov",
	"umcn":"192894785792"
}

[POST] /project

{
	"admin_id": "11234132",
	"user_ids": ["12421344", "5241452"],
	"name": "project Y",
	"deadline": "18-01-2018",
	"priority": "high",
	"client": "Mill"
}

[POST] /project/&lt;project_id>/users

{
	"users": ["012124325213125436", "01929876543212"],
	"admins": ["012124325213125436"]
}


[POST] /task

{
	"project": "45",
    	"name": "mdd055_mp_v001",
	"priority": "high",
	"state": "rotomation",
	"thumbnail": "some/path",
	"deadline": "234143124",
	"download": "132412412",
	"created": "123412431",
	"finished": "12341234",
	"upload": "12341234",
	"users": ["user1", "user2"],
	"notes": [{"message": "hello", "date": "1212344"}, {"message": "hi again", "date": "3412341243"}]
}

[POST] /task/&lt;id>/users

{
	users: ['123412343124', '123432143124']
}

[POST] /task/&lt;id>/note

{
	"client": "Method",
	"date": "25-08-2018",
	"message": "Hello"
}

[PUT] /user/&lt;umcn>

[DELETE] /user/&lt;umcn>


