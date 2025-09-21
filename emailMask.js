 function emailMask(email) {
	 const atIndex=email.indexOf("@");
     if(atIndex<=1) return email
     const name=email.slice(0, atIndex);
     const domain=email.slice(atIndex);
     const masked=email[0]+ email[1] + "*".repeat(name.length - 3) + name[name.length - 1];
     return masked + domain
     
}
console.log(emailMask("avithapolinary@gmail.com"));

