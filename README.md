# Js Simple Post Function For Json Objects and Form Datas (BOTH)
Simple Pure JS POST Function for Json Objects and Form Datas

I created a function for to post my json objects and form datas.
I tried to post json with fetch api but because of some reason, json did not worked. I research a lot but I couldn't solve the problem.
So here the solution is.
Basically works like that: Check the parameter(data) and detect the format (json or array or text or form data). If it is json or array (object) iterate it and append all into form data then post.
if it is text try to parse it and iterate it then append them into formdata and post.
if it is form data just post
else return false
# Example Usages

    //as an object (json)
    let data = {test:"test};
	//as a string
    let data = '"test":"test"';
    //as an array
    let data = [1,2,3,4,5,6,7,8];
	//as a form data
	let data = new FormData();
    data.append("test","test");

	Post(url,json).then(data=>{
		console.log(data);
	})
    
