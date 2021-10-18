## Part2 Question answers ##
#### Xianglong Wang A15584153 ###

### q1 
Line 12 will output 3. Since the variable i is incremented by 1, three times.

### q2
Line 13 will output 150. The variable 'discountedPrice' has a latest value 150.

### q3 
Line 14 will output 150. The vairable 'finalPrice' is the rounded 'discounterPrice'.
which means round(150) = 150.

### q4
The function will return a list: [50, 100,150], since the input value is a list: [100, 200, 300]. 
And at each iteration, the list's ith index item will be discounted by 50%, and the final result
would be each number in the initial index discounted by 50%.

### q5
There will be an error at line 12. It is because the variable 'i' is a 'let' type variable, which means
that variable 'i's' scope is limited in the for-loop and cannot be accessed from outside. Thus, the situation become like, at line 12, there is not such a defined variable 'i' and will cause an error.

### q6
There will be an error at line 13. It is becuase the variable 'discountedPrice' is a 'let' type variable and has a limited scope in the for-loop. Line 13 is outside the scope and there is not such a defined variable 'discountedPrice' atline 13. 

### q7
It will output 150. Though the 'finalPrice' is a 'let' type variable, its scope is the whole function, thus, unlike the previous two quesions, line 14 will output normally and it is 150.

### q8 
It will return a list: [50, 100, 150]. Though the variable are changed and their scope are changed. These variables still work properly in their dedicated scope. Thus the return value will not change. 

### q9 
There will be an error. It is because the variable 'i's' scope is still in the for-loop and cannot be acessed from outside.

### q10  
Line 12 will output the value of length: 3. Since length is a constant within the funciton. 

### q11 
The function will return a list: [50, 100, 150]. It is because though the varible 'discounted' is a 'const', it does not mean it is immutable. It is still possible to push an value into it. However, we should notice that we cannot reassign value of a 'const' type variable.

### q12
A. student.name 
B. student['Grad Year']
C. student.greeting() 
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

### q13
A. '3'+2 = '32', since interger is converted to its string representation
B. '3' - 2 = 1, since the string is converted to its integer representation
C. 3 + null = 3, since null is as integer 0
D. '3' + null = '3null'
E. true + 3 = 4, since true is treated as integer 1 
F. false + null = 0, since false is represented by interger 0 and null is a absence value.
and the operator cannot handle the booelan operation, thus false is conveted to 0. 
G. '3' + undefined =  '3undefined', since undefined is represented by string
H. '3' - undefined = NaN, since it is illegal to do such operation

### q14

### q15

### q16
Please refer to part2-question16.js

### q17
