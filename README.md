a react toast component

### Params

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
id | `string` | a random string | the toast's id
msg | `string` |  | the message showed in toast
className | `string` | | a custom class for toast
horizontal | `string` | `center` | Position horizontal of toast. There are 3 pre-defined positions: `center`,`left`,`right`
vertical | `string` | `middle` | Position vertical of toast. There are 3 pre-defined positions: `middle`,`top`,`bottom`
duration | `number` | 2000 | how long time the toast show,unit is milliscond
mode | `string` | `override` | Built-in modes: `override`,`queue`. If `override`, the last toast will forcibly flush previous. If `queue`, toast will show after last hide
transition | `string` | `fade` | Built-in transitions: `fade`
onClose | `function` |  | the callback function after toast hide

### Methods

Name | Parameter | return Value | Description
--------- | ---------- | -----------|-----------
info | above |  | pop up message with black background
success | above |  | pop up message with green background
warning | above | | pop up message with yelllow background
error | above |  | pop up message with red background
close | id：toast's id | | close specificed toast
closeAll |   |  | close all toast
