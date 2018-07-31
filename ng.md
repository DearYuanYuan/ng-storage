# angular

	angular使用了typescript，首先先要了解下typescript

## typescript

	typescript是javascript的超集，本质上向js添加了可选的静态类型和基于类的面向对象编程。

### 数据类型

一种轻量级的为函数或者变量添加约束的方式

> Boolean

布尔值：true/false

	let isDone: boolean = false; // tsc => var isDone = false;

> Number

与js一样，typescript里的所有数字都是浮点数 number类型

	let count: number = 10; // tsc => var count = 10

> String

字符串，可以使用“”或者’‘表示字符串

	let name: string = 'Semliker'; // tsc => var name = 'Semlinker'

还可以使用字符串模板，可以定义多行文本和内嵌表达式。这种字符串是被反引号包围（``），并且以${ expr }形式嵌入表达式

	let name: string = `jim` ;

	let age: number = 37;

	let word: string = `hello,my name is ${ name },i will be ${ age } years old next mounth .`

与下面定义的方式效果相同

	let word: string = "hello,my name is "+ name +",i will be"+ age +"years old next mounth ."

> Array

	let list: number[] = [1,2,3]; // var list = [1,2,3]

	let list: Array > = [1,2,3]; // var list = [1,2,3]

> enum 枚举

enum类型是对js标准数据类型的一个补充

	enum Direction {
	    NORTH，
	    SOUTH，
	    EAST，
	    WEST
	};

	let dir: Direction = Direction.NORTH;

默认情况下，从0开始为元素编号，你也可以手动指定成员的数值：

	enum Color {Red = 1, Green, Blue}
	let c: Color = Color.Green;

或者，全部采用手动赋值：

	enum Color {Red = 1, Green = 2, Blue = 4}
	let c: Color = Color.Green;

> any

动态内容，不指定固定的数据类型

	let notSure: any = 4;
	let notSure: any = 'string';
	...

> void

void类型与any类型相反，它表示没有任何类型。
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

	let unusable: void = undefined;

> tuple

元组类型允许一个已知元素数量和类型的数组，各元素的类型不必相同。

	// Declare a tuple type
	let x: [string, number];
	// Initialize it
	x = ['hello', 10]; // OK
	// Initialize it incorrectly
	x = [10, 'hello']; // Error

> Null 和 Undefined

TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null.

	let u: undefined = undefined;
	let n: null = null;

> Never

表示的是那些永不存在的值的类型.(感觉不常用)

> 类型断言

类型断言有两种形式。 其一是“尖括号”语法：

	let someValue: any = "this is a string";

	let strLength: number = (<string>someValue).length;
另一个为as语法：

	let someValue: any = "this is a string";

	let strLength: number = (someValue as string).length;

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。

### 变量声明

let和const是JavaScript里相对较新的变量声明方式。 像我们之前提到过的， let在很多方面与var是相似的，但是可以帮助大家避免在JavaScript里常见一些问题。 const是对let的一个增强，它能阻止对一个变量再次赋值。
查看ES6阅读更多关于变量声明的用法。

### 接口



### 类

## angular项目开发

### 环境搭建

#### 安装angular-cli

> npm install -g @angular/cli

#### 创建新项目

> ng new ngProject

	在选定的文件夹中，创建一个ng项目

#### 启动

> ng serve --open

	ng serve 命令会构建应用，启动开发服务器、监听源文件，并当文件发生变化时重新构建应用
	--open 标志会打开浏览器，并访问 http://localhost:4200/

#### 项目结构介绍

	稍等...

#### ng的一些用法

##### 创建一个新组件

> ng genarate component newComponent

	对应会在src/app文件夹下生成newComponent文件夹，文件夹里对应有.html,.ts,.css,四个文件


