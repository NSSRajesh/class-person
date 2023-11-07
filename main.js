class Person{
	constructor(name,age,country){
		this.name=name;
		this.age=age;
		this.country=country;
	}
	display(){
		console.log(`Hi,I am ${this.name}, form ${this.country}`);
	}
}
let res1=new Person("selva",20,"India");
let res2=new Person("Rajesh",20,"India");
res1.display();
res2.display();