# JsPostFunction
Simple Pure JS POST Function for Json Objects and Form Datas

I created a function for to post my json objects and form datas.
I tried to post json with fetch api but cause of some reason json did not worked. I research a lot but I couldn't solve the problem.
So here the solution is.
Basically work like that: Check the parameter(data) and detect the format (json or form data). If it is json iterate it and append all into form data then post.
