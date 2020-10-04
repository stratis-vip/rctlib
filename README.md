
# React Library (rctlib)  
A library of React components for everyday use.  
  
**Contents**  
[Ιnstallation](#installation)  
[Timer Component](#timer-component) 
[ShowTime Component](#showtime-component)

  
### Installation  
Installation is as simple as 
``` npm i --save rctlib```
After that you importing the components by their name. For example and for the component TimerComponent:
#### Plain Javascript
```javascript 
const TimerComponent = require('rctlib')
```
####  ES6+
```typescript
import {TimerComponent, ...} from 'rctlib'
```
There is no need to install types, cause they are allready included.

### Timer Component  
A component with no vsual representation. It handles a inner Timer that's fire an *action* every *interval* time
#### Use 
```react  
<TimerComponent {...props}/>  
```
where props is of type TimerProps:
 ```typescript
 interface TimerProps {
	 on: boolean;  
	 action: any;  
	 interval?: number;  
}
```
|property|use
|:-|:-
|on|*true* for active
|action|the function to execute every interval
|interval|the interval in milliseconds. if undefined then default to 1000
Example:
```typescript
	import {TimerComponent} from 'rctlib'
	.....
	const App = () =>{
	return (
		<div>
			<TimerComponent on={true} action={()=> console.log('tik')} interval={2000} />
			....
		</div>
		)
	}
	....
```
### ShowTime Component  
A component that show the time passed! 
If time (in seconds) is bigger than a day, it's show thw days, months and years in front of the time, wich it represnets ti in 24h format.

#### Use 
```react  
<ShowTimeComponent {...props}/>  
```
where props is of type:
 ```typescript
 interface {
	 secs: number;
	 descriptions?: Description  
}
```
and *Description* interface is of type:
```typescript
interface  Description  {
	years:string	//default value 'Χρ'
	months:string	//default value 'Μν'
	days:  string	//default value 'Ημ'
}
```
|property|use
|:-|:-
|secs|the time to show in seconds 
|descriptions?|An optional collection of strings to describe days, months, years.

Example (will show *00:57:34*):
```typescript
	import {ShowTimeComponent} from 'rctlib'
	.....
	const App = () =>{
	return (
		<div>
			<ShowTimeComponent secs={3454} />
			....
		</div>
		)
	}
	....
```